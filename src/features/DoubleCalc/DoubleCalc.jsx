import { useEffect, useState } from "react";

function DoubleCalc() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  useEffect(() => {
    setCalculation(count * 2);
  }, [count]);
  return (
    <div className="flex flex-col items-center gap-5">
      <h1>Count: {count}</h1>
      <h2>Calculation (count * 2): {calculation}</h2>
      <button
        className="rounded-xl bg-green-500 p-2 text-white"
        onClick={() => setCount(count + 1)}
      >
        Increase Count
      </button>
    </div>
  );
}

export default DoubleCalc;
