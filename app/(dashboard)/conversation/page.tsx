import React from "react";
import InfoBar from "../_components/InfoBar";
import { onGetAllAccountDomains } from "@/actions/settings";
import { Separator } from "@/components/ui/separator";
import ConversationMenu from "./_components/ConversationMenu";

const ConversationPage = async () => {
  const domains = await onGetAllAccountDomains();
  return (
    <div className="flex size-full">
      <ConversationMenu domains={domains?.domains} />
      <Separator orientation="vertical" />
      <div className="flex w-full flex-col">
        <div className="px-5">
          <InfoBar />
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
