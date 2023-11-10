import { useState } from "react";
import { ValidationResult } from "../../types/validationResult";

interface TextInputProps {
  id: string;
  placeholder: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  validationResult: ValidationResult;
  setValidationResult: (value: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  id,
  placeholder,
  label,
  value,
  onChange,
  validationResult,
  setValidationResult,
}) => {
  const [isDirty, setIsDirty] = useState(false);

  return (
    <div>
      <label className="text-denim text-sm">{label}</label>
      <input
        type="text"
        id={id}
        className={`appearance-none mt-1 border ${
          isDirty && !validationResult.isValid
            ? "border-error"
            : "border-light-gray"
        } rounded w-full p-3 text-gray leading-tight focus:outline-bright-purple`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValidationResult(e.target.value);
          onChange(e.target.value);
        }}
        onBlur={(e) => {
          setIsDirty(true);
          setValidationResult(e.target.value);
        }}
      />
      {isDirty && !validationResult.isValid && (
        <p className="text-error">{validationResult.validationMessages[0]}</p>
      )}
    </div>
  );
};
