import Counter from "./features/Counter/Counter";
import DoubleCalc from "./features/DoubleCalc/DoubleCalc";
import Faq from "./features/Faq/Faq";
import Guessing from "./features/Guessing/Guessing";
import Shop from "./features/Shop/Shop";
import Users from "./features/Users/Users";

function App() {
  return (
    <div className="container mx-auto px-4">
      <Counter />
      <Faq />
      <DoubleCalc />
      <Shop />
      <Guessing />
    </div>
  );
}

export default App;
