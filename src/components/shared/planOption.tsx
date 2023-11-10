interface PlanOptionProps {
  isYearly: boolean;
  name: string;
  icon: string;
  monthlyPrice: number;
  yearlyPrice: number;
  onClick: (name: string) => void;
  isSelected: boolean;
  index: number;
}

export const PlanOption: React.FC<PlanOptionProps> = ({
  icon,
  name,
  isYearly,
  onClick,
  isSelected,
  monthlyPrice,
  yearlyPrice,
  index,
}) => {
  return (
    <button
      key={index}
      className={`flex md:flex-col text-left md:justify-between p-5 h-[99px] md:h-[183px] w-full md:w-[138px] border rounded ${
        isSelected
          ? "bg-very-light-gray border-bright-purple"
          : "border-light-gray"
      }`}
      onClick={(e) => {
        e.preventDefault();
        onClick(name);
      }}
    >
      <img src={icon} className="h-[40px] w-[40px] mr-4 md:mr-0" />
      <div className="flex flex-col gap-1">
        <p className="font-bold">{name}</p>
        <p className="text-sm text-gray">
          {!isYearly ? `$${monthlyPrice}/mo` : `$${yearlyPrice}/yr`}
        </p>
        <p className="text-sm">{isYearly ? "2 months free" : ""}</p>
      </div>
    </button>
  );
};
