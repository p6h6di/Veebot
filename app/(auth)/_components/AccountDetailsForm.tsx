"use client";

import { USER_REGISTRATION_FORM } from "@/constants/form";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import FormGenerator from "./FormGenerator";

interface AccountDetailsProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const AccountDetailsForm = ({ errors, register }: AccountDetailsProps) => {
  return (
    <>
      <h2>Account details</h2>
      <p>Enter your email and password</p>
      {USER_REGISTRATION_FORM.map((field) => (
        <FormGenerator
          key={field.id}
          {...field}
          errors={errors}
          register={register}
          name={field.name}
        />
      ))}
    </>
  );
};

export default AccountDetailsForm;
