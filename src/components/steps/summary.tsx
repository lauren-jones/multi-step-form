import { useState } from "react";
import { AddOnType } from "../../types/addOnType";
import { PlanType } from "../../types/planType";
import { Button } from "../shared/button";
import { SummaryAddOn } from "../shared/summaryAddOn";
import { Title } from "../shared/title";
import { ThankYou } from "./thankYou";

interface SummaryProps {
  previousStep: () => void;
  isYearly: boolean;
  plan: PlanType;
  addOns: AddOnType[];
}

export const Summary: React.FC<SummaryProps> = ({
  previousStep,
  isYearly,
  plan,
  addOns,
}) => {
  const [end, setEnd] = useState(false);

  let total = 0;

  isYearly ? (total += plan.yearlyPrice) : (total += plan.monthlyPrice);

  addOns.map((addOn) => {
    if (addOn.isIncluded) {
      return isYearly
        ? (total += addOn.yearlyPrice)
        : (total += addOn.monthlyPrice);
    }
  });

  return (
    <>
      {!end && (
        <>
          <Title
            title="Finishing up"
            subtitle="Double-check everything looks OK before confirming."
          />
          <div className="flex flex-col">
            <div className="flex flex-col bg-very-light-gray p-4 rounded">
              <div className="flex items-center justify-between">
                <div className="">
                  <p className="font-bold text-denim mb-1">
                    {plan.name} ({isYearly ? "Yearly" : "Monthly"})
                  </p>
                  <button className="text-sm text-gray underline">
                    Change
                  </button>
                </div>
                <p className="font-bold text-denim">
                  {isYearly
                    ? `$${plan.yearlyPrice}/yr`
                    : `$${plan.monthlyPrice}/mo`}
                </p>
              </div>
              <div className="border border-light-gray my-4"></div>
              {addOns.map((addOn, index) => {
                if (addOn.isIncluded) {
                  return (
                    <SummaryAddOn
                      addOn={addOn}
                      isYearly={isYearly}
                      index={index}
                    />
                  );
                }
              })}
            </div>
            <div className="flex justify-between items-center p-4">
              <p className="text-gray font-bold text-sm">Total (per month)</p>
              <p className="text-bright-purple font-bold">
                {isYearly ? `$${total}/yr` : `$${total}/mo`}
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <Button
              onClick={previousStep}
              text="Go Back"
              isDisabled={false}
              color="bg-light-gray text-denim"
            />
            <Button
              onClick={() => setEnd(true)}
              text="Confirm"
              isDisabled={false}
              color="bg-bright-purple text-white"
            />
          </div>
        </>
      )}
      {end && <ThankYou />}
    </>
  );
};
