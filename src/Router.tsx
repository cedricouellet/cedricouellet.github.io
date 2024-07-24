import { BrowserRouter } from "react-router-dom";
import { Router as CoreRouter } from "./modules/core/components";
import { Router as FacturioRouter } from "./modules/facturio/components";
import {
  Router as PrivacyRouter,
  PrivacyConsent,
} from "./modules/privacy/components";
import { Navbar } from "./modules/core/components";
import { PrivacyContext } from "./modules/privacy/contexts";
import { useContext, useEffect, useState } from "react";

export default function AppRouter() {
  const { privacyPolicyAccepted } = useContext(PrivacyContext);

  const [privacyConsentComponent, setPrivacyConsentComponent] = useState<
    React.JSX.Element | undefined
  >();

  useEffect(() => {
    setPrivacyConsentComponent(
      privacyPolicyAccepted ? undefined : PrivacyConsent
    );
  }, [privacyPolicyAccepted]);

  return (
    <BrowserRouter>
      <Navbar />
      <CoreRouter />
      <FacturioRouter />
      <PrivacyRouter />
      {privacyConsentComponent}
    </BrowserRouter>
  );
}
