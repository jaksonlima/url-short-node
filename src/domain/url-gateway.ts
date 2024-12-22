import { Url } from "./url";

export interface GatewayUrl {
  create(url: Url): Url;
  update(url: Url): Url;
  findById(id: string): Url | undefined;
  findByAll(): Url[];
}
