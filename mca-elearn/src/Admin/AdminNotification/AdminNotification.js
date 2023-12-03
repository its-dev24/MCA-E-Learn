import React from "react";
import AdminNotiCSS from "./AdminNotification.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AdminNotification = () => {
  const navigate = useNavigate();
  const [snippet, setSnippet] = useState(" ");
  const [title, setTitle] = useState(" ");
  const [files, setFiles] = useState();

  // const notes = {
  //   title: title,
  //   semester: sem,
  //   module: module,
  //   subjectCode: currSub,
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formdata = {
      title,
      snippet,
      body: files,
    };
    console.log();
    // console.log(fileData.get("file"));
    const respose = await axios
      .post("http://localhost:5000/Notifications", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        if (respose.status === 200) {
          console.log("Added to temp notes");
        }
      })
      .catch((e) => {
        console.log(e);
      });
    console.log(formdata);
    navigate("/adminhome");
  };
  return (
    <div className={AdminNotiCSS.adminNotificationMain}>
      <div className={AdminNotiCSS.adminNotificationContents}>
        <form onSubmit={handleSubmit}>
          <div className={AdminNotiCSS.adminElement}>
            <label>TITLE</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className={AdminNotiCSS.adminElement}>
            <label>SNIPPET</label>
            <input
              type="text"
              name="snippet"
              id="snippet"
              onChange={(e) => setSnippet(e.target.value)}
              value={snippet}
            />
          </div>

          <div className={AdminNotiCSS.adminElement}>
            <label>NOTIFICATION:</label>
            <input
              type="file"
              name="file"
              id="file"
              accept="application/pdf"
              onChange={(e) => {
                setFiles(e.target.files[0]);
              }}
            />
          </div>
          <div className={AdminNotiCSS.adminButtonSubmit}>
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminNotification;
