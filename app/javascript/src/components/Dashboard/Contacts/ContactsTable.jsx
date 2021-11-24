import React, { useState } from "react";

import { Table, Toastr } from "neetoui/v2";

import DeleteAlert from "components/Common/DeleteAlert";
import { columnData } from "constants/contacts";

const ContactsTable = ({ contacts }) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleDelete = () => {
    setIsAlertOpen(false);
    Toastr.success("Contact deleted successfully!");
  };
  return (
    <>
      <Table
        columnData={columnData}
        currentPageNumber={23}
        defaultPageSize={10}
        handlePageChange={function noRefCheck() {}}
        onRowClick={function noRefCheck() {}}
        onRowSelect={function noRefCheck() {}}
        rowData={contacts}
      />

      <DeleteAlert
        onClose={() => setIsAlertOpen(false)}
        isOpen={isAlertOpen}
        handleDelete={handleDelete}
        itemName="contact"
      />
    </>
  );
};

export default ContactsTable;
