import React from "react";

const EmployeeCardRow = ({ EmployeeData }) => {
  console.log(EmployeeData);
  return (
    <tr className="  h-14 border-separate border-t-4 border-white bg-[#dceef3] text-center">
      <td>{EmployeeData.firstName}</td>
      <td
        className={`${
          EmployeeData.category === "A"
            ? "bg-green-300"
            : EmployeeData.category === "B"
            ? "bg-red-300"
            : EmployeeData.category === "C"
            ? "bg-yellow-400"
            : "bg-transparent"
        }`}
      >
        {EmployeeData.category}
      </td>
      <td>{EmployeeData.aboutYou}</td>
    </tr>
  );
};

export default EmployeeCardRow;
