import React from "react";

import { Search, Plus, Settings } from "@bigbinary/neeto-icons";
import { Typography } from "neetoui/v2";
import { MenuBar } from "neetoui/v2/layouts";

export default function Tabs({
  setIsSearchCollapsed,
  isSearchCollapsed,
  title,
  tabs,
  segments,
  tags,
}) {
  return (
    <>
      <MenuBar showMenu={true} title={title}>
        {tabs &&
          tabs.map((tab, index) => (
            <MenuBar.Block label={tab.label} count={tab.count} key={index} />
          ))}

        <MenuBar.SubTitle
          iconProps={[
            {
              icon: () => <Search size={20} />,
              onClick: () => setIsSearchCollapsed(!isSearchCollapsed),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </MenuBar.SubTitle>

        <MenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />

        {segments &&
          segments.map((segment, index) => (
            <MenuBar.Block
              label={segment.label}
              count={segment.count}
              key={index}
            />
          ))}

        <MenuBar.SubTitle
          iconProps={[
            {
              icon: () => <Settings size={20} />,
            },
            {
              icon: () => <Plus size={20} />,
            },
            {
              icon: () => <Search size={20} />,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </MenuBar.SubTitle>

        {tags &&
          tags.map((tag, index) => (
            <MenuBar.Block label={tag.label} count={tag.count} key={index} />
          ))}
      </MenuBar>
    </>
  );
}
