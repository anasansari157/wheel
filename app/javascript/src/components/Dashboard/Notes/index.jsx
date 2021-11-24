import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { PageLoader } from "neetoui/v2";

import EmptyState from "components/Common/EmptyState";
import TabsHeadersTable from "components/Common/TabsHeadersTable";
import {
  SEGMENTS,
  TABS,
  TAGS,
  NOTES,
} from "components/Dashboard/Notes/constants";

import NoteTable from "./NoteTable";

const Notes = () => {
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      setNotes(NOTES);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  const createTable = notes =>
    notes.length ? (
      <>
        <NoteTable notes={notes} />
      </>
    ) : (
      <EmptyState
        image={EmptyNotesListImage}
        title="Looks like you don't have any notes!"
        subtitle="Add your notes to send customized emails to them."
        primaryAction={() => {}}
        primaryActionLabel="Add New Note"
      />
    );

  return (
    <>
      <TabsHeadersTable
        tabs={TABS}
        segments={SEGMENTS}
        tags={TAGS}
        itemName="Note"
        createTable={() => createTable(notes)}
      />
    </>
  );
};

export default Notes;
