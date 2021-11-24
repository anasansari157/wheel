import React, { useState } from "react";

import NewPane from "components/Common/NewPane";

import Tabs from "./Tabs";
import TopHeader from "./TopHeader";

const TabsHeadersTable = ({ tabs, segments, tags, itemName, createTable }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [isNewPaneOpen, setIsNewPaneOpen] = useState(false);
  const [isTabsMenuOpen, setIsTabsMenuOpen] = useState(true);

  return (
    <div className="flex w-full">
      <Tabs
        setIsSearchCollapsed={setIsSearchCollapsed}
        isSearchCollapsed={isSearchCollapsed}
        tabs={tabs}
        segments={segments}
        tags={tags}
        title={itemName}
        isTabsMenuOpen={isTabsMenuOpen}
      />
      <div className="flex-auto">
        <TopHeader
          itemName={itemName}
          setIsNewPaneOpen={setIsNewPaneOpen}
          isTabsMenuOpen={isTabsMenuOpen}
          setIsTabsMenuOpen={setIsTabsMenuOpen}
        />

        {createTable()}

        <NewPane
          showPane={isNewPaneOpen}
          setShowPane={setIsNewPaneOpen}
          fetchNotes={() => {}}
          itemName={itemName}
        />
      </div>
    </div>
  );
};

export default TabsHeadersTable;
