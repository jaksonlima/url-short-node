import { Url } from "../domain/url";
import { GatewayUrl } from "../domain/url-gateway";

class InMemoryUrl {
  id!: string;
  orgin!: string;
  short!: string;
  type!: string;
  city!: string;
  state!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

function urlToInMemory(url: Url): InMemoryUrl {
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
}

function inMemoryToUrl(inMemoryUrl: InMemoryUrl): Url {
  return Url.with(
    inMemoryUrl.id,
    inMemoryUrl.orgin,
    inMemoryUrl.short,
    inMemoryUrl.type,
    inMemoryUrl.city,
    inMemoryUrl.state,
    inMemoryUrl.createdAt,
    inMemoryUrl.updatedAt
  );
}

export class InMemoryGatewayUrl implements GatewayUrl {
  private memoryUrl = new Map<string, InMemoryUrl>();

  create(url: Url): Url {
    this.memoryUrl.set(url.getId(), urlToInMemory(url));
    return url;
  }

  update(url: Url): Url {
    return this.create(url);
  }

  findById(id: string): Url | undefined {
    const result = this.memoryUrl.get(id);
    if (!result) return;

    return inMemoryToUrl(result);
  }

  findByAll(): Url[] {
    const urlMap: Url[] = [];

    for (const [_, url] of this.memoryUrl) {
      urlMap.push(inMemoryToUrl(url));
    }

    return urlMap;
  }
}
