import { BrowserRouter } from "react-router-dom";
import CoreRouter from "./modules/core/router";
import FacturioRouter from "./modules/facturio/router";
import Navbar from "./modules/core/components/navbar";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <CoreRouter />
      <FacturioRouter />
    </BrowserRouter>
  );
}