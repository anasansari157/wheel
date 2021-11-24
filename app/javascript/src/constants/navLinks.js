import React from "react";

import { Text, UserCircle, NeetoInsights } from "neetoui_icons";

export const NAV_LINKS = [
  {
    icon: () => <Text size={24} />,
    label: "Notes",
    to: "/notes",
  },
  {
    icon: () => <UserCircle size={24} />,
    label: "Contacts",
    to: "/contacts",
  },
  {
    icon: () => <NeetoInsights size={24} />,
    label: "Settings",
    to: "/settings",
  },
];
