import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const Navigate = useNavigate();
  const [input, setInput] = useState({
    Email: "",
    Password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Retrieve array of users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // Find the user with the entered email
    const foundUser = users.find((user) => user.Email === input.Email);
    if (input.Email !== "" && input.Password !== "") {

      if (foundUser && foundUser.Password === input.Password) {
        setInput({
          Email: "",
          Password: "",
        });
        localStorage.setItem("loggedIn", true)
        Navigate("/");
      } else {
        alert("Email or Password incorrect");
      }

    } else {
      alert("Please enter your Email and Password");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-1/5 border border-gray-300 rounded-lg p-10 pt-8 ">
        <h1 className="text-red-700 font-bold text-4xl mb-7">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <h1 className="text-black pl-2  pb-2">E-mail</h1>
          <input
            type="text"
            name="Email"
            placeholder="E-mail"
            value={input.Email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            className="w-full px-4 py-2 border mb-7 text-black border-gray-300 rounded-md bg-white focus:outline-none focus:border-red-700 required"
          />
          <h1 className="text-black pl-2  pb-2">Password</h1>
          <input
            type="password"
            name="Password"
            placeholder="Password"
            value={input.Password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            className="w-full px-4 py-2 border mb-7 text-black border-gray-300 rounded-md bg-white focus:outline-none focus:border-red-700 required"
          />
          <div className="w-full text-center">
            <button
              className=" w-20 py-2 bg-red-700 text-white rounded-md hover:bg-red-600  mb-7"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <h1 className="text-black text-center">
            Don't have an account?{" "}
            {
              <Link to="/registration" className="text-red-700">
                Sign Up
              </Link>
            }
          </h1>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
