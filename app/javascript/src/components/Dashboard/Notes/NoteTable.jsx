import React from "react";

import { NOTES } from "constants/notes";

import Card from "./Card";

export default function NoteTable({ notes }) {
  //Use dummy notes
  notes = NOTES;

  return (
    <div className="w-full px-4 mt-5 cards-container">
      {notes.map((note, index) => (
        <Card title={note.title} key={index} description={note.description} />
      ))}
    </div>
  );
}
