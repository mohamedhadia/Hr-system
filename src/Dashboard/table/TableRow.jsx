import React from "react";

const TableRow = () => {
  return (
    <tr className="bg-[#262626]  hover:bg-[#262626] ">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-50  whitespace-nowrap"
      >
        Mohamed
      </th>
      <td className="px-6 py-4 text-gray-100 capitalize">arrived</td>
      <td className="px-6 py-4 text-gray-100 capitalize">20 APRL</td>
      <td className="px-6 py-4 text-right text-gray-100">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
    </tr>
  );
};

export default TableRow;
