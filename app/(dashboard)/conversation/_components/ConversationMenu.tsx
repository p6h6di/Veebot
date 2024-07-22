import React from "react";

interface ConversationMenuProps {
  domains?:
    | {
        id: string;
        name: string;
        icon: string;
      }[]
    | undefined;
}

const ConversationMenu = ({ domains }: ConversationMenuProps) => {
  return <div>ConversationMenu</div>;
};

export default ConversationMenu;
