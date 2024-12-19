import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex gap-11 justify-center " >
      <Link to="/"><button className="btn bg-red-500">Home</button></Link>
      <Link to="/redux"><button className="btn bg-blue-500">Redux</button></Link>
      <Link to="/demo"><button className="btn bg-green-500">demo</button></Link>
    </div>
  );
};

export default Navbar;
