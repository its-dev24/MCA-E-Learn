import React from "react";
import "./Contributions.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Contributions = () => {
  const navigate = useNavigate();
  const [sem, setSem] = useState(" ");
  const [module, setModule] = useState(" ");
  const [title, setTitle] = useState(" ");
  const [currSub, setCurrSub] = useState(" ");
  const [subjects, setSubjects] = useState(null);
  const [files, setFiles] = useState();

  // const notes = {
  //   title: title,
  //   semester: sem,
  //   module: module,
  //   subjectCode: currSub,
  // };

  const getSubject = (semster) => {
    const url = `http://localhost:5000/Subjects/${semster}`;
    const fetchSubjects = async () => {
      const response = await axios.get(url);
      if (response.status === 200) {
        const subjectObj = response.data;

        setSubjects(subjectObj);
      }
    };
    fetchSubjects();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formdata = {
      title,
      semester: sem,
      module,
      subjectCode: currSub,
      files,
    };
    console.log();
    // console.log(fileData.get("file"));
    const respose = await axios
      .post("http://localhost:5000/TempNotes/", formdata, {
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
    navigate("/");
  };
  return (
    <div className="contribution-main">
      <div className="contribution-contents">
        <form onSubmit={handleSubmit}>
          <div className="title element">
            <label>TITLE</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="semester element">
            <label>SEMESTER</label>
            <select
              name="semester"
              id="semester"
              onChange={(e) => {
                getSubject(e.target.value);
                setSem(e.target.value);
              }}
            >
              <option>---</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="subjects element">
            <label>SUBJECT</label>
            <select
              name="subject"
              id="subject"
              onChange={(e) => {
                setCurrSub(e.target.value);
                console.log(sem);
              }}
              value={currSub}
            >
              <option>---</option>
              {subjects &&
                subjects.map((data, index) => (
                  <option value={data.subjectCode} key={index}>
                    {data.title}
                  </option>
                ))}
            </select>
          </div>
          <div className="module element">
            <label>MODULE</label>
            <select
              name="module"
              id="module"
              onChange={(e) => {
                setModule(e.target.value);
                console.log(currSub);
              }}
              value={module}
            >
              <option>---</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="note element">
            <label>NOTE:</label>
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
          <div className="button-submit">
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contributions;
