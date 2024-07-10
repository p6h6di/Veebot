import React from "react";
import SignInForm from "../../_components/SignInForm";
import LoginForm from "../../_components/LoginForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="w-1/5 border p-4">
      <SignInForm>
        <LoginForm />
        <Button type="submit" className="mt-4 w-full">
          Submit
        </Button>
        <p className="mt-2 text-sm font-medium text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/auth/sign-up" className="text-primary">
            Create one
          </Link>
        </p>
      </SignInForm>
    </div>
  );
};

export default SignInPage;
