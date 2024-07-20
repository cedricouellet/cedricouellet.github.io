import "./index.css";
import { useState } from "react";
import { Input, NumberInput } from "../../../core/components";

// interface Expense {
//   amount: number;
//   taxable: boolean;
// }

// interface ReceiptContributor {
//   name: string;
//   splitPercentage: number;
//   personalExpenses: Expense[];
//   amountPaid: number;
// }

// interface Receipt {
//   id: string;
//   amount: number;
// }

export default function Home() {
  // const [receips, setReceipts] = useState<Receipt[]>([]);

  const [taxRate, setTaxRate] = useState<number | undefined>(15);

  return (
    <div>
      <div style={{ paddingTop: "50px" }}>
        <NumberInput
          style={{ maxWidth: "300px" }}
          label="Tax Rate %"
          placeholder="Enter a tax rate in percentage"
          value={taxRate}
          onChange={(e) => setTaxRate(e)}
          onInput={(e) => setTaxRate(e)}
        />
      </div>
    </div>
  );
}
