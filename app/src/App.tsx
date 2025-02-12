// import { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [location, setLocation] = useState<any>(null);
//   const getLocation = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/todo/");
//       console.table(res.data.todo);
//       setLocation(res.data.todo);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getLocation();
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       {location &&
//         location.map((item: any) => (
//           <div
//             key={item.id}
//             className="flex flex-col items-center justify-center space-y-5"
//           >
//             <ul className="simpleList">
//               <li className="flex flex-row items-center justify-center">
//                 Latitude: {item.latitude}
//               </li>
//               <li className="flex flex-row items-center justify-center">
//                 Longitude: {item.longitude}
//               </li>
//               <li className="flex flex-row items-center justify-center">
//                 Speed: {item.speed}
//               </li>
//               <li className="flex flex-row items-center justify-center">
//                 Created At: {item.createdAt}
//               </li>
//               <li className="flex flex-row items-center justify-center">
//                 Updated At: {item.updatedAt}
//               </li>
//             </ul>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState<any[]>([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/todo");
      setTodos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div
            key={todo._id}
            className="flex flex-col items-baseline justify-center space-y-5 bg-gray-200 p-4 rounded-md shadow-md w-1/2 m-4"
          >
            <label className="flex flex-row items-center justify-center bg-gray-300 p-2 rounded-md w-full">
              <strong>Title:</strong> {todo.title}
            </label>
            <label className="flex flex-row items-center justify-center bg-gray-300 p-2 rounded-md w-full">
              <strong>User Name:</strong> {todo.userName}
            </label>
            <label className="flex flex-row items-center justify-center bg-gray-300 p-2 rounded-md w-full">
              <strong>Role:</strong> {todo.role}
            </label>
            <label className="flex flex-row items-center justify-center bg-gray-300 p-2 rounded-md w-full">
              <strong>Status:</strong> {todo.status}
            </label>
            <label className="flex flex-row items-center justify-center bg-gray-300 p-2 rounded-md w-full">
              <strong>Completed:</strong> {todo.completed ? "Yes" : "No"}
            </label>
          </div>
        ))
      ) : (
        <p>No todos available</p>
      )}
    </div>
  );
};

export default App;
