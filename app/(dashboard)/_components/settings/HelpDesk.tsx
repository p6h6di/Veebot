"use client";

import FormGenerator from "@/app/(auth)/_components/FormGenerator";
import { Button } from "@/components/ui/button";
import { useHelpDesk } from "@/hooks/use-settings";
import React from "react";
import SectionLabel from "./SectionLabel";
import Loader from "@/components/Loader";
import Accordion from "./Accordion";

const HelpDesk = ({ id }: { id: string }) => {
  const { register, errors, onSubmitQuestion, isQuestions, loading } =
    useHelpDesk(id);
  return (
    <div className="grid w-full grid-cols-1 lg:grid-cols-2">
      <div className="border-r p-6">
        <h3>Help Desk</h3>
        <form onSubmit={onSubmitQuestion} className="mt-10 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <SectionLabel
              label="Question"
              message="Add a question that you believe is frequently asked."
            />
            <FormGenerator
              inputType="input"
              register={register}
              errors={errors}
              form="help-desk-form"
              name="question"
              placeholder="Type your question"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-3">
            <SectionLabel
              label="Answer to question"
              message="The answer for the question above."
            />
            <FormGenerator
              inputType="textarea"
              register={register}
              errors={errors}
              name="answer"
              form="help-desk-form"
              placeholder="Type your answer"
              type="text"
              lines={5}
            />
          </div>
          <Button
            type="submit"
            className="bg-orange-500 font-semibold text-white transition duration-150 ease-in-out hover:bg-orange-700 hover:opacity-70"
          >
            <Loader loading={loading}>Create</Loader>
          </Button>
        </form>
      </div>
      <div className="overflow-y-auto p-6">
        <Loader loading={loading}>
          {isQuestions.length ? (
            isQuestions.map((question) => (
              <Accordion
                key={question.id}
                trigger={question.question}
                content={question.answer}
              />
            ))
          ) : (
            <p className="text-sm text-muted-foreground">No questions</p>
          )}
        </Loader>
      </div>
    </div>
  );
};

export default HelpDesk;
