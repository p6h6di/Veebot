import { onGetCurrentDomainInfo } from "@/actions/settings";
import { redirect } from "next/navigation";
import React from "react";
import InfoBar from "../../_components/InfoBar";
import SettingsForm from "../../_components/settings/SettingsForm";
import BotTrainingForm from "../../_components/settings/BotTrainingForm";

const DomainSettingsPage = async ({
  params,
}: {
  params: { domain: string };
}) => {
  const domain = await onGetCurrentDomainInfo(params.domain);
  if (!domain) return redirect("/dashboard");
  return (
    <>
      <InfoBar />
      <SettingsForm
        plan={domain.subscription?.plan!}
        chatbot={domain.domains[0].chatBot}
        id={domain.domains[0].id}
        name={domain.domains[0].name}
      />
      <BotTrainingForm id={domain.domains[0].id} />
    </>
  );
};

export default DomainSettingsPage;
