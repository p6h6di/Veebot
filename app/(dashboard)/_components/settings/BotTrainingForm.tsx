import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import TabsMenu from "./TabsMenu";
import { HELP_DESK_TABS_MENU } from "@/constants/menu";
import FilterQuestions from "./FilterQuestions";
import HelpDesk from "./HelpDesk";

const BotTrainingForm = ({ id }: { id: string }) => {
  return (
    <div className="mb-10 flex flex-col items-start gap-5 py-5">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Bot Training</h2>
        <p className="text-sm font-light">
          Set FAQ questions, create questions for capturing lead information and
          train your bot to act the way you want it to.
        </p>
      </div>

      <TabsMenu triggers={HELP_DESK_TABS_MENU}>
        <TabsContent value="help desk" className="w-full">
          <HelpDesk id={id} />
        </TabsContent>
        <TabsContent value="questions">
          <FilterQuestions id={id} />
        </TabsContent>
      </TabsMenu>
    </div>
  );
};

export default BotTrainingForm;
