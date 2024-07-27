import LocalStorageRepository from "../../../core/lib/local-storage-repository";
import { IReceipt } from "../../lib/types/api";

const repository = new LocalStorageRepository<IReceipt>("facturio_db_receipts");

export function add(entity: IReceipt): void {
  repository.add(entity);
}

export function update(entity: IReceipt): void {
  repository.update(entity);
}

export function remove(entity: IReceipt): void {
  repository.remove(entity.id);
}

export function getById(id: string): IReceipt | undefined {
  return repository.getById(id);
}

export function getAll(): IReceipt[] {
  return repository.getAll();
}

const ReceiptService = {
  add,
  update,
  remove,
  getById,
  getAll,
};

export default ReceiptService;
