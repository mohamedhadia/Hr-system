import React from "react";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import Employees from "./Employees";
import Employees2 from "./Employees2";
import AddNewEmp from "./AddNewEmp";

const Admin = () => {
  return (
    <>
      <Dashboard>
        <Routes>
          <Route path="/" element={<p>asdasd</p>} />
          <Route path="/employees" element={<Employees />} />
          <Route path="employees/:id" element={<AddNewEmp />} />
          <Route path="/employees2" element={<Employees2 />} />
        </Routes>
      </Dashboard>
    </>
  );
};

export default Admin;
