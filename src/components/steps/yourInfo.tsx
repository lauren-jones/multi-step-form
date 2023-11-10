import { useState } from "react";
import { yourInfo } from "../../types/yourInfo";
import { Button } from "../shared/button";
import { TextInput } from "../shared/textInput";
import { ValidationResult } from "../../types/validationResult";
import {
  validateEmail,
  validateName,
  validatePhoneNumber,
} from "../../validation/functions/yourInfo";
import { Title } from "../shared/title";

interface YourInfoProps {
  yourInfo: yourInfo;
  setYourInfo: (yourInfo: yourInfo) => void;
  nextStep: () => void;
}

export const YourInfo: React.FC<YourInfoProps> = ({
  yourInfo,
  setYourInfo,
  nextStep,
}) => {
  const { name, email, phoneNumber } = yourInfo;

  const [nameValidationResult, setNameValidationResult] =
    useState<ValidationResult>(validateName(name));

  const [emailValidationResult, setEmailValidationResult] =
    useState<ValidationResult>(validateEmail(email));

  const [phoneNumberValidationResult, setPhoneNumberValidationResult] =
    useState<ValidationResult>(validatePhoneNumber(phoneNumber));

  return (
    <>
      <Title
        title="Personal info"
        subtitle="Please provide your name, email address, and phone number."
      />
      <div className="flex flex-col gap-4">
        <TextInput
          id="name"
          label="Name"
          value={name}
          onChange={(name: string) => setYourInfo({ ...yourInfo, name: name })}
          placeholder="e.g. Stephen King"
          validationResult={nameValidationResult}
          setValidationResult={(name: string) =>
            setNameValidationResult(validateName(name))
          }
        />
        <TextInput
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          label="Email Address"
          value={email}
          onChange={(email: string) =>
            setYourInfo({ ...yourInfo, email: email })
          }
          validationResult={emailValidationResult}
          setValidationResult={(email: string) =>
            setEmailValidationResult(validateEmail(email))
          }
        />
        <TextInput
          id="phone"
          placeholder="e.g. +1 234 567 890"
          label="Phone Number"
          value={phoneNumber}
          onChange={(phoneNumber: string) =>
            setYourInfo({ ...yourInfo, phoneNumber: phoneNumber })
          }
          validationResult={phoneNumberValidationResult}
          setValidationResult={(phoneNumber: string) =>
            setPhoneNumberValidationResult(validatePhoneNumber(phoneNumber))
          }
        />
      </div>
      <div className="flex self-end">
        <Button
          onClick={nextStep}
          text="Next Step"
          isDisabled={
            !(
              nameValidationResult.isValid &&
              emailValidationResult.isValid &&
              phoneNumberValidationResult.isValid
            )
          }
        />
      </div>
    </>
  );
};
