import Balance from "./components/Balance";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <section className="relative mx-auto max-w-7xl mt-12">
        <Balance />
      </section>
    </>
  );
}

export default App;
