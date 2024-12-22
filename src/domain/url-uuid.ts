import { v4 as uuidv4 } from "uuid";
import { UrlShort } from "./url-short";

/// entity
export class UrlUUID implements UrlShort {
  private uuid: string;

  value(): string {
    return this.uuid;
  }

  type(): string {
    return "uuid";
  }

  private constructor(uuid: string) {
    this.uuid = uuid;
  }

  static create(): UrlUUID {
    return new UrlUUID(uuidv4());
  }

  static with(value: string): UrlUUID {
    return new UrlUUID(value);
  }
}
