import { AddOnType } from "../../types/addOnType";
import { AddOn } from "../shared/addOn";
import { Button } from "../shared/button";
import { Title } from "../shared/title";

interface AddOnsProps {
  nextStep: () => void;
  previousStep: () => void;
  addOns: AddOnType[];
  setAddOns: (addOns: AddOnType[]) => void;
  isYearly: boolean;
}

export const AddOns: React.FC<AddOnsProps> = ({
  nextStep,
  previousStep,
  addOns,
  setAddOns,
  isYearly,
}) => {
  return (
    <>
      <Title
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience."
      />
      <div className="flex flex-col gap-3">
        {addOns.map((addOn, index) => {
          return (
            <AddOn
              index={index}
              addOn={addOn}
              isSelected={addOn.isIncluded}
              isYearly={isYearly}
              onClick={(name: string) =>
                setAddOns(
                  addOns.map((addOn) => {
                    if (addOn.name === name) {
                      addOn.isIncluded = !addOn.isIncluded;
                      return addOn;
                    }
                    return addOn;
                  })
                )
              }
            />
          );
        })}
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
