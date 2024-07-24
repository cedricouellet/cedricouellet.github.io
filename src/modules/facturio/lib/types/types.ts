export interface IReceipt {
  id: string;
  contributors: IContributor[];
  amount: number | number | undefined;
}

export interface IExpense {
  id: string;
  amount: number;
  taxable: boolean;
}

export interface IContributor {
  id: string;
  name: string;
  splitPercentage: number;
  personalExpenses: IExpense[];
  amountPaid: number;
}
