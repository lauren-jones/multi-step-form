import { PlanOption } from "../shared/planOption";
import { Button } from "../shared/button";
import { Title } from "../shared/title";
import { PlanType } from "../../types/planType";

interface SelectPlanProps {
  nextStep: () => void;
  previousStep: () => void;
  isYearly: boolean;
  setIsYearly: (isYearly: boolean) => void;
  selectedPlan: PlanType;
  setSelectedPlan: (plan: PlanType) => void;
  plans: PlanType[];
}

export const SelectPlan: React.FC<SelectPlanProps> = ({
  nextStep,
  previousStep,
  isYearly,
  setIsYearly,
  selectedPlan,
  setSelectedPlan,
  plans,
}) => {
  return (
    <>
      <Title
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing."
      />
      <div className="flex flex-col gap-3 md:gap-0 md:flex-row w-full justify-between">
        {plans.map((plan, index) => {
          return (
            <PlanOption
              index={index}
              isYearly={isYearly}
              icon={plan.icon}
              name={plan.name}
              monthlyPrice={plan.monthlyPrice}
              yearlyPrice={plan.yearlyPrice}
              onClick={() => setSelectedPlan(plan)}
              isSelected={plan.name === selectedPlan.name}
            />
          );
        })}
      </div>
      <div className="bg-very-light-gray w-full h-[48px] rounded mt-6 flex justify-center items-center">
        <label className="relative flex justify-between items-center group p-2 text-sm font-bold">
          Monthly
          <input
            type="checkbox"
            checked={isYearly}
            onChange={() => {
              setIsYearly(!isYearly);
            }}
            className="absolute left-1/2 -translate-x-1/2 peer appearance-none rounded-md"
          />
          <span className="w-12 h-6 flex items-center flex-shrink-0 ml-3 p-1 rounded-full duration-300 ease-in-out bg-denim after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6"></span>
        </label>
        <label className="font-bold text-sm text-gray">Yearly</label>
      </div>
      <div className="flex justify-between">
        <Button
          onClick={previousStep}
          text="Go Back"
          isDisabled={false}
          color="bg-light-gray text-denim"
        />
        <Button onClick={nextStep} text="Next Step" isDisabled={false} />
      </div>
    </>
  );
};
