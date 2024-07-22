"use client";

import { useChangePassword } from "@/hooks/use-settings";
import React from "react";
import SectionLabel from "./settings/SectionLabel";
import FormGenerator from "@/app/(auth)/_components/FormGenerator";
import { Button } from "@/components/ui/button";
import Loader from "@/components/Loader";

const ChangePassword = () => {
  const { errors, loading, onChangePassword, register } = useChangePassword();
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
      <div className="lg:col-span-1">
        <SectionLabel label="Change Password" message="Reset your password" />
      </div>
      <form onSubmit={onChangePassword} className="lg:col-span-2">
        <div className="lg:[500px] flex flex-col gap-3">
          <FormGenerator
            register={register}
            name="password"
            placeholder="New Password"
            type="text"
            inputType="input"
            errors={errors}
          />
          <FormGenerator
            register={register}
            name="confirmPassword"
            placeholder="Confirm Password"
            type="text"
            inputType="input"
            errors={errors}
          />
          <Button>
            <Loader loading={loading}>Change Password</Loader>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
