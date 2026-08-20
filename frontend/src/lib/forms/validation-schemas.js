import { z } from "zod";
import { isValidInternationalPhone } from "@/lib/phone-validation";

// Name: Required, trims spaces, min 2 chars, letters only.
export const sharedNameSchema = z
  .string()
  .trim()
  .min(2, "Please enter a valid name")
  .regex(/^[a-zA-Z\s]*$/, "Name must contain only letters");

// Phone: Uses existing country-aware validation
export const sharedPhoneSchema = z
  .string()
  .min(1, "Phone number is required")
  .refine((phone) => isValidInternationalPhone(phone), {
    message: "Please enter a valid phone number",
  });

// Email: Standard email validation
export const sharedEmailSchema = z.string().email("Please enter a valid email");

// Message (Required): Trims spaces, requires at least 5 actual characters
export const sharedMessageSchemaRequired = z
  .string()
  .trim()
  .min(5, "Message must be at least 5 characters");

// Message (Optional): Allows empty string, but rejects whitespace-only. 
// If they type something, it must trim to >= 5 chars (if you want to enforce length on optional) or just >= 1.
// We will enforce the same min 5 character rule IF they type something.
export const sharedMessageSchemaOptional = z
  .string()
  .refine((val) => val === "" || val.trim().length > 0, "Message cannot be only spaces")
  .refine((val) => val === "" || val.trim().length >= 5, "Message must be at least 5 characters")
  .optional();
