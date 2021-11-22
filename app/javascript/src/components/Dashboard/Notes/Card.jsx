import React, { useState } from "react";

import { Clock, MenuVertical } from "@bigbinary/neeto-icons";
import { Typography, Button, Avatar, Toastr, Dropdown } from "neetoui/v2";

import DeleteAlert from "../../Common/DeleteAlert";

export default function Card({ title, description }) {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const handleDelete = () => {
    setShowDeleteAlert(false);
    Toastr.success("Note deleted successfully!");
  };

  const VerticalMenu = () => {
    return (
      <Dropdown
        icon={() => <MenuVertical size={20} />}
        buttonStyle="text"
        buttonProps={{
          onClick: () => {},
        }}
        onClose={() => {}}
        position="bottom-end"
      >
        <li>Edit</li>
        <li onClick={() => setShowDeleteAlert(!showDeleteAlert)}>Delete</li>
      </Dropdown>
    );
  };

  const TimeLog = () => (
    <div className="flex items-center">
      <Clock color="#68737D" size={13} />
      <Typography style="body3" weight="extralight" className="px-1">
        Created 2 hours ago
      </Typography>
      <Avatar
        user={{
          name: "Oliver Smith",
          imageUrl:
            "https://images.unsplash.com/photo-1603570388466-eb4fe5617f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        }}
        size="small"
      />
    </div>
  );

  return (
    <>
      <div className="card p-4 border neeto-ui-shadow-s my-4">
        <div className="card-header my-1 flex justify-between">
          <Typography style="h4" weight="semibold">
            {title}
          </Typography>
          <VerticalMenu />
        </div>
        <Typography style="body2" weight="light" className="text-gray-500">
          {description}
        </Typography>

        <hr className="my-2" />

        <div className="card-footer flex my-2 justify-between items-center">
          <Button label="Getting Started" style="secondary" />
          <TimeLog />
        </div>
      </div>

      <DeleteAlert
        onClose={() => setShowDeleteAlert(false)}
        isOpen={showDeleteAlert}
        handleDelete={handleDelete}
        itemName="note"
      />
    </>
  );
}
