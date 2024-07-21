import "./index.css";
import { useState } from "react";
import { NumberInput, Input, Button } from "../../../core/components";

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
      <div style={{ margin: "15px" }}>
        <h1>/facturio</h1>
        <br />

        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ marginBottom: "5px" }}>//Configuration</h2>
          <br />
          <div>
            <NumberInput
              label="Tax Rate %"
              placeholder="Enter a tax rate in %"
              value={taxRate}
              onChange={(e) => setTaxRate(e)}
              onInput={(e) => setTaxRate(e)}
            />
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ marginBottom: "5px" }}>//receipts</h2>
          <br />
          <div>
            <NumberInput
              label="Total Amount $"
              placeholder="Enter an amount in $"
              onChange={(e) => setTaxRate(e)}
              onInput={(e) => setTaxRate(e)}
            />

            <Input label="add person" placeholder="enter a name" />

            <Button text="add" />
          </div>
        </div>
      </div>
    </div>
  );
}
