"use client";

import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import UserTypeCard from "./UserTypeCard";

interface TypeSelectionProps {
  register: UseFormRegister<FieldValues>;
  userType: "owner" | "student";
  setUserType: React.Dispatch<React.SetStateAction<"owner" | "student">>;
}

const TypeSelectionForm = ({
  register,
  setUserType,
  userType,
}: TypeSelectionProps) => {
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold">Create an account</h1>
      <p className="text-sm font-medium text-muted-foreground">
        Tell us about yourself! What do you do? Let&apos;s tailor your
        experience so it best suits you.
      </p>
      <UserTypeCard
        register={register}
        userType={userType}
        setUserType={setUserType}
        value="owner"
        title="I own a business"
        text="Setting up my account for my company."
      />
      <UserTypeCard
        register={register}
        userType={userType}
        setUserType={setUserType}
        value="student"
        title="I am a student"
        text="Looking to learn about the tool."
      />
    </div>
  );
};

export default TypeSelectionForm;
