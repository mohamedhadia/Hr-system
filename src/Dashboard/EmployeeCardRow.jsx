import React from "react";
// import { useDrag } from "react-dnd";

const EmployeeCardRow = ({ EmployeeData, isDragging, text }) => {
  // const [{ opacity }, dragRef] = useDrag(
  //   () => ({
  //     item: { text },
  //     collect: (monitor) => ({
  //       opacity: monitor.isDragging() ? 0.5 : 1,
  //     }),
  //   }),
  //   []
  // );
  return (
    <div
      className={`${
        EmployeeData.category === "present"
          ? "bg-green-300"
          : EmployeeData.category === "absent"
          ? "bg-red-300"
          : EmployeeData.category === "vacation"
          ? "bg-yellow-400"
          : "bg-transparent"
      }  m-2 break-words py-10 px-10`}
    >
      <p>{EmployeeData.category}</p>
    </div>
  );
};

export default EmployeeCardRow;
