import Counter from "./features/Counter/Counter";
import DoubleCalc from "./features/DoubleCalc/DoubleCalc";
import Faq from "./features/Faq/Faq";
import Shop from "./features/Shop/Shop";
import Users from "./features/Users/Users";

function App() {
  return (
    <div className="container mx-auto px-4">
      <Counter />
      <Faq />
      <DoubleCalc />
      <Shop />
    </div>
  );
}

export default App;
