import LocalStorageRepository from "../../../core/lib/local-storage-repository";
import { IContributor } from "../../lib/types/api";

const repository = new LocalStorageRepository<IContributor>(
  "facturio_db_contributors"
);

export function add(entity: IContributor): void {
  repository.add(entity);
}

export function update(entity: IContributor): void {
  repository.update(entity);
}

export function remove(entity: IContributor): void {
  repository.remove(entity.id);
}

export function getById(id: string): IContributor | undefined {
  return repository.getById(id);
}

export function getAll(): IContributor[] {
  return repository.getAll();
}

const ContributorService = {
  add,
  update,
  remove,
  getById,
  getAll,
};

export default ContributorService;
