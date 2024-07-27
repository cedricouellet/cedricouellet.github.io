import { useCallback, useEffect, useState } from "react";
import { Button, NumberInput } from "../../../core/components";
import { useTranslation } from "react-i18next";
import { IReceiptFormViewModel } from "../../lib/types/view-models";
import {
  MIN_RECEIPT_AMOUNT,
  MIN_RECEIPT_CONTRIBUTOR_COUNT,
} from "../../lib/constants";

interface IReceiptFormErrors {
  contributorCount: string;
  amount: string;
}

interface IReceiptFormProps {
  className?: string;
  style?: React.CSSProperties;
  onAdd(receipt: IReceiptFormViewModel): void;
}

const DEFAULT_CONTRIBUTOR_COUNT = 2;
const DEFAULT_AMOUNT = 1.0;

export default function ReceiptForm(props: IReceiptFormProps) {
  const { t } = useTranslation([
    "facturio/receipt-form",
    "facturio/common",
    "common",
  ]);

  const [errors, setErrors] = useState<IReceiptFormErrors>({
    contributorCount: "",
    amount: "",
  });

  const [viewModel, setViewModel] = useState<IReceiptFormViewModel>({
    contributorCount: DEFAULT_CONTRIBUTOR_COUNT,
    amount: DEFAULT_AMOUNT,
  });

  const validate = useCallback(() => {
    let errorContributorCount = "";

    if (viewModel.contributorCount === undefined) {
      errorContributorCount = t("errors.contributorCount.required");
    } else if (viewModel.contributorCount < MIN_RECEIPT_CONTRIBUTOR_COUNT) {
      errorContributorCount = t("errors.contributorCount.min", {
        value: MIN_RECEIPT_CONTRIBUTOR_COUNT,
      });
    } else if (!Number.isInteger(viewModel.contributorCount)) {
      errorContributorCount = t("errors.contributorCount.type");
    } else if (!Number.isSafeInteger(viewModel.contributorCount)) {
      errorContributorCount = t("errors.contributorCount.max", {
        value: Number.MAX_SAFE_INTEGER,
      });
    }

    let errorAmount = "";

    if (viewModel.amount === undefined) {
      errorAmount = t("errors.amount.required");
    } else if (viewModel.amount < MIN_RECEIPT_AMOUNT) {
      errorAmount = t("errors.amount.min", { value: MIN_RECEIPT_AMOUNT });
    } else if (viewModel.amount > Number.MAX_VALUE) {
      errorAmount = t("errors.amount.max", { value: Number.MAX_VALUE });
    }

    setErrors({ amount: errorAmount, contributorCount: errorContributorCount });

    return errorAmount === "" && errorContributorCount === "";
  }, [viewModel, t]);

  useEffect(() => {
    validate();
  }, [viewModel, validate]);

  function onAdd() {
    if (!props.onAdd) {
      return;
    }

    if (!validate()) {
      return;
    }

    props.onAdd({
      amount: viewModel.amount!,
      contributorCount: viewModel.contributorCount!,
    });

    setViewModel({
      amount: DEFAULT_AMOUNT,
      contributorCount: DEFAULT_CONTRIBUTOR_COUNT,
    });
  }

  return (
    <div className={props.className} style={props.style}>
      {t("facturio/common:receipt")}
      <NumberInput
        label={t("facturio/common:amount")}
        placeholder={t("amountPlaceholder")}
        value={viewModel.amount}
        onChange={(value) =>
          setViewModel((vm) => {
            return { ...vm, amount: value };
          })
        }
        suffix="$"
        error={errors.amount}
      />

      <NumberInput
        label={t("contributorCount")}
        value={viewModel.contributorCount}
        onChange={(value) =>
          setViewModel((vm) => {
            return { ...vm, contributorCount: value };
          })
        }
        placeholder={t("contributorCountPlaceholder")}
        error={errors.contributorCount}
      />

      <Button onClick={onAdd}>{t("common:add")}</Button>
    </div>
  );
}
