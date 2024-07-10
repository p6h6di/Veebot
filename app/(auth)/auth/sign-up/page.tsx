import React from "react";
import SignUpForm from "../../_components/SignUpForm";
import RegistrationFormStep from "../../_components/RegistrationFormStep";
import HighlightBar from "../../_components/HighlightBar";
import ButtonHandler from "../../_components/ButtonHandler";

const SignUpPage = () => {
  return (
    <div className="w-2/5 border p-6 shadow-md">
      <SignUpForm>
        <RegistrationFormStep />
        <ButtonHandler />
        <HighlightBar />
      </SignUpForm>
    </div>
  );
};

export default SignUpPage;
