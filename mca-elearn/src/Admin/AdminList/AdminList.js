import React from "react";
import AdminListCSS from "./AdminList.module.css";
import { Link } from "react-router-dom";
import tick from "../../images/check-mark.png";
import cross from "../../images/crossed.png";
import axios from "axios";
const AdminList = ({ title, noteDetails }) => {
  console.log(noteDetails);
  const handleTick = async () => {
    // console.log("tick");
    const reqNotesBody = {
      title: noteDetails.title,
      semester: noteDetails.semester,
      subjectCode: noteDetails.subjectCode,
      module: noteDetails.module,
      file: noteDetails.file,
    };

    const response = await axios.post(
      "http://localhost:5000/Notes",
      reqNotesBody
    );
    const delApi = `http://localhost:5000/TempNotes/${noteDetails._id}`;
    const response2 = await axios.delete(delApi);
  };
  const handleCross = () => {
    console.log("cross");
  };
  return (
    <div className={AdminListCSS.adminListMain}>
      <div className={AdminListCSS.adminListContent}>
        {/* <img src={img2} /> */}
        <h3>{title}</h3>
        <div className={AdminListCSS.buttonGroup}>
          <button onClick={handleTick}>
            <img src={tick} alt="tick" />
          </button>
          <button onClick={handleCross}>
            <img src={cross} alt="croosed" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminList;
