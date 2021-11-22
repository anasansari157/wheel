import React from "react";

import Card from "./Card";

export default function NoteTable({ notes }) {
  return (
    <div className="w-full px-4 mt-5 cards-container">
      {notes.map((note, index) => (
        <Card title={note.title} key={index} description={note.description} />
      ))}
    </div>
  );
}
