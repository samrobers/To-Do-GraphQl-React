const { Schema, Model } = require("mongoose");

const NoteSchema = new Schema(
  {
    title: String,
    required: True,
  },
  {
    description: String,
    required: True,
  }
);

const Note = model("Note", NoteSchema);

module.exports = Note;
