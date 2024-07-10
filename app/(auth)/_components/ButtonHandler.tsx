"use client";

import React from "react";
import { useAuthContextHook } from "@/context/use-auth-context";
import { useFormContext } from "react-hook-form";
import { useSignUpForm } from "@/hooks/use-sign-up";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ButtonHandler = () => {
  const { currentStep, setCurrentStep } = useAuthContextHook();
  const { formState, getFieldState, getValues } = useFormContext();
  const { onGenerateOTP } = useSignUpForm();
  const { isDirty: isName } = getFieldState("fullname", formState);
  const { isDirty: isEmail } = getFieldState("email", formState);
  const { isDirty: isPassword } = getFieldState("password", formState);

  if (currentStep === 3) {
    return (
      <div className="flex w-full flex-col items-center space-y-3">
        <Button type="submit" className="w-full">
          Create an account
        </Button>
        <p className="text-sm text-muted-foreground antialiased">
          Already have an account?
          <Link
            href="/auth/sign-in"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    );
  }

  if (currentStep === 2) {
    return (
      <div className="flex w-full flex-col items-center space-y-3">
        <Button
          type="submit"
          className="w-full"
          {...(isName &&
            isEmail &&
            isPassword && {
              onClick: () =>
                onGenerateOTP(
                  getValues("email"),
                  getValues("password"),
                  setCurrentStep
                ),
            })}
        >
          Continue
        </Button>
        <p className="text-sm text-muted-foreground antialiased">
          Already have an account?
          <Link
            href="/auth/sign-in"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center space-y-3">
      <Button
        type="submit"
        onClick={() => setCurrentStep((prev: number) => prev + 1)}
        className="w-full"
      >
        Continue
      </Button>
      <p className="text-sm text-muted-foreground antialiased">
        Already have an account?
        <Link
          href="/auth/sign-in"
          className="font-bold text-primary underline-offset-4 hover:underline"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default ButtonHandler;
