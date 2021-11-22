import React from "react";

import { Search } from "@bigbinary/neeto-icons";
import { Header } from "neetoui/layouts";
import { Input, Button } from "neetoui/v2";

const TopHeader = ({ itemName, setShowNewNotePane }) => {
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
            onClick={() => setShowNewNotePane(true)}
            label={`Add ${itemName}`}
            icon="ri-add-line"
            style="primary"
            size="large"
          />
        </>
      }
    />
  );
};

export default TopHeader;
