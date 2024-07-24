import { useCallback, useEffect, useState } from "react";
import { Button, NumberInput } from "../../../core/components";
import { IReceipt } from "../../lib/types";
import { repeat, uniqueId } from "../../../core/utils";
import { useTranslation } from "react-i18next";

interface IErrors {
  contributorCount: string;
  amount: string;
}

interface IProps {
  className?: string;
  style?: React.CSSProperties;
  onAdd?(receipt: IReceipt): void;
}

const DEFAULT_CONTRIBUTOR_COUNT = 2;
const DEFAULT_AMOUNT = 1.0;

export default function ReceiptForm(props: IProps) {
  const { t } = useTranslation("facturio/receipt-form");

  const [errors, setErrors] = useState<IErrors>({
    contributorCount: "",
    amount: "",
  });

  const [contributorCount, setContributorCount] = useState<number | undefined>(
    DEFAULT_CONTRIBUTOR_COUNT
  );

  const [amount, setAmount] = useState<number | undefined>(DEFAULT_AMOUNT);

  const validateContributorCount = useCallback(() => {
    let error = "";

    if (contributorCount === undefined) {
      error = t("errors.contributorCount.required");
    } else if (contributorCount < 2) {
      error = t("errors.contributorCount.min", { value: 2 });
    } else if (!Number.isInteger(contributorCount)) {
      error = t("errors.contributorCount.type");
    } else if (!Number.isSafeInteger(contributorCount)) {
      error = t("errors.contributorCount.max", {
        value: Number.MAX_SAFE_INTEGER,
      });
    }

    setErrors((e) => {
      return { ...e, contributorCount: error };
    });

    return error === "";
  }, [contributorCount, t]);

  const validateAmount = useCallback(() => {
    let error = "";

    if (amount === undefined) {
      error = t("errors.amount.required");
    } else if (amount <= 0) {
      error = t("errors.amount.min", { value: 0 });
    } else if (amount > Number.MAX_VALUE) {
      error = t("errors.amount.max", { value: Number.MAX_VALUE });
    }

    setErrors((e) => {
      return { ...e, amount: error };
    });

    return error === "";
  }, [amount, t]);

  useEffect(() => {
    validateAmount();
  }, [amount, validateAmount]);

  useEffect(() => {
    validateContributorCount();
  }, [contributorCount, validateContributorCount]);

  function onAdd() {
    if (!props.onAdd) {
      return;
    }

    if (!validateAmount() || !validateContributorCount()) {
      return;
    }

    const receipt: IReceipt = {
      id: uniqueId(),
      amount: amount,
      contributors: [],
    };

    repeat(contributorCount!, () => {
      receipt.contributors.push({
        id: uniqueId(),
        amountPaid: 0,
        personalExpenses: [],
        name: "",
        splitPercentage: 100.0 / contributorCount!,
      });
    });

    props.onAdd(receipt);

    setAmount(DEFAULT_AMOUNT);
    setContributorCount(DEFAULT_CONTRIBUTOR_COUNT);
  }

  return (
    <div className={props.className} style={props.style}>
      <NumberInput label={t("amount")} value={amount} onChange={setAmount} />
      <div style={{ color: "red" }}>{errors.amount}</div>

      <NumberInput
        label={t("contributorCount")}
        value={contributorCount}
        onChange={setContributorCount}
      />
      <div style={{ color: "red" }}>{errors.contributorCount}</div>

      <Button onClick={onAdd}>{t("add", { ns: "common" })}</Button>
    </div>
  );
}
