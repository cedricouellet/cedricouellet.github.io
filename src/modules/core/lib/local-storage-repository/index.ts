import { IEntity, IRepository } from "../types";
import { LocalStorageJsonService } from "../../services";

export default class LocalStorageRepository<TEntity extends IEntity>
  implements IRepository<TEntity>
{
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  getById(id: string): TEntity | undefined {
    return LocalStorageJsonService.getMany<TEntity>(this.key).find(
      (e) => e.id === id
    );
  }

  getAll(): TEntity[] {
    return LocalStorageJsonService.getMany<TEntity>(this.key).sort();
  }

  add(entity: TEntity): void {
    const entities = LocalStorageJsonService.getMany<TEntity>(this.key);

    if (entities.find((e) => e.id === entity.id) !== undefined) {
      return;
    }

    LocalStorageJsonService.set(this.key, [...entities, entity]);
  }

  update(entity: TEntity): void {
    const entities = LocalStorageJsonService.getMany<TEntity>(this.key);

    const found = entities.find((e) => e.id === entity.id);

    if (found === undefined) {
      return;
    }

    const index = entities.indexOf(found);

    entities[index] = entity;

    LocalStorageJsonService.set(this.key, [entities]);
  }

  remove(id: string): void {
    const entities = LocalStorageJsonService.getMany<TEntity>(this.key);

    LocalStorageJsonService.set(
      this.key,
      entities.filter((e) => e.id !== id)
    );
  }
}
