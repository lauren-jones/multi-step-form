import { ValidationResult } from "../../types/validationResult";

  export const validate = (rulesAndMessages: {rule: boolean, message: string}[]): ValidationResult => {
    const validationMessages: string[] = [];

    rulesAndMessages.forEach(ruleAndMessage => {
        if(!ruleAndMessage.rule) {
            validationMessages.push(ruleAndMessage.message)
        }
    });

    return validationMessages.length > 0 ? {isValid: false, validationMessages: validationMessages} : {isValid: true};
  }