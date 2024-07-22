import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import SectionLabel from "./SectionLabel";
import FormGenerator from "@/app/(auth)/_components/FormGenerator";

interface GreetingsMessageProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  message: string;
}

const GreetingsMessage = ({
  message,
  errors,
  register,
}: GreetingsMessageProps) => {
  return (
    <div className="flex flex-col gap-2">
      <SectionLabel
        label="Greetings message"
        message="Customize your welcome message"
      />
      <div className="lg:w-[500px]">
        <FormGenerator
          register={register}
          errors={errors}
          inputType="textarea"
          type="text"
          lines={2}
          name="welcomeMessage"
          placeholder="message"
        />
      </div>
    </div>
  );
};

export default GreetingsMessage;
