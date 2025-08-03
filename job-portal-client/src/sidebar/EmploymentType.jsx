import React from "react";
import InputField from "../Components/InputField";
const EmploymentType = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Type of Employment</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any
        </label>
        <InputField
          handLeChange={handleChange}
          value="full-time"
          title="Full-time"
          name="test"
        />
        <InputField
          handLeChange={handleChange}
          value="Part-time "
          title="Part-time"
          name="test"
        />
        <InputField
          handLeChange={handleChange}
          value="temporary "
          title="Temporary"
          name="test"
        />
      </div>
    </div>
  );
};

export default EmploymentType;
