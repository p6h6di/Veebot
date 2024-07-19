import React, { JSX } from "react";

import { Icons } from "@/components/Icons";

type SIDE_BAR_MENU_PROPS = {
  label: string;
  icon: React.ReactNode;
  path: string;
};

export const SIDE_BAR_MENU: SIDE_BAR_MENU_PROPS[] = [
  {
    label: "Dashboard",
    icon: Icons.dashboard({}),
    path: "dashboard",
  },
  {
    label: "Conversations",
    icon: Icons.chat({}),
    path: "conversation",
  },
  {
    label: "Integrations",
    icon: Icons.integration({}),
    path: "integration",
  },
  {
    label: "Settings",
    icon: Icons.settings({}),
    path: "settings",
  },
  {
    label: "Appointments",
    icon: Icons.calender({}),
    path: "appointment",
  },
  {
    label: "Email Marketing",
    icon: Icons.email({}),
    path: "email-marketing",
  },
];

type TABS_MENU_PROPS = {
  label: string;
  icon?: JSX.Element;
};

export const TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: "unread",
    icon: Icons.email({}),
  },
  {
    label: "all",
    icon: Icons.email({}),
  },
  {
    label: "expired",
    icon: Icons.timer({}),
  },
  {
    label: "starred",
    icon: Icons.star({}),
  },
];

export const HELP_DESK_TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: "help desk",
  },
  {
    label: "questions",
  },
];

export const APPOINTMENT_TABLE_HEADER = [
  "Name",
  "RequestedTime",
  "Added Time",
  "Domain",
];

export const EMAIL_MARKETING_HEADER = ["Id", "Email", "Answers", "Domain"];

export const BOT_TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: "chat",
    icon: Icons.chat({}),
  },
  {
    label: "helpdesk",
    icon: Icons.help_desk({}),
  },
];
