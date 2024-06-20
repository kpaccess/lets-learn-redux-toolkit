import { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return <div>counter</div>;
};
export default Counter;
