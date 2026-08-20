import { isValidPhoneNumber } from "libphonenumber-js";

export function isValidInternationalPhone(phone) {
  if (!phone) return false;
  try {
    return isValidPhoneNumber(phone);
  } catch {
    return false;
  }
}
