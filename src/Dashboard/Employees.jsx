import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./../features/login/loginSlice";
import {
  addNew,
  deleteEmp,
  updateEmp,
} from "./../features/employees/employeeSlice";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { Popover, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { clearConfigCache } from "prettier";
import { toast } from "react-toastify";

const Employees = () => {
  const data = useSelector((state) => state.employees.employees);
  const dispatch = useDispatch();
  let Navigate = useNavigate();

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
      name: "Edit",
      cell: (row, index, column, id) => (
        <Edit id={id} index={index} column={column} row={row} />
      ),
    },
    {
      name: "Delete",
      cell: (row, index, column, id) => (
        <DeleteBtn id={id} index={index} column={column} row={row} />
      ),
    },
  ];

  return (
    <>
      <div className=" w-full px-2 md:w-4/5">
        <Link
          className=" float-right mb-4   bg-[#bbd5dd] py-4 px-4 text-sm font-medium text-black hover:bg-[#98b2ba] focus:outline-none"
          to="addNew"
        >
          add new
        </Link>

        <DataTable
          data={data}
          columns={columns}
          striped
          selectableRows
          pagination
          paginationPerPage={10}
        />
      </div>
    </>
  );
};
export default Employees;

export function Edit({ id, index, column, row }) {
  const [first, setfirst] = useState("");
  const dispatch = useDispatch();
  const newEdit = {
    id: row.id,
    keyField: row.keyField,
    name: first,
  };

  return (
    <>
      <Popover className="relative">
        <Popover.Button className="text-cyan-700">Edit</Popover.Button>

        <Popover.Panel className="w-68  fixed z-10 mt-3 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="bg-gray-50 p-4">
              <form className="flex gap-4">
                <input
                  type="text"
                  value={first}
                  onChange={(e) => setfirst(e.target.value)}
                />
                <button
                  className="text-cyan-700"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(newEdit);
                    dispatch(updateEmp(newEdit));
                    toast.success("Employee updated!", { autoClose: 1500 });
                  }}
                >
                  Edit
                </button>
              </form>
            </div>
          </div>
        </Popover.Panel>
      </Popover>
    </>
  );
}

export function DeleteBtn({ id, index, column, row }) {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="text-cyan-700"
        onClick={() => {
          dispatch(deleteEmp(row.keyField));
        }}
      >
        Delete
      </button>
    </>
  );
}
