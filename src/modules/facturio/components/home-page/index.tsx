import "./index.css";
import { useCallback, useEffect, useState } from "react";
import { NumberInput, List } from "../../../core/components";
import { ReceiptForm, Receipt, Contributor } from "..";
import { IContributor, IReceipt } from "../../lib/types/api";
import { IReceiptFormViewModel } from "../../lib/types/view-models";
import { useTranslation } from "react-i18next";
import { ContributorService, ReceiptService } from "../../services";
import { repeat, uniqueId } from "../../../core/utils";
import { MIN_TAX_RATE } from "../../lib/constants";

interface IHomePageErrors {
  taxRate: string;
}

export default function Home() {
  const { t } = useTranslation(["facturio/home", "facturio/common"]);

  const [errors, setErrors] = useState<IHomePageErrors>({
    taxRate: "",
  });
  const [taxRate, setTaxRate] = useState<number | undefined>(14.975);
  const [receipts, setReceipts] = useState<IReceipt[]>([]);

  useEffect(() => {
    fetchReceipts();
  }, []);

  function fetchReceipts() {
    setReceipts(ReceiptService.getAll());
  }

  const validateTaxRate = useCallback(() => {
    let error = "";

    if (taxRate === undefined) {
      error = t("errors.taxRate.required");
    } else if (taxRate < MIN_TAX_RATE) {
      error = t("errors.taxRate.min", { value: MIN_TAX_RATE });
    } else {
      error = "";
    }

    setErrors((e) => {
      return {
        ...e,
        taxRate: error,
      };
    });

    return error === "";
  }, [taxRate, t]);

  useEffect(() => {
    validateTaxRate();
  }, [taxRate, validateTaxRate]);

  function onAddReceipt(viewModel: IReceiptFormViewModel) {
    const receipt: IReceipt = {
      id: uniqueId(),
      amount: viewModel.amount,
    };

    ReceiptService.add(receipt);

    repeat(viewModel.contributorCount!, () => {
      ContributorService.add({
        id: uniqueId(),
        receiptId: receipt.id,
        amountPaid: 0,
        name: "",
        splitPercentage: 100.0 / viewModel.contributorCount!,
      });
    });

    fetchReceipts();
  }

  function onRemoveReceipt(receipt: IReceipt) {
    ContributorService.getAll()
      .filter((c) => c.receiptId === receipt.id)
      .forEach((c) => ContributorService.remove(c));

    ReceiptService.remove(receipt);

    fetchReceipts();
  }

  function onRemoveContributor(contributor: IContributor) {
    ContributorService.remove(contributor);
  }

  function fetchReceiptContributors(receiptId: string): IContributor[] {
    return ContributorService.getAll().filter((c) => c.receiptId === receiptId);
  }

  return (
    <div className="facturio-home page">
      <div className="facturio-home-content page-content">
        <h1>{t("title")}</h1>

        <NumberInput
          label={t("taxRate")}
          placeholder={t("taxRatePlaceholder")}
          value={taxRate}
          onChange={setTaxRate}
          suffix="%"
          error={errors.taxRate}
        />

        <ReceiptForm onAdd={onAddReceipt} />
        <List items={receipts} className="receipt-list">
          {(receipt, index) => (
            <Receipt
              key={receipt.id}
              receipt={receipt}
              index={index}
              fetchContributors={fetchReceiptContributors}
              onRemove={onRemoveReceipt}
              onRemoveContributor={onRemoveContributor}
            />
          )}
        </List>
      </div>
    </div>
  );
}
