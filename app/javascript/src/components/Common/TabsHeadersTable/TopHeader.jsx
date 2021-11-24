import React from "react";

import { Search, Plus, HamburgerMenu } from "@bigbinary/neeto-icons";
import { Header } from "neetoui/layouts";
import { Input, Button } from "neetoui/v2";

const TopHeader = ({
  itemName,
  setIsNewPaneOpen,
  isTabsMenuOpen,
  setIsTabsMenuOpen,
}) => {
  const SearchBar = () => (
    <Input
      className="pr-3"
      prefix={<Search />}
      placeholder="Search Name, Email, Phone number, etc"
    />
  );

  return (
    <div className="flex items-center">
      <HamburgerMenu
        className="ml-5 cursor-pointer"
        onClick={() => setIsTabsMenuOpen(!isTabsMenuOpen)}
      />

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
        menuBarToggle={function noRefCheck() {}}
      />
    </div>
  );
};

export default TopHeader;
