import mongoose from "mongoose";

// 1-create a schema 
// 2-model based on that schema

const notesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {              // Colon added here
      type: String,
      required: true
    },
  },
  { timestamps: true }      // Correct spelling and casing here
);

const Note = mongoose.model("Note", notesSchema);

export default Note;
