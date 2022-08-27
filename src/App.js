import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section>
        <h1>Loading.....</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <React.Fragment>
      <section>
        <div>
          <h2>Experience</h2>
        </div>
        <div>
          <div>
            {jobs.map((job, index) => {
              return (
                <button key={job.id} onClick={() => setValue(index)}>
                  {job.company}
                </button>
              );
            })}
          </div>
          <article>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p>{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index}>
                  <FaAngleDoubleRight />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </React.Fragment>
  );
};

export default App;
