import { AddOnType } from "../../types/addOnType";

interface SummaryAddOnProps {
  addOn: AddOnType;
  isYearly: boolean;
  index: number;
}

export const SummaryAddOn: React.FC<SummaryAddOnProps> = ({
  addOn,
  isYearly,
  index,
}) => {
  return (
    <div className="flex items-center justify-between mb-1" key={index}>
      <p className="text-gray text-sm">{addOn.name}</p>
      <p className="text-denim">
        {isYearly ? `+$${addOn.yearlyPrice}/yr` : `+$${addOn.monthlyPrice}/mo`}
      </p>
    </div>
  );
};
