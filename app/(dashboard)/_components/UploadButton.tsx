import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage } from "@hookform/error-message";
import { Edit } from "lucide-react";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface UploadButtonProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<FieldValues>;
  label: string;
}

const UploadButton = ({ errors, label, register }: UploadButtonProps) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <Label
          htmlFor="upload-button"
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-white/80 p-3 text-sm font-semibold text-gray-600"
        >
          <Input
            {...register("image")}
            className="hidden"
            type="file"
            id="upload-button"
          />
          <Edit />
          {label}
        </Label>
        <p className="ml-6 text-sm text-gray-600">
          Recommended size is 300px * 300px, size <br /> less then 2MB
        </p>
      </div>
      <ErrorMessage
        errors={errors}
        name="image"
        render={({ message }) => (
          <p className="mt-2 text-red-400">
            {message === "Required" ? "" : message}
          </p>
        )}
      />
    </>
  );
};

export default UploadButton;
