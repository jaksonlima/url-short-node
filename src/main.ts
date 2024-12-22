import { UseCaseCreate } from "./application/usecase-url-create";
import { UseCaseFindAll } from "./application/usecase-url-find-all";
import { UseCaseUpdate } from "./application/usecase-url-update";
import { InMemoryGatewayUrl } from "./infra/InMemoryGatewayUrl";

const inMemoryUrl = new InMemoryGatewayUrl();

const outputCreate = new UseCaseCreate(inMemoryUrl).execute({
  origin: "https://hugo.com.br",
  type: "hash",
  city: "cascavel",
  state: "PR",
});

const ouputFindAllone = new UseCaseFindAll(inMemoryUrl).execute();

console.log({ ouputFindAllone });

new UseCaseUpdate(inMemoryUrl).execute({
  id: outputCreate.id,
  origin: "https://petla.com.br",
});

const ouputFindAll = new UseCaseFindAll(inMemoryUrl).execute();

console.log({ ouputFindAll });
