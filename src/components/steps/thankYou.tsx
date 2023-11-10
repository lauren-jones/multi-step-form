import thankYouIcon from "../../svg/icon-thank-you.svg";

interface ThankYouProps {}

export const ThankYou: React.FC<ThankYouProps> = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10 md:my-0">
      <img src={thankYouIcon} />
      <h1 className="font-bold text-3xl my-4 text-center">Thank you!</h1>
      <p className="text-gray text-sm text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};
