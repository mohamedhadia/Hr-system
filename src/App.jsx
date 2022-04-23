import "./App.css";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Test from "./Dashboard/Test";
import Admin from "./Dashboard/Admin";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Test />} />
      {/* <Route path="/admin/*" element={<Admin />} /> */}

      <Route
        path="/admin/*"
        element={
          !user.isLoggedin ? (
            <Navigate to="/" replace state={{ from: location }} />
          ) : (
            <Admin />
          )
        }
      />

      <Route
        path="*"
        element={
          <h1 className="w-full text-center text-5xl">Page not found</h1>
        }
      />
    </Routes>
  );
}

export default App;
