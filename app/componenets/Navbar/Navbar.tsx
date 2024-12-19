import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex gap-11 justify-center " >
      <Link to="/"><button className="btn bg-red-500">Home</button></Link>
      <Link to="/redux"><button className="btn bg-blue-500">Redux</button></Link>
      <button className="btn bg-green-500">demo</button>
    </div>
  );
};

export default Navbar;
