import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "./../features/login/loginSlice";
import Table from "./table/Table";
import { UsersIcon } from "@heroicons/react/solid";
import Employees from "./Employees";

const Dashboard = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <div className="h-full w-full bg-[#fff]">
      <div className="flex flex-col md:h-screen md:flex-row ">
        <div className="flex items-center justify-around gap-10 bg-[#dceef3] py-4 text-[#111111] md:fixed md:h-screen md:w-2/6 md:flex-col md:justify-start lg:w-1/5 ">
          <Link
            to="/"
            className="text-lg font-bold md:py-8 md:text-center md:text-4xl"
          >
            HR System
          </Link>
          <div className="flex flex-row items-center gap-4 md:mt-8 md:flex-col">
            <NavLink
              to="employees"
              className={({ isActive }) =>
                isActive
                  ? "group mb-0 flex h-10 items-center justify-center gap-2 rounded-full bg-[#bbd5dd] px-4 text-lg font-semibold capitalize text-slate-800  md:mb-2 md:h-full md:py-4 md:px-8"
                  : "group mb-0 flex h-10 items-center justify-center gap-2 rounded-full px-4 text-lg  font-semibold  capitalize hover:bg-[#bbd5dd] hover:text-slate-800 md:mb-2 md:h-full md:py-4 md:px-8"
              }
            >
              <UsersIcon className="h-5 w-5  text-gray-600 " />
              employees
            </NavLink>
            <NavLink
              to="employees2"
              className={({ isActive }) =>
                isActive
                  ? "group mb-0 flex h-10 items-center justify-center gap-2 rounded-full bg-[#bbd5dd] px-4 text-lg font-semibold capitalize text-slate-800  md:mb-2 md:h-full md:py-4 md:px-8"
                  : "group mb-0 flex h-10 items-center justify-center gap-2 rounded-full px-4 text-lg  font-semibold  capitalize hover:bg-[#bbd5dd] hover:text-slate-800 md:mb-2 md:h-full md:py-4 md:px-8"
              }
            >
              <UsersIcon className="h-5 w-5  text-gray-600 " />
              employees2
            </NavLink>

            <button
              className="btn mt-4 "
              onClick={() => {
                dispatch(logout());
                Navigate("/");
              }}
            >
              logout
            </button>
          </div>
        </div>
        <div className="z-50 ml-auto mt-14 flex h-full w-full flex-col items-center justify-center bg-[#fff] md:mt-0 md:w-4/6 lg:w-4/5">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
