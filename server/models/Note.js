const { Schema, model } = require("mongoose");

const NoteSchema = new Schema(
  {
    title: {
      type: String,
    },
  },
  {
    description: {
      type: String,
    },
  }
);

const Note = model("Note", NoteSchema);

module.exports = Note;
