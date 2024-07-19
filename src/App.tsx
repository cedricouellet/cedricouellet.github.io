import Navbar from "./modules/core/components/navbar";
import CoreRouter from "./modules/core/router";
import FacturioRouter from "./modules/facturio/router";

function App() {
  return (
    <>
      <Navbar />
      <CoreRouter />
      <FacturioRouter />
    </>
  );
}

export default App;
