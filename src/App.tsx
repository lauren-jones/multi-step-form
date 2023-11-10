import { useState } from "react";
import { YourInfo } from "./components/steps/yourInfo";
import { SelectPlan } from "./components/steps/selectPlan";
import { StepLayout } from "./components/shared/stepLayout";
import { yourInfo } from "./types/yourInfo";
import { AddOns } from "./components/steps/addOns";
import { Summary } from "./components/steps/summary";
import { AddOnType } from "./types/addOnType";
import { PlanType } from "./types/planType";
import arcadeIcon from "../src/svg/icon-arcade.svg";
import advancedIcon from "../src/svg/icon-advanced.svg";
import proIcon from "../src/svg/icon-pro.svg";

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const [yourInfo, setYourInfo] = useState<yourInfo>({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [isYearly, setIsYearly] = useState(false);

  const plans: PlanType[] = [
    { name: "Arcade", monthlyPrice: 9, yearlyPrice: 90, icon: arcadeIcon },
    {
      name: "Advanced",
      monthlyPrice: 12,
      yearlyPrice: 120,
      icon: advancedIcon,
    },
    { name: "Pro", monthlyPrice: 15, yearlyPrice: 150, icon: proIcon },
  ];

  const [selectedPlan, setSelectedPlan] = useState<PlanType>({
    name: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
    icon: arcadeIcon,
  });

  const [addOns, setAddOns] = useState<AddOnType[]>([
    {
      name: "Online service",
      isIncluded: false,
      monthlyPrice: 1,
      yearlyPrice: 10,
      tagline: "Access to multiplayer games",
    },
    {
      name: "Larger storage",
      isIncluded: false,
      monthlyPrice: 2,
      yearlyPrice: 20,
      tagline: "Extra 1TB of cloud save",
    },
    {
      name: "Customizable profile",
      isIncluded: false,
      monthlyPrice: 2,
      yearlyPrice: 20,
      tagline: "Custom theme on your profile",
    },
  ]);

  return (
    <StepLayout step={step}>
      {step === 1 && (
        <YourInfo
          yourInfo={yourInfo}
          setYourInfo={setYourInfo}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <SelectPlan
          nextStep={nextStep}
          previousStep={previousStep}
          isYearly={isYearly}
          setIsYearly={setIsYearly}
          selectedPlan={selectedPlan}
          setSelectedPlan={(plan: PlanType) => setSelectedPlan(plan)}
          plans={plans}
        />
      )}
      {step === 3 && (
        <AddOns
          addOns={addOns}
          setAddOns={setAddOns}
          nextStep={nextStep}
          previousStep={previousStep}
          isYearly={isYearly}
        />
      )}
      {step === 4 && (
        <Summary
          previousStep={previousStep}
          isYearly={isYearly}
          plan={selectedPlan}
          addOns={addOns}
        />
      )}
    </StepLayout>
  );
}

export default App;
