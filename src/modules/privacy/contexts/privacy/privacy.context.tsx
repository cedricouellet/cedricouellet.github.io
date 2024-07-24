import { createContext, useState } from "react";
import PrivacyService from "../../services/privacy/privacy.service";

interface IProps {
  children: any;
}

interface IPrivacy {
  privacyPolicyAccepted: boolean;
  acceptPrivacyPolicy(): void;
}

export const PrivacyContext = createContext({} as IPrivacy);

export default function PrivacyContextProvider(props: IProps) {
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(PrivacyService.getPrivacyPolicyAccepted());

  function acceptPrivacyPolicy() {
    PrivacyService.acceptPrivacyPolicy();
    setPrivacyPolicyAccepted(true);
  }

  return (
    <PrivacyContext.Provider
      value={{ privacyPolicyAccepted, acceptPrivacyPolicy }}
    >
      {props.children}
    </PrivacyContext.Provider>
  );
}
