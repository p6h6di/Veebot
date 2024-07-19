"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Textarea from "react-textarea-autosize";

interface FormGeneratorProps {
  id?: string;
  type: "email" | "text" | "password";
  inputType: "select" | "input" | "textarea";
  options?: { value: string; label: string; id: string }[];
  label?: string;
  placeholder: string;
  name: string;
  lines?: number;
  form?: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<FieldValues>;
}

const FormGenerator = ({
  errors,
  id,
  inputType,
  name,
  placeholder,
  register,
  type,
  form,
  label,
  lines,
  options,
}: FormGeneratorProps) => {
  switch (inputType) {
    case "input":
      return (
        <Label htmlFor={`input-${label}`} className="flex flex-col gap-2">
          {label && label}
          <Input
            id={`input-${label}`}
            type={type}
            placeholder={placeholder}
            form={form}
            {...register(name)}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="mt-2 text-red-400">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
    case "select":
      return (
        <Label htmlFor={`select-${label}`} className="flex flex-col gap-2">
          {label && label}
          <select form={form} id={`select-${label}`} {...register(name)}>
            {options?.length &&
              options.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="mt-2 text-red-400">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
    case "textarea":
      return (
        <Label htmlFor={`input-${label}`} className="flex flex-col gap-2">
          {label && label}
          <Textarea
            form={form}
            id={`input-${label}`}
            placeholder={placeholder}
            {...register(name)}
            rows={lines}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="mt-2 text-red-400">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
    default:
      <></>;
  }
};

export default FormGenerator;
