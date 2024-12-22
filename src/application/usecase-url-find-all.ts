import { GatewayUrl } from "../domain/url-gateway";

class InputOutput {
  id!: string;
  orgin!: string;
  short!: string;
  city!: string;
  state!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

// use-case
export class UseCaseFindAll {
  private gatewayUrl: GatewayUrl;

  constructor(gatewayUrl: GatewayUrl) {
    this.gatewayUrl = gatewayUrl;
  }

  execute(): InputOutput[] {
    const result = this.gatewayUrl.findByAll();

    return result.map((url) => {
      return {
        id: url.getId(),
        orgin: url.getOrigin(),
        short: url.getShort().value(),
        type: url.getShort().type(),
        city: url.getAddress().getCity(),
        state: url.getAddress().getState(),
        createdAt: url.getCreatedAt(),
        updatedAt: url.getUpdatedAt(),
      };
    });
  }
}
