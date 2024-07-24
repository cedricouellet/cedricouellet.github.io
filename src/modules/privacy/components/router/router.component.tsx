import { Route, Routes } from "react-router-dom";
import { Home } from "..";

export default function Router() {
  return (
    <Routes>
      <Route path="/privacy" Component={Home} />
    </Routes>
  );
}
