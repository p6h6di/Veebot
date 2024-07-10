"use client";

import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface OtpInputProps {
  setOTP: React.Dispatch<React.SetStateAction<string>>;
  otp: string;
}

const OtpInput = ({ otp, setOTP }: OtpInputProps) => {
  return (
    <InputOTP maxLength={6} value={otp} onChange={(otp) => setOTP(otp)}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
};

export default OtpInput;
