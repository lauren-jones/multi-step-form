interface StepProps {
  step: number;
  title: string;
  isActive: boolean;
}

export const Step: React.FC<StepProps> = ({ step, title, isActive }) => {
  return (
    <div className="flex items-center md:mb-7">
      <p
        className={`${
          isActive
            ? "bg-sky-blue text-denim"
            : "bg-transparent border border-white text-white"
        } w-[33px] h-[33px] rounded-full flex justify-center items-center text-sm`}
      >
        {step}
      </p>
      <div className="flex flex-col ml-3">
        <p className="text-xs text-sky-blue hidden md:block">STEP {step}</p>
        <p className="text-white font-bold text-sm hidden md:block">{title}</p>
      </div>
    </div>
  );
};
