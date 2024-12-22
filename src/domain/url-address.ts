//value-object
export class UrlAddress {
  private city: string;
  private state: string;

  private constructor(city: string, state: string) {
    this.city = city;
    this.state = state;
  }

  static create(city: string, state: string): UrlAddress {
    return new UrlAddress(city, state);
  }

  static with(city: string, state: string): UrlAddress {
    return new UrlAddress(city, state);
  }

  getCity(): string {
    return this.city;
  }

  getState(): string {
    return this.state;
  }
}
