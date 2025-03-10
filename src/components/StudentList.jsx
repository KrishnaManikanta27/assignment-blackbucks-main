import React from "react";

const students = [
  { name: "Ram", age: 24, course: "Computer Science" },
  { name: "Sita", age: 22, course: "Mathematics" },
  { name: "Lakshman", age: 21, course: "Physics" },
];

const StudentList = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
