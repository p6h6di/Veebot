import FormGenerator from "@/app/(auth)/_components/FormGenerator";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface DomainUpdateProps {
  name: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<FieldValues>;
}

const DomainUpdate = ({ errors, name, register }: DomainUpdateProps) => {
  return (
    <div className="flex w-[400px] items-end gap-2 pt-5">
      <FormGenerator
        label="Domain name"
        register={register}
        name="domain"
        inputType="input"
        type="text"
        placeholder={name}
        errors={errors}
      />
    </div>
  );
};

export default DomainUpdate;
