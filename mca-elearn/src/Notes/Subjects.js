import React, { useEffect, useState } from "react";
import CardView from "../cards/CardView";
import axios from "axios";
import { useParams } from "react-router-dom";
const Subjects = () => {
  const [subjects, setSubjects] = useState(null);
  const { semester } = useParams();
  console.log(semester);
  const apiUrl = `http://localhost:5000/Subjects/${semester}`;
  console.log(apiUrl);
  useEffect(() => {
    const fetchSubjects = async () => {
      const response = await axios.get(apiUrl);
      if (response.status === 200) {
        const subjectObj = response.data;
        console.log(subjectObj);
        setSubjects(subjectObj);
      }
    };
    fetchSubjects();
  }, []);

  return (
    <div className="notes-main">
      <div className="contents">
        <div className="cards">
          {subjects &&
            subjects.map((data, index) => (
              <CardView
                key={index}
                text={`${data.title}`}
                image={require("../images/subject.png")}
                url={`/Modules`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
