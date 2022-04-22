import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./../features/login/loginSlice";
import { addNew } from "./../features/employees/employeeSlice";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import Select from "./Select";

const Employees = () => {
  const data = useSelector((state) => state.employees.employees);
  const dispatch = useDispatch();
  let Navigate = useNavigate();

  const handleClick = () => {
    dispatch(
      addNew({
        id: 4,
        keyField: 6,
        name: "faa",
        attendance: "present",
        date: "40 APRL",
      })
    );
    console.log(data);
  };
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      cell: (row, index, column, id) => {
        const employeeID = id.slice(7);
        return <Link to={employeeID}>{row.name}</Link>;
      },
    },
    {
      name: "Attendance",
      selector: (row) => row.attendance,
      sortable: true,
      conditionalCellStyles: [
        {
          when: (row) => row.attendance === "absent",
          style: {
            backgroundColor: "#ef4444",
            color: "white",
          },
        },
        {
          when: (row) => row.attendance === "present",
          style: {
            backgroundColor: "#86efac",
            color: "black",
          },
        },
        {
          when: (row) => row.attendance === "vacation",
          style: {
            backgroundColor: "#fde047",
            color: "black",
          },
        },
      ],
    },

    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
      cell: (row, index, column, id) => {
        return <Select />;
      },
    },
    {
      name: "test",
      cell: (row, index, column, id) => (
        <Button id={id} index={index} column={column} row={row} />
      ),
    },
  ];

  return (
    <>
      <div className="w-full px-2 md:w-4/5">
        <DataTable
          data={data}
          columns={columns}
          striped
          selectableRows
          pagination
          paginationPerPage={5}
        />
      </div>
      <button onClick={handleClick}>add new</button>
      <button
        className="btn mt-4"
        onClick={() => {
          dispatch(logout());
          Navigate("/");
        }}
      >
        logout
      </button>
    </>
  );
};
export default Employees;

export function Button({ id, index, column, row }) {
  return (
    <>
      <button
        className="text-cyan-700"
        onClick={() => {
          console.log(index, id, column, row);
        }}
      >
        Edit
      </button>
    </>
  );
}
