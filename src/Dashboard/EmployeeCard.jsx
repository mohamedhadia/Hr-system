import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import EmployeeCardRow from "./EmployeeCardRow";

const EmployeeCard = () => {
  const { register, handleSubmit } = useForm();
  const [EmployeeData, setEmployeeData] = useState([]);
  console.log(EmployeeData);
  return (
    <div className="mdmax-w-4xl: my-10 h-full w-full max-w-3xl">
      <form
        onSubmit={handleSubmit((data) => {
          setEmployeeData([...EmployeeData, data]);
        })}
        className=" flex w-full flex-col items-center justify-start gap-8 bg-[#dceef3] p-4 md:flex-row"
      >
        <input
          {...register("firstName")}
          placeholder="First name"
          className=" border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500  focus:z-10 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
        <select
          {...register("category")}
          className="  border border-gray-300  py-2 text-left text-gray-900 placeholder-gray-500  focus:z-10 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        >
          <option value="">Select...</option>
          <option value="present">Present</option>
          <option value="vacation">Vacation</option>
          <option value="absent">Absent</option>
        </select>

        <input type="submit" />
      </form>

      <div className="grid  grid-cols-2 justify-center gap-1 md:grid-cols-3 lg:grid-cols-5">
        {EmployeeData?.map((EmployeeData, index) => (
          <EmployeeCardRow key={index} EmployeeData={EmployeeData} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeCard;
