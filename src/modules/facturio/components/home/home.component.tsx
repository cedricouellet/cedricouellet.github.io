import "./home.component.css";
import { useCallback, useEffect, useState } from "react";
import { NumberInput } from "../../../core/components";
import { ReceiptForm } from "..";
import { IReceipt } from "../../lib/types";

interface IErrors {
  taxRate: string;
}

export default function Home() {
  const [errors, setErrors] = useState<IErrors>({
    taxRate: "",
  });
  const [taxRate, setTaxRate] = useState<number | undefined>(14.975);
  const [receipts, setReceipts] = useState<IReceipt[]>([]);

  const validateTaxRate = useCallback(() => {
    let error = "";

    if (taxRate === undefined || taxRate < 1) {
      error = "The tax rate must be at least one (1)";
    }

    setErrors((e) => {
      return {
        ...e,
        taxRate: error,
      };
    });

    return error === "";
  }, [taxRate]);

  useEffect(() => {
    validateTaxRate();
  }, [taxRate, validateTaxRate]);

  function onAddReceipt(receipt: IReceipt) {
    setReceipts((r) => [...r, receipt]);
  }

  return (
    <div>
      <div style={{ margin: "15px" }}>
        <h1>~ facturio ~</h1>
        <h2>configuration</h2>
        <NumberInput
          label="Tax Rate %"
          placeholder="Enter a tax rate in %"
          value={taxRate}
          onChange={setTaxRate}
        />
        <div style={{ color: "red" }}>{errors.taxRate}</div>

        <ReceiptForm onAdd={onAddReceipt} />

        {receipts.map((r) => {
          return (
            <div>
              {r.id} : {r.amount}$
            </div>
          );
        })}
      </div>
    </div>
  );
}
