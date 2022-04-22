import React from "react";
import TableRow from "./TableRow";

const Table = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-50  table-auto">
        <thead className="text-xs text-gray-50 tracking-wide uppercase bg-[#1a1a1a]">
          <tr>
            <th scope="col" className="px-6 py-6">
              employee name
            </th>
            <th scope="col" className="px-6 py-6">
              attendance
            </th>
            <th scope="col" className="px-6 py-6">
              date
            </th>

            <th scope="col" className="px-6 py-6">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
