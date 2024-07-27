import { Route, Routes } from "react-router-dom";
import HomePage from "../home-page";
import PrivacyPage from "../privacy-page";

export default function Router() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/privacy" Component={PrivacyPage} />
    </Routes>
  );
}
