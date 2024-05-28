import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registratin = () => {
  const Navigate = useNavigate()
  const [input, setInput] = useState({
    User: "",
    Email: "",
    Password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.Email !== "" && input.Password !== "" && input.User !== "") {

    // Retrieve existing users from local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Push the new user data into the array
    existingUsers.push(input);
    // Store the updated array back into local storage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    setInput({
      User: "",
      Email: "",
      Password: "",
    });
    Navigate("/login");
  }else{
    alert("Please fill all the details")
  }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-1/5 border border-gray-300 rounded-lg p-10 pb-20 pt-8">
        <h1 className="text-red-700 font-bold mb-6 text-4xl ">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit}>
          <h1 className="text-black pl-2 pb-2">Username</h1>
          <input
            type="text"
            name="User"
            placeholder="Username"
            value={input.User}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            className="w-full px-4 py-2 border mb-6 text-black border-gray-300 rounded-md bg-white focus:outline-none focus:border-red-600 required"
          />
          <h1 className="text-black pl-2 pb-2">E-mail</h1>
          <input
            type="email"
            name="Email"
            placeholder="E-mail"
            value={input.Email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            className="w-full px-4 py-2 border mb-6 text-black border-gray-300 rounded-md bg-white focus:outline-none focus:border-red-700required"
          />
          <h1 className="text-black pl-2 pb-2">Password</h1>
          <input
            type="password"
            name="Password"
            placeholder="Password"
            value={input.Password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            className="w-full px-4 py-2 border mb-6 text-black border-gray-300 rounded-md bg-white focus:outline-none focus:border-red-700 required"
          />
          <div className="relative w-full">
            <button
              className=" w-20 py-2 bg-red-700 mb-6 text-white rounded-md hover:bg-red-600 absolute left-1/2 -translate-x-1/2 "
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registratin;
