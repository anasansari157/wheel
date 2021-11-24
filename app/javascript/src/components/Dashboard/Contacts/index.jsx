import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { PageLoader } from "neetoui";

import EmptyState from "components/Common/EmptyState";
import TabsHeadersTable from "components/Common/TabsHeadersTable";
import {
  CONTACTS,
  SEGMENTS,
  TABS,
  TAGS,
} from "components/Dashboard/Contacts/constants";

import ContactsTable from "./ContactsTable";

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      setContacts(CONTACTS);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  const createContactsTable = contacts =>
    contacts.length ? (
      <div className="m-5">
        <ContactsTable contacts={contacts} />
      </div>
    ) : (
      <EmptyState
        image={EmptyNotesListImage}
        title="Looks like you don't have any contacts!"
        subtitle="Add your contacts to send customized emails to them."
        primaryAction={() => {}}
        primaryActionLabel="Add New Contact"
      />
    );

  return (
    <>
      <TabsHeadersTable
        tabs={TABS}
        segments={SEGMENTS}
        tags={TAGS}
        itemName="Contact"
        createTable={() => createContactsTable(contacts)}
      />
    </>
  );
};

export default Contacts;
