import React from "react";
import InputField from "../Components/InputField";
const WorkExperience = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Work Experience</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any Experience
        </label>
        <InputField
          handLeChange={handleChange}
          value="Internship"
          title="Internship"
          name="test"
        />
        <InputField
          handLeChange={handleChange}
          value="Work remotely"
          title="Work remotely"
          name="test"
        />
      </div>
    </div>
  );
};

export default WorkExperience;
