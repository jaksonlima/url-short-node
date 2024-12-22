import { UrlShort } from "./url-short";

//entity
export class UrlHash implements UrlShort {
  private hash: string;

  value(): string {
    return this.hash;
  }

  type(): string {
    return "hash";
  }

  private constructor(hash: string) {
    this.hash = hash;
  }

  static create(): UrlHash {
    return new UrlHash(this.generateRandomHash(10));
  }

  static with(value: string): UrlHash {
    return new UrlHash(value);
  }

  private static generateRandomHash(length: number): string {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }
}
