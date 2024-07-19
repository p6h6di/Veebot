import React from "react";
import InfoBar from "../_components/InfoBar";
import BillingSettings from "../_components/settings/BillingSettings";

const SettingsPage = () => {
  return (
    <>
      <InfoBar />
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="chat-window flex w-full flex-1 flex-col gap-10 overflow-y-auto">
        <BillingSettings />
      </div>
    </>
  );
};

export default SettingsPage;
