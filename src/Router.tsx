import { BrowserRouter } from "react-router-dom";
import { Router as CoreRouter } from "./modules/core/components";
import { Router as FacturioRouter } from "./modules/facturio/components";
import { PrivacyConsent } from "./modules/core/components";
import { Navbar } from "./modules/core/components";
import { PrivacyContext } from "./modules/core/contexts";
import { useContext } from "react";

export default function AppRouter() {
  const { privacyPolicyAccepted } = useContext(PrivacyContext);

  return (
    <BrowserRouter>
      <Navbar />
      <CoreRouter />
      <FacturioRouter />
      {privacyPolicyAccepted ? <></> : <PrivacyConsent />}
    </BrowserRouter>
  );
}
