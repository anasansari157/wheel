import React from "react";

import { Search, Plus } from "@bigbinary/neeto-icons";
import { Header } from "neetoui/layouts";
import { Input, Button } from "neetoui/v2";

const TopHeader = ({ itemName, setShowNewPane }) => {
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
            onClick={() => setShowNewPane(true)}
            label={`Add ${itemName}`}
            icon={Plus}
            style="primary"
            size="large"
          />
        </>
      }
    />
  );
};

export default TopHeader;
