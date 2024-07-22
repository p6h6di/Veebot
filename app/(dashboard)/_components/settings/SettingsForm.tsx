"use client";

import { useSettings } from "@/hooks/use-settings";
import { Plans } from "@prisma/client";
import React from "react";
import DomainUpdate from "./DomainUpdate";
import CodeSnippet from "./CodeSnippet";
import { Icons } from "@/components/Icons";
import EditChatbotIcon from "./EditChatbotIcon";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import Loader from "@/components/Loader";

const WelcomeMessage = dynamic(
  () => import("./GreetingsMessage").then((props) => props.default),
  {
    ssr: false,
  }
);

interface SettingsFormProps {
  id: string;
  name: string;
  plan: Plans;
  chatbot: {
    id: string;
    icon: string | null;
    welcomeMessage: string | null;
  } | null;
}
const SettingsForm = ({ chatbot, id, name, plan }: SettingsFormProps) => {
  const {
    deleting,
    errors,
    loading,
    onDeleteDomain,
    onUpdateSettings,
    register,
  } = useSettings(id);
  return (
    <form onSubmit={onUpdateSettings} className="pb-12">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">Domain Settings</h2>
        <hr />
        <DomainUpdate name={name} register={register} errors={errors} />
        <CodeSnippet id={id} />
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold">Chatbot Settings</h1>
          <div className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold">
            <Icons.premium className="size-6 text-yellow-400" />
            Premium
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-2">
          <div className="col-span-1 flex flex-col gap-5">
            <EditChatbotIcon
              chatbot={chatbot}
              register={register}
              errors={errors}
            />
            <WelcomeMessage
              message={chatbot?.welcomeMessage!}
              register={register}
              errors={errors}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-5">
        <Button
          onClick={onDeleteDomain}
          variant="destructive"
          type="button"
          className="h-[50px] px-10"
        >
          <Loader loading={deleting}>Delete Domain</Loader>
        </Button>
        <Button type="button" className="h-[50px] px-10">
          <Loader loading={loading}>Save</Loader>
        </Button>
      </div>
    </form>
  );
};

export default SettingsForm;
