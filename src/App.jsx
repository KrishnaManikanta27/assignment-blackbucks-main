import React from "react";
import "./index.css";
import StudentList from "./components/StudentList";

const App = () => {
  return (
    <div className="container">
      <h1 className="heading">Student List</h1>
      <StudentList />
    </div>
  );
};

export default App;
