import { increment, decrement, incrementByValue } from "./counter-slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useFetchBreedsQuery } from "../dogs/dogs-api-slice";
import { useState } from "react";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [numDogs, setNumDogs] = useState(10);

  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

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
        <p>Dogs to fetch:</p>
        <select
          name=""
          id=""
          value={numDogs}
          onChange={(e) => setNumDogs(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      {isFetching && <div>Loading...</div>}

      {
        <div>
          <p>Number of dogs fetched : [data.length]</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} height={250} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
      <div>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  );
};
export default Counter;
