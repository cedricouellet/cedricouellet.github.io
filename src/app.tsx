import { PrivacyContextProvider } from "./modules/privacy/contexts";
import Router from "./router";

export default function App() {
  return (
    <PrivacyContextProvider>
      <Router />
    </PrivacyContextProvider>
  );
}
