import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Jobs from "./Jobs";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  const handleApply = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLbel: "URL address",
      inputPlaceholder: "Enter the url",
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
  };
  console.log(id);
  return (
    <div className=" max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <h2>JobDetails: {id}</h2>
      <h1>{job.jobTitle}</h1>

      <button className="bg-blue px-8 py-2 text-white" onClick={handleApply}>
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;
