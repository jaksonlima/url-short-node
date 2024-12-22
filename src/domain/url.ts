import { v4 as uuidv4 } from "uuid";
import { UrlShort } from "./url-short";
import { UrlFactory } from "./url-short-factory";
import { UrlAddress } from "./url-address";

// -------------------------------------------------------------
// aggregate -> entity
export class Url {
  private id: string;
  private orgin: string;
  private short: UrlShort;
  private address: UrlAddress;
  private createdAt: Date;
  private updatedAt: Date;

  private constructor(
    id: string,
    orgin: string,
    short: UrlShort,
    address: UrlAddress,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.orgin = orgin;
    this.short = short;
    this.orgin = orgin;
    this.address = address;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static create(orgin: string, short: UrlShort, address: UrlAddress): Url {
    return new Url(uuidv4(), orgin, short, address, new Date(), new Date());
  }

  static with(
    id: string,
    orgin: string,
    short: string,
    type: string,
    city: string,
    state: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    const address = UrlAddress.with(city, state);
    const urlShort = UrlFactory.with(short, type);
    return new Url(id, orgin, urlShort, address, createdAt, updatedAt);
  }

  updateOrigin(orgin: string): Url {
    this.orgin = orgin;
    this.updatedAt = new Date();
    return this;
  }

  getId(): string {
    return this.id;
  }

  getShort(): UrlShort {
    return this.short;
  }

  getOrigin(): string {
    return this.orgin;
  }

  getAddress(): UrlAddress {
    return this.address;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }
}
