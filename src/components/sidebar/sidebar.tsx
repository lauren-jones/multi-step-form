import bgSidebarDesktop from "../../svg/bg-sidebar-desktop.svg";
import bgSidebarMobile from "../../svg/bg-sidebar-mobile.svg";
import { Step } from "./step";

interface SidebarProps {
  currentStep: number;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentStep }) => {
  return (
    <div className="md:h-full md:w-[274px] relative">
      <div className="z-50 absolute top-[30px] left-[30px] flex flex-col gap-6 hidden md:block">
        <Step step={1} title="YOUR INFO" isActive={currentStep === 1} />
        <Step step={2} title="SELECT PLAN" isActive={currentStep === 2} />
        <Step step={3} title="ADD-ONS" isActive={currentStep === 3} />
        <Step step={4} title="SUMMARY" isActive={currentStep === 4} />
      </div>
      <img
        src={bgSidebarDesktop}
        className="z-0 absolute top-0 hidden md:block"
      />
      <div className="block md:hidden flex justify-center p-10">
        <img
          src={bgSidebarMobile}
          className="absolute top-0 md:hidden w-screen"
        />
        <div className="z-50 flex gap-3 justify-center mb-4">
          <Step step={1} title="YOUR INFO" isActive={currentStep === 1} />
          <Step step={2} title="SELECT PLAN" isActive={currentStep === 2} />
          <Step step={3} title="ADD-ONS" isActive={currentStep === 3} />
          <Step step={4} title="SUMMARY" isActive={currentStep === 4} />
        </div>
      </div>
    </div>
  );
};
