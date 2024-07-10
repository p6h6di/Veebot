"use client";

import React from "react";
import OtpInput from "./OtpInput";

interface OtpFormProps {
  setOTP: React.Dispatch<React.SetStateAction<string>>;
  onOTP: string;
}

const OtpForm = ({ onOTP, setOTP }: OtpFormProps) => {
  return (
    <>
      <h1 className="text-lg font-semibold">Enter OTP</h1>
      <p className="text-sm font-medium text-muted-foreground">
        Enter the one time password that was sent to your email.
      </p>
      <OtpInput otp={onOTP} setOTP={setOTP} />
    </>
  );
};

export default OtpForm;
