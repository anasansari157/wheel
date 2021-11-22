import React, { useState } from "react";

import NewNotePane from "components/Dashboard/Notes/NewNotePane";

import Tabs from "./Tabs";
import TopHeader from "./TopHeader";

const TabsHeadersTable = ({ tabs, segments, tags, itemName, createTable }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);

  return (
    <div className="flex w-full">
      <Tabs
        setIsSearchCollapsed={setIsSearchCollapsed}
        isSearchCollapsed={isSearchCollapsed}
        tabs={tabs}
        segments={segments}
        tags={tags}
        title={itemName}
      />
      <div className="flex-auto">
        <TopHeader
          itemName={itemName}
          setShowNewNotePane={setShowNewNotePane}
        />

        {createTable()}

        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
          fetchNotes={() => {}}
        />
      </div>
    </div>
  );
};

export default TabsHeadersTable;
