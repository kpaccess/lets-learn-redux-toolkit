import { increment, decrement, incrementByValue } from "./counter-slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementByValue(3))}>
          Increment by 3
        </button>
      </div>
      <div>Count is {count}</div>
      <div>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  );
};
export default Counter;
