import { UrlHash } from "./url-hash";
import { UrlShort } from "./url-short";
import { UrlUUID } from "./url-uuid";

export class UrlFactory {
  static create(type: string): UrlShort {
    switch (type) {
      case "hash":
        return UrlHash.create();
      case "uuid":
        return UrlUUID.create();
      default:
        throw new Error("Not implmentation");
    }
  }

  static with(value: string, type: string): UrlShort {
    switch (type) {
      case "hash":
        return UrlHash.with(value);
      case "uuid":
        return UrlUUID.with(value);
      default:
        throw new Error("Not implmentation");
    }
  }
}
