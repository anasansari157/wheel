import React from "react";

import { Pane } from "neetoui";

import NewContactForm from "components/Dashboard/Contacts/NewContactForm";
import NewNoteForm from "components/Dashboard/Notes/NewNoteForm";

export default function NewPane({
  fetchNotes,
  showPane,
  setShowPane,
  itemName,
}) {
  const onClose = () => setShowPane(false);
  return (
    <Pane title={`Add New ${itemName}`} isOpen={showPane} onClose={onClose}>
      <div className="px-6">
        {itemName === "Note" ? (
          <NewNoteForm onClose={onClose} refetch={fetchNotes} />
        ) : (
          <NewContactForm onClose={onClose} refetch={fetchNotes} />
        )}
      </div>
    </Pane>
  );
}
