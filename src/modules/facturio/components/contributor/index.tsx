import { useState } from "react";
import { IContributor } from "../../lib/types/api";
import { Button, Input, NumberInput } from "../../../core/components";

interface IContributorProps {
  contributor: IContributor;
  index: number;
}

export default function Contributor(props: IContributorProps) {
  const DEFAULT_NAME =
    props.contributor.name || "Contributor " + (props.index + 1);

  const [contributor, setContributor] = useState<IContributor>({
    id: props.contributor.receiptId,
    name: props.contributor.name || DEFAULT_NAME,
    amountPaid: props.contributor.amountPaid || 0,
    splitPercentage: props.contributor.splitPercentage || 0,
    receiptId: props.contributor.receiptId,
  });

  return (
    <div>
      <h3>Contributor</h3>
      <Input placeholder="Name" label="Name" value={contributor.name} />

      <NumberInput
        placeholder="Enter a percentage"
        label="Split Percentage"
        suffix="%"
        value={contributor.splitPercentage}
        onChange={(val) =>
          setContributor((c) => {
            return { ...c, splitPercentage: val };
          })
        }
      />

      <NumberInput
        placeholder="Enter an amount"
        label="Amount Paid"
        suffix="$"
        value={contributor.amountPaid}
        onChange={(val) =>
          setContributor((c) => {
            return { ...c, amountPaid: val };
          })
        }
      />

      <NumberInput readOnly={true} label="amount owed" />
    </div>
  );
}
