import React from "react";

import { Alert } from "neetoui/v2";

export default function DeleteAlert({
  onClose,
  isOpen,
  handleDelete,
  itemName,
}) {
  return (
    <Alert
      isOpen={isOpen}
      className=""
      message={`Are you sure you want to delete the ${itemName}? This action cannot be undone.`}
      onClose={onClose}
      onSubmit={handleDelete}
      title={`Delete ${itemName}`}
    />
  );
}
