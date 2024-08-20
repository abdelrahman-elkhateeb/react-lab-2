import { useState } from "react";
import Button from "../ui/Button";
import plus from "../../imgs/plus.svg";
import minus from "../../imgs/minus.svg";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 shadow-xl p-5 my-4 rounded-xl w-max">
      <p className="text-9xl ">{count}</p>
      <div className="flex gap-2">
        <Button handleDecrement={handleDecrement}>
          <img src={minus} alt="" />
        </Button>
        <Button handleIncrement={handleIncrement}>
          <img src={plus} alt="" />
        </Button>
      </div>
      <Button handleReset={handleReset}>reset</Button>
    </div>
  );
}

export default Counter;
