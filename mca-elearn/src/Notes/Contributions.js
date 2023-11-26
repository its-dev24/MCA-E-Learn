import React from "react";
import "./Contributions.css";
import { useState } from "react";
import axios from "axios";
const Contributions = () => {
  const [sem, setSem] = useState(" ");
  const [module, setModule] = useState(" ");
  const [title, setTitle] = useState(" ");
  const [currSub, setCurrSub] = useState(" ");
  const [subjects, setSubjects] = useState(null);

  const notes = {
    title: title,
    semester: sem,
    module: module,
    subjectCode: currSub,
    file: "file",
  };
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
  const handlePrint = () => {
    alert(notes.currSub);
  };
  return (
    <div className="contribution-main">
      <div className="contribution-contents">
        <form>
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
              name="note"
              id="note"
              onChange={(e) => {
                console.log(notes);
              }}
            />
          </div>
          <div className="button-submit">
            <button
              onClick={() => {
                handlePrint();
              }}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contributions;
