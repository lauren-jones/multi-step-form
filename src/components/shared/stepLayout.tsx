import { PropsWithChildren } from "react";
import { Sidebar } from "../sidebar/sidebar";

interface StepLayoutProps extends PropsWithChildren {
  step: number;
}

export const StepLayout: React.FC<StepLayoutProps> = ({ children, step }) => {
  return (
    <>
      <div className="hidden md:block">
        <div className="w-screen h-screen bg-light-blue flex justify-center items-center">
          <div className="w-[940px] bg-white h-[600px] rounded-xl flex items-center p-4 m-3">
            <Sidebar currentStep={step} />
            <div className="h-full w-[450px] flex flex-col m-auto justify-center p-3">
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="w-screen h-screen bg-light-blue flex-col justify-center items-center">
          <Sidebar currentStep={step} />
          <div className="bg-white rounded-xl w-5/6 left-1/2 -translate-x-1/2 flex-col items-center p-5 absolute z-50">
            <div className="flex flex-col m-auto justify-center p-3">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
