import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../../Redux/Features/Counter/counterSlice";

const Counter = () => {
    const {count} = useSelector((state) => state.counter);
    const dispatch = useDispatch();
  return (
    <div className="flex gap-5 flex-col justify-center text-center mx-auto">
      <button onClick={() => dispatch(increment())} className="btn  bg-orange-500 ">Increment</button>
      <button onClick={() => dispatch(incrementByValue(5))} className="btn  bg-green-500 ">Increment  by 5</button>
      <div >
        <h1>{count}</h1>
      </div>
      <button onClick={() => dispatch(decrement())} className="btn bg-red-500">Decrement</button>
      <div>
      <h1>{count}</h1>
      </div>
    </div>
  );
};

export default Counter;
