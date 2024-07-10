"use client";

import React from "react";
import { AuthContextProvider } from "@/context/use-auth-context";
import { FormProvider } from "react-hook-form";
import Loader from "@/components/Loader";
import { useSignUpForm } from "@/hooks/use-sign-up";

type Props = {
  children: React.ReactNode;
};

const SignUpForm = ({ children }: Props) => {
  const { methods, onHandleSubmit, loading } = useSignUpForm();
  return (
    <AuthContextProvider>
      <FormProvider {...methods}>
        <form onSubmit={onHandleSubmit}>
          <div className="flex h-full flex-col justify-between gap-3">
            <Loader loading={loading}>{children}</Loader>
          </div>
        </form>
      </FormProvider>
    </AuthContextProvider>
  );
};

export default SignUpForm;
