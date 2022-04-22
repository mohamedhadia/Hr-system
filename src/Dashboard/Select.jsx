import React from "react";

const Select = () => {
  return (
    <div className="col-span-6 sm:col-span-3">
      <select
        id="attendance"
        name="attendance"
        onChange={(e) => console.log(e.target.value)}
        className="mt-1 block w-full border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-sky-700 focus:outline-none focus:ring-sky-700 sm:text-sm"
      >
        <option></option>
        <option>absent</option>
        <option>present</option>
        <option>vacation</option>
      </select>
    </div>
  );
};

export default Select;
