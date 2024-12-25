import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
    const {count} = useSelector((state) => state.counter);
    console.log(count);
  return (
    <div className="flex gap-5 flex-col justify-center text-center mx-auto">
      <button className="btn  bg-green-500 ">Increment</button>
      <div >
        <h1>{countgit }</h1>
      </div>
      <button className="btn bg-red-500">Decrement</button>
      <div>
        <h1>0</h1>
      </div>
    </div>
  );
};

export default Counter;
