import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Table, Avatar, Typography } from "neetoui/v2";

const ContactsTable = ({ contacts }) => {
  return (
    <>
      <Table
        columnData={[
          {
            dataIndex: "name",
            key: "name",
            render: (name, data) => (
              <div className="name-role-avatar-container flex align-items">
                <Avatar
                  size="medium"
                  user={{
                    name: name,
                  }}
                />
                <div className="name-role-container ml-2">
                  <Typography style="h5">{name}</Typography>

                  <Typography style="h6" weight="light">
                    {data.role}
                  </Typography>
                </div>
              </div>
            ),
            title: "Name and Role",
            width: 150,
          },
          {
            dataIndex: "email",
            key: "email",
            title: "Email",
            width: 150,
          },
          {
            dataIndex: "created_at",
            key: "created_at",
            title: "Created at",
            width: 250,
          },
          {
            dataIndex: "options",
            key: "options",
            render: () => (
              <MenuHorizontal onClick={() => {}} className="cursor-pointer" />
            ),
            title: "",
            width: 150,
          },
        ]}
        currentPageNumber={23}
        defaultPageSize={10}
        handlePageChange={function noRefCheck() {}}
        onRowClick={function noRefCheck() {}}
        onRowSelect={function noRefCheck() {}}
        rowData={contacts}
      />
    </>
  );
};

export default ContactsTable;
