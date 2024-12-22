import { Url } from "../domain/url";
import { UrlEndereco } from "../domain/url-address";
import { GatewayUrl } from "../domain/url-gateway";
import { UrlFactory } from "../domain/url-short-factory";

class InputUpdate {
  id!: string;
  origin!: string;
}

class InputUpdateOutput {
  id!: string;
  origin!: string;
}

// use-case
export class UseCaseUpdate {
  private gatewayUrl: GatewayUrl;

  constructor(gatewayUrl: GatewayUrl) {
    this.gatewayUrl = gatewayUrl;
  }

  execute(input: InputUpdate): InputUpdateOutput {
    const url = this.gatewayUrl.findById(input.id);

    const updatedUrl = url!.updateOrigin(input.origin);

    this.gatewayUrl.update(updatedUrl);

    return { id: updatedUrl.getId(), origin: updatedUrl.getOrigin() };
  }
}
