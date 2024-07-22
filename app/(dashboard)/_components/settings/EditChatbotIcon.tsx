import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import SectionLabel from "./SectionLabel";
import UploadButton from "../UploadButton";
import Image from "next/image";
import { BotIcon } from "lucide-react";

interface EditChatbotIconProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  chatbot: {
    id: string;
    icon: string | null;
    welcomeMessage: string | null;
  } | null;
}

const EditChatbotIcon = ({
  chatbot,
  errors,
  register,
}: EditChatbotIconProps) => {
  return (
    <div className="flex flex-col items-start gap-5 py-5">
      <SectionLabel
        label="Chatbot icon"
        message="Change the icon for the chatbot"
      />
      <UploadButton label="Edit Image" register={register} errors={errors} />
      {chatbot?.icon ? (
        <div className="overflow-hidden rounded-full">
          <Image
            src={`https://ucarecdn.com/${chatbot.icon}/`}
            alt="bot"
            width={80}
            height={80}
            className="object-cover"
          />
        </div>
      ) : (
        <div
          className="flex size-20 cursor-pointer items-center justify-center rounded-full bg-orange-200/70
        shadow-md"
        >
          <BotIcon className="size-8" />
        </div>
      )}
    </div>
  );
};

export default EditChatbotIcon;
