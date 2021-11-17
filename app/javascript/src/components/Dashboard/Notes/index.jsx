import React, { useState, useEffect } from "react";

import { Search } from "@bigbinary/neeto-icons";
import EmptyNotesListImage from "images/EmptyNotesList";
import { PageLoader } from "neetoui";
import { Header } from "neetoui/layouts";
import { Input, Button } from "neetoui/v2";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import NewNotePane from "./NewNotePane";
import NoteTable from "./NoteTable";
import Tabs from "./Tabs";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await notesApi.fetch();
      setNotes(response.data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  const SearchBar = () => (
    <Input
      className="pr-3"
      prefix={<Search />}
      placeholder="Search Name, Email, Phone number, etc"
    />
  );

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="flex w-full">
      <Tabs
        setIsSearchCollapsed={setIsSearchCollapsed}
        isSearchCollapsed={isSearchCollapsed}
      />
      <div className="flex-auto">
        <Header
          title="All Notes"
          actionBlock={
            <>
              <SearchBar />
              <Button
                onClick={() => setShowNewNotePane(true)}
                label="Add Note"
                icon="ri-add-line"
                style="primary"
                size="large"
              />
            </>
          }
        />
        {notes.length ? (
          <>
            <NoteTable notes={notes} />
          </>
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any notes!"
            subtitle="Add your notes to send customized emails to them."
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add New Note"
          />
        )}
        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
          fetchNotes={fetchNotes}
        />
      </div>
    </div>
  );
};

export default Notes;
