import React from "react";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import Employees from "./Employees";
import Employees2 from "./Employees2";
import AddNewEmp from "./AddNewEmp";
import AddnewEmpPage from "./AddnewEmpPage";

const Admin = () => {
  return (
    <>
      <Dashboard>
        <Routes>
          <Route
            path="/"
            element={
              <h1 className="text-5xl font-semibold">welcome to dashboard</h1>
            }
          />
          <Route path="/employees" element={<Employees />} />
          <Route path="employees/addNew" element={<AddnewEmpPage />} />
          <Route path="employees/:id" element={<AddNewEmp />} />
          <Route path="/employees2" element={<Employees2 />} />
        </Routes>
      </Dashboard>
    </>
  );
};

export default Admin;
