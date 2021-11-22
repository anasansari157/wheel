import React from "react";

import { Text, UserCircle, NeetoInsights } from "@bigbinary/neeto-icons";
import { Sidebar } from "neetoui/v2/layouts";
import { withRouter } from "react-router-dom";

const NavBar = () => {
  return (
    <Sidebar
      collapsible={true}
      appName="NeetoUI"
      navLinks={[
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
      ]}
      profileInfo={{
        dropdownProps: [{ label: "Profile" }, { label: "Logout" }],
        imageUrl:
          "https://images.unsplash.com/photo-1603570388466-eb4fe5617f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        name: "Oliver Smith",
      }}
    />
  );
};

export default withRouter(NavBar);
