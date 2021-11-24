import React from "react";

import { Header } from "neetoui/layouts";
import { Input, Button } from "neetoui/v2";
import { Search, Plus, HamburgerMenu } from "neetoui_icons";

const TopHeader = ({ itemName, setIsNewPaneOpen }) => {
  const SearchBar = () => (
    <Input
      className="pr-3"
      prefix={<Search />}
      placeholder="Search Name, Email, Phone number, etc"
    />
  );

  return (
    <Header
      title={`All ${itemName}s`}
      actionBlock={
        <>
          <SearchBar />
          <Button
            onClick={() => setIsNewPaneOpen(true)}
            label={`Add ${itemName}`}
            icon={Plus}
            style="primary"
            size="large"
          />
        </>
      }
      menuBarToggle={() => <HamburgerMenu />}
    />
  );
};

export default TopHeader;
