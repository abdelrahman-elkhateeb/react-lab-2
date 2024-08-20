import Counter from "./features/Counter/Counter";
import DoubleCalc from "./features/DoubleCalc/DoubleCalc";
import Faq from "./features/Faq/Faq";

function App() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4">
      <Counter />
      <Faq />
      <DoubleCalc />
    </div>
  );
}

export default App;
