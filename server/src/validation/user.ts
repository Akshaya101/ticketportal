import { z } from "zod";

export const userSignupInputSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(40, "Name can't exceed 40 characters"),
  email: z
    .string()
    .min(5, "Email must be at least 5 characters long")
    .max(50, "Email can't exceed 50 characters")
    .email("Invalid email format"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password can't exceed 100 characters"),
  location: z
    .string()
    .min(3, "Location must be at least 3 characters long")
    .max(40, "Location can't exceed 40 characters"),
  businessName: z
    .string(),
  sessionId: z
    .string()
    .min(0, "Session ID is required") 
    .max(500, "Session ID can't exceed 255 characters"), 
  // .min(5, "Business Name must be atleast 5 characters long"),
});

export const userLoginInputSchema = z.object({
  email: z
    .string()
    .min(5, "Email must be at least 5 characters long")
    .max(50, "Email can't exceed 50 characters")
    .email("Invalid email format"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password can't exceed 100 characters"),
  sessionId: z
    .string()
    .min(0, "Session ID is required") // Ensure session ID is provided
    .max(500, "Session ID can't exceed 255 characters"), // Adjust max length as necessary
});
