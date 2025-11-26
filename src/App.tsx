import Balance from "./components/Balance";
import Navigation from "./components/Navigation";
import Transactions from "./components/Transactions";

function App() {
  return (
    <>
      <Navigation />
      <section className="relative mx-auto max-w-7xl mt-12">
        <Balance />
        <Transactions />
      </section>
    </>
  );
}

export default App;
