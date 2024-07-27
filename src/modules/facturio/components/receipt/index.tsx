import "./index.css";
import { useTranslation } from "react-i18next";
import { IContributor, IReceipt } from "../../lib/types/api";
import { Button, List, NumberInput } from "../../../core/components";
import { Contributor } from "..";
import { useCallback, useEffect, useState } from "react";

interface IReceiptProps {
  receipt: IReceipt;
  index: number;
  fetchContributors(receiptId: string): IContributor[];
  onRemove(receipt: IReceipt): void;
  onRemoveContributor(contributor: IContributor): void;
}

export default function Receipt(props: IReceiptProps) {
  const { t } = useTranslation(["facturio/common"]);

  const [contributors, setContributors] = useState<IContributor[]>([]);

  function onRemoveClicked() {
    props.onRemove(props.receipt);
  }

  const fetchContributors = useCallback(() => {
    setContributors(props.fetchContributors(props.receipt.id));
  }, [props]);

  useEffect(() => {
    fetchContributors();
  }, [fetchContributors]);

  return (
    <div className="receipt-list-item">
      <h2 className="receipt-title">
        {t("facturio/common:receipt")} #{props.index + 1}
      </h2>
      <Button onClick={onRemoveClicked}>TODO Remove</Button>

      <p>
        {t("facturio/common:amount")}: {props.receipt.amount}$
      </p>

      <List
        items={contributors}
        style={{ display: "flex", flexDirection: "row" }}
      >
        {(contributor, index) => (
          <Contributor
            key={contributor.id}
            contributor={contributor}
            index={index}
          />
        )}
      </List>
    </div>
  );
}
