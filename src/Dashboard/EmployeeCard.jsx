import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import EmployeeCardRow from "./EmployeeCardRow";

const EmployeeCard = () => {
  const { register, handleSubmit } = useForm();
  const [EmployeeData, setEmployeeData] = useState([]);
  console.log(EmployeeData);
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          setEmployeeData([...EmployeeData, data]);
        })}
      >
        <input {...register("firstName")} placeholder="First name" />
        <select {...register("category")}>
          <option value="">Select...</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option c</option>
          <option value="d">Option d</option>
        </select>
        <textarea {...register("aboutYou")} placeholder="About you" />
        <input type="submit" />
      </form>

      <table class="mt-8 w-full table-auto">
        <thead className="bg-black  text-white ">
          <tr className=" h-10 ">
            <th>Name</th>
            <th>Attendance</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody className=" gap-2">
          {EmployeeData?.map((EmployeeData, index) => (
            <EmployeeCardRow key={index} EmployeeData={EmployeeData} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeCard;
