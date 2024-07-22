import { onGetSubscriptionPlan } from "@/actions/settings";
import React from "react";
import SectionLabel from "./SectionLabel";
import { CheckCircle2, Plus } from "lucide-react";
import toast from "react-hot-toast";
import { pricingCards } from "@/constants/pricing-cards";

const BillingSettings = async () => {
  const plan:
    | "STANDARD"
    | "PRO"
    | "ULTIMATE"
    | { status: number; error: string }
    | undefined = await onGetSubscriptionPlan();

  if (typeof plan === "object" && plan !== null) {
    // Handle the case where plan is an object (e.g., display an error message)
    return toast.error(`${plan.error}`);
  }
  const planFeatures = pricingCards.find(
    (card) => card.title.toUpperCase() === plan?.toUpperCase()
  )?.features;
  if (!planFeatures) return;
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
      <div className="lg:col-span-1">
        <SectionLabel
          label="Billing settings"
          message="Add payment information, upgrade and modify your plan."
        />
      </div>
      <div className="flex justify-start lg:col-span-2 lg:justify-center">
        <div className="flex h-[270px] w-full cursor-pointer items-center justify-center rounded-lg border-dashed border-gray-400 bg-muted">
          <div className="flex items-center gap-2">
            <div className="rounded-full border-2 p-1">
              <Plus className="text-gray-400" />
            </div>
            <div className="font-semibold">Upgrade Plan</div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2">
        <h3 className="text-xl font-semibold">Current Plan</h3>
        <p className="my-2 text-sm font-semibold">{plan}</p>
        {planFeatures.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <CheckCircle2 className="size-5" />
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillingSettings;
