import Balance from "./components/Balance";
import FloatingWidget from "./components/FloatingWidget";
import Navigation from "./components/Navigation";
import Transactions from "./components/Transactions";

function App() {
  return (
    <section>
      <Navigation />
      <FloatingWidget />
      <section className="relative mx-auto max-w-7xl mt-12 ">
        <Balance />
        <Transactions />
      </section>
    </section>
  );
}

export default App;
