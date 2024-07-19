import { onGetSubscriptionPlan } from "@/actions/settings";
import React from "react";
import SectionLabel from "./SectionLabel";

const BillingSettings = async () => {
  const plan = await onGetSubscriptionPlan();
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
      <div className="lg:col-span-1">
        <SectionLabel
          label="Billing settings"
          message="Add payment information, upgrade and modify your plan."
        />
      </div>
    </div>
  );
};

export default BillingSettings;
