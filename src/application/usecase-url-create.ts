import { Url } from "../domain/url";
import { UrlAddress } from "../domain/url-address";
import { GatewayUrl } from "../domain/url-gateway";
import { UrlFactory } from "../domain/url-short-factory";

class InputCreate {
  origin!: string;
  type!: string;
  city!: string;
  state!: string;
}

class InputCreateOutput {
  id!: string;
  hash!: string;
  origin!: string;
}

// use-case
export class UseCaseCreate {
  private gatewayUrl: GatewayUrl;

  constructor(gatewayUrl: GatewayUrl) {
    this.gatewayUrl = gatewayUrl;
  }

  execute(input: InputCreate): InputCreateOutput {
    const urlAddress = UrlAddress.create(input.city, input.state);
    const urlShort = UrlFactory.create(input.type);
    const url = Url.create(input.origin, urlShort, urlAddress);

    this.gatewayUrl.create(url);

    return {
      id: url.getId(),
      hash: url.getShort().value(),
      origin: url.getOrigin(),
    };
  }
}
