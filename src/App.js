import Counter from "./features/Counter/Counter";
import DoubleCalc from "./features/DoubleCalc/DoubleCalc";
import Faq from "./features/Faq/Faq";
import Users from "./features/Users/Users";

function App() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4">
      <Counter />
      <Faq />
      <DoubleCalc />
      <Users /> 
    </div>
  );
}

export default App;
