import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn"));
  const Navigate = useNavigate();

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"));
  });
  
  const handleClick = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
    Navigate("/login");
  };
  return loggedIn ? (
    <button onClick={handleClick}>LogOut</button>
  ) : (
    <Link to="/login">LogIn</Link>
  );
};

export default LogOutButton;
