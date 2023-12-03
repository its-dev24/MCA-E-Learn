import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import List from "../List/List";
import "../Notes/Notes.css";
const UserNotifications = () => {
  const [note, setNote] = useState();
  const fileType = "notifications";

  useEffect(() => {
    const fetchNotes = async (req, res) => {
      const response = await axios.get("http://localhost:5000/Notifications");
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
          <List
            key={index}
            title={note.title}
            url={note.body}
            type={fileType}
          />
        ))}
    </div>
  );
};

export default UserNotifications;
