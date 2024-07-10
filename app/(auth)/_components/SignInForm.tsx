"use client";

import Loader from "@/components/Loader";
import { AuthContextProvider } from "@/context/use-auth-context";
import { useSignInForm } from "@/hooks/use-sign-in";
import React from "react";
import { FormProvider } from "react-hook-form";

const SignInForm = ({ children }: { children: React.ReactNode }) => {
  const { loading, methods, onHandleSubmit } = useSignInForm();
  return (
    <AuthContextProvider>
      <FormProvider {...methods}>
        <form onSubmit={onHandleSubmit}>
          <Loader loading={loading}>{children}</Loader>
        </form>
      </FormProvider>
    </AuthContextProvider>
  );
};

export default SignInForm;
