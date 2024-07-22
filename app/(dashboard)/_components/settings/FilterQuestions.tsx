"use client";
import { useFilterQuestions } from "@/hooks/use-settings";
import React from "react";
import SectionLabel from "./SectionLabel";
import FormGenerator from "@/app/(auth)/_components/FormGenerator";
import { Button } from "@/components/ui/button";
import Loader from "@/components/Loader";

const FilterQuestions = ({ id }: { id: string }) => {
  const { errors, isQuestions, loading, onAddFilterQuestions, register } =
    useFilterQuestions(id);
  return (
    <div className="grid w-full grid-cols-1 lg:grid-cols-2">
      <div className="border-r p-6">
        <h3>Bot Questions</h3>
        <form
          onSubmit={onAddFilterQuestions}
          className="mt-10 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-3">
            <SectionLabel
              label="Question"
              message="Add a question that you want your chatbot to ask"
            />
            <FormGenerator
              inputType="input"
              register={register}
              errors={errors}
              form="filter-questions-form"
              name="question"
              placeholder="Type your question"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-3">
            <SectionLabel
              label="Answer to question"
              message="The anwer for the question above"
            />
            <FormGenerator
              inputType="textarea"
              register={register}
              errors={errors}
              form="filter-questions-form"
              name="answer"
              placeholder="Type your answer"
              type="text"
              lines={5}
            />
          </div>
          <Button
            type="submit"
            className="bg-orange-500 font-semibold text-white transition duration-150 ease-in-out hover:bg-orange-700 hover:opacity-70"
          >
            Create
          </Button>
        </form>
      </div>
      <div className="overflow-y-auto p-6">
        <Loader loading={loading}>
          {isQuestions.length ? (
            isQuestions.map((question) => (
              <div key={question.id}>
                <h2 className="text-lg font-semibold">
                  Question: {question.question}
                </h2>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">No Questions</p>
          )}
        </Loader>
      </div>
    </div>
  );
};

export default FilterQuestions;
