import "./App.css";
import { Route, Routes } from "react-router-dom";
import Test from "./Dashboard/Test";
import Admin from "./Dashboard/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/admin/*" element={<Admin />} />
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
