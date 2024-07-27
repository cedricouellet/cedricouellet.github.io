import { Route, Routes } from "react-router-dom";
import HomePage from "../home-page";

export default function Router() {
  return (
    <Routes>
      <Route path="/facturio" Component={HomePage} />
    </Routes>
  );
}
