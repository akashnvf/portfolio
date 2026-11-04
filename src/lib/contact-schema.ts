import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(100, { message: "Name cannot exceed 100 characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please provide a valid email address." }),
  subject: z
    .string()
    .trim()
    .max(150, { message: "Subject cannot exceed 150 characters." })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(2500, { message: "Message cannot exceed 2500 characters." }),
  // Honeypot field for bot detection: should always be empty
  website_company: z.string().max(0, { message: "Bot detected" }).optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

