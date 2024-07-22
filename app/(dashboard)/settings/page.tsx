import React from "react";
import InfoBar from "../_components/InfoBar";
import BillingSettings from "../_components/settings/BillingSettings";
import DarkModeToggle from "../_components/settings/DarkModeToggle";
import ChangePassword from "../_components/ChangePassword";

const SettingsPage = () => {
  return (
    <>
      <InfoBar />
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="chat-window flex w-full flex-1 flex-col gap-10 overflow-y-auto">
        <BillingSettings />
        <DarkModeToggle />
        <ChangePassword />
      </div>
    </>
  );
};

export default SettingsPage;
