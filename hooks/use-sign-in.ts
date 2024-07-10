"use client";

import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { UserLoginProps, UserLoginSchema } from "@/schemas/auth.schema";
import toast from "react-hot-toast";

export const useSignInForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { signIn, isLoaded, setActive } = useSignIn();
  const router = useRouter();
  const methods = useForm<UserLoginProps>({
    resolver: zodResolver(UserLoginSchema),

    mode: "onChange",
  });

  const onHandleSubmit = methods.handleSubmit(
    async (values: UserLoginProps) => {
      if (!isLoaded) return;

      try {
        setLoading(true);
        const authenticated = await signIn.create({
          identifier: values.email,
          password: values.password,
        });

        if (authenticated.status === "complete") {
          await setActive({ session: authenticated.createdSessionId });
          toast.success("👋 Welcome back!");

          setLoading(false);
          router.push("/dashboard");
        }
      } catch (error: any) {
        setLoading(false);
        if (error.errors[0].code === "form_password_incorrect") {
          toast.error("Invalid credentials");
        }
      }
    }
  );
  return {
    methods,
    onHandleSubmit,
    loading,
  };
};
