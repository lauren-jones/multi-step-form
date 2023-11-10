import checkMark from "../../svg/icon-checkmark.svg";
import { AddOnType } from "../../types/addOnType";

interface AddOnProps {
  addOn: AddOnType;
  isSelected: boolean;
  onClick: (name: string) => void;
  isYearly: boolean;
  index: number;
}

export const AddOn: React.FC<AddOnProps> = ({
  addOn,
  isSelected,
  onClick,
  isYearly,
  index,
}) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick(addOn.name);
      }}
      key={index}
      className={`flex items-center border rounded px-6 py-4 w-full ${
        isSelected
          ? "border-bright-purple bg-very-light-gray"
          : "border-light-gray"
      }`}
    >
      <div className="flex items-center w-full">
        <img
          src={checkMark}
          className={`${
            isSelected ? "block" : "hidden"
          } bg-bright-purple rounded p-1`}
        />
        <div className="flex flex-col text-left ml-6">
          <p className="font-bold text-denim text-sm mb-1">{addOn.name}</p>
          <p className="text-gray text-sm">{addOn.tagline}</p>
        </div>
      </div>
      <p className="text-bright-purple text-sm">
        {isYearly ? `${addOn.yearlyPrice}/yr` : `${addOn.monthlyPrice}/mo`}
      </p>
    </button>
  );
};
