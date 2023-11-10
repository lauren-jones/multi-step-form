import { EmailRegex, PhoneNumberRegex } from "../../constants/validation"
import { ValidationResult } from "../../types/validationResult"
import { isMaxLengthValid, isMinLengthValid, isRequiredValid } from "../rules/lengthValidation"
import { isRegexValid } from "../rules/regexValidation"
import { validate } from "./validate"

export const validateName = (name: string): ValidationResult => {
    return validate([
                {
                  rule: isRequiredValid(name),
                  message: "Enter your name",
                },
                {
                  rule: isMaxLengthValid(name, 30),
                  message: "Name must be 30 characters or less",
                },
                {
                  rule: isMinLengthValid(name, 2),
                  message: "Name must be at least 2 characters",
                },
              ])
}

export const validateEmail = (email: string): ValidationResult => {
    return validate([
                {
                  rule: isRequiredValid(email),
                  message: "Enter your email",
                },
                {
                  rule: isRegexValid(email, EmailRegex, false),
                  message: "Not a valid email!",
                },
              ])
}

export const validatePhoneNumber = (phoneNumber: string): ValidationResult => {
    return validate([
                {
                  rule: isRequiredValid(phoneNumber),
                  message: "Enter your phone number",
                },
                {
                  rule: isRegexValid(phoneNumber, PhoneNumberRegex, false),
                  message: "Not a valid phone number!",
                },
              ])
}




