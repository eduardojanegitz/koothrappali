import * as z from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Informe ao menos dois caracteres" }),
  username: z.string().min(2, { message: "Informe ao menos dois caracteres" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "A senha precisa ter no mínimo oito caracteres" }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "A senha precisa ter no mínimo oito caracteres" }),
});
