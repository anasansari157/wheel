import React, { useState } from "react";

import NewPane from "components/Common/NewPane";

import Tabs from "./Tabs";
import TopHeader from "./TopHeader";

const TabsHeadersTable = ({ tabs, segments, tags, itemName, createTable }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [showNewPane, setShowNewPane] = useState(false);

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
        <TopHeader itemName={itemName} setShowNewPane={setShowNewPane} />

        {createTable()}

        <NewPane
          showPane={showNewPane}
          setShowPane={setShowNewPane}
          fetchNotes={() => {}}
          itemName={itemName}
        />
      </div>
    </div>
  );
};

export default TabsHeadersTable;
