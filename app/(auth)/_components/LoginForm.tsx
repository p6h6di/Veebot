"use client";

import { USER_LOGIN_FORM } from "@/constants/form";
import React from "react";
import { useFormContext } from "react-hook-form";
import FormGenerator from "./FormGenerator";

const LoginForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="space-y-3">
      <h2>Login</h2>
      <p>You will receive a one time password</p>
      {USER_LOGIN_FORM.map((field) => (
        <FormGenerator
          key={field.id}
          {...field}
          errors={errors}
          register={register}
          name={field.name}
        />
      ))}
    </div>
  );
};

export default LoginForm;
