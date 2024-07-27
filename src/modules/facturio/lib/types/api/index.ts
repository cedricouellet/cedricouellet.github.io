import { IEntity } from "../../../../core/lib/types";

export interface IReceipt extends IEntity {
  amount: number | number | undefined;
}

export interface IExpense extends IEntity {
  contributorId: string;
  amount: number | undefined;
  taxable: boolean;
}

export interface IContributor extends IEntity {
  receiptId: string;
  name: string | undefined;
  splitPercentage: number | undefined;
  amountPaid: number | undefined;
}
