import React from "react";
import { useEffect, useState } from "react";
import AdminNotesCSS from "./AdminNotes.module.css";
import axios from "axios";
import AdminList from "../AdminList/AdminList";
const AdminNotes = () => {
  const [note, setNote] = useState();

  useEffect(() => {
    const fetchNotes = async (req, res) => {
      const response = await axios.get("http://localhost:5000/TempNotes");
      if (response.status === 200) {
        const noteObj = response.data;
        console.log(noteObj);
        setNote(noteObj);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className={AdminNotesCSS.adminNotesList}>
      {note &&
        note.map((note, index) => (
          <AdminList key={index} title={note.title} noteDetails={note} />
        ))}
    </div>
  );
};

export default AdminNotes;
