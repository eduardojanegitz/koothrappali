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

export const PostValidation = z.object({
  caption: z
    .string()
    .min(5, { message: "A legenda precisa ter no mínimo 5 caracteres" })
    .max(2200, {
      message: "A legenda não pode ter mais do que 2200 caracteres",
    }),
  file: z.custom<File[]>(),
  location: z
    .string()
    .min(2, { message: "A localização precisa ter no mínimo 2 caracteres" })
    .max(100, { message: "A localização não pode ter mais de 100 caracteres" }),
  tags: z.string(),
});
