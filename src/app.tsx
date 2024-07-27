import { PrivacyContextProvider } from "./modules/core/contexts";
import Router from "./router";

export default function App() {
  return (
    <PrivacyContextProvider>
      <Router />
    </PrivacyContextProvider>
  );
}
