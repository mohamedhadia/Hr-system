import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addNew } from "./../features/employees/employeeSlice";

const AddnewEmpPage = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const Empdata = useSelector((state) => state.employees.employees);
  const dispatch = useDispatch();
  const handleClick = (data) => {
    const id = Empdata[Empdata.length - 1].id + 1;
    const keyField = Empdata[Empdata.length - 1].keyField + 1;
    const name = data.firstName;
    console.log(id, keyField, name);
    dispatch(
      addNew({
        id,
        keyField,
        name,
        attendance: "present",
        date: "40 APRL",
      })
    );
    toast.success("Employee Added!", { autoClose: 1500 });
    resetField("firstName");
  };
  return (
    <div className="  w-full max-w-4xl ">
      <form
        onSubmit={handleSubmit((data) => handleClick(data))}
        className=" flex w-full flex-col items-center justify-center gap-8 bg-[#dceef3] px-4 py-8 md:flex-row"
      >
        <input
          {...register("firstName", { required: true })}
          placeholder="Employee Name"
          required
          className=" w-72 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500  focus:z-10 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />

        <input
          type="submit"
          className="cursor-pointer bg-[#bbd5dd] py-3 px-6 hover:bg-[#9eb8c0]"
        />
      </form>
    </div>
  );
};

export default AddnewEmpPage;
