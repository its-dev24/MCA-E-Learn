import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import List from "../List/List";
import "./Notes.css";
const Notes = () => {
  const [note, setNote] = useState();
  const { semester, subjectCode, module } = useParams();
  const noteBody = {
    semester,
    subjectCode,
    module,
  };
  useEffect(() => {
    const noteParams = new URLSearchParams(noteBody);
    const fetchNotes = async (req, res) => {
      const response = await axios.get(
        "http://localhost:5000/Notes?" + noteParams
      );
      if (response.status === 200) {
        const noteObj = response.data;
        console.log(noteObj);
        setNote(noteObj);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="notes-list">
      {note &&
        note.map((note, index) => (
          <List key={index} title={note.title} url={note.file} />
        ))}
    </div>
  );
};

export default Notes;
