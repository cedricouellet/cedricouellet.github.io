import { createContext, useState } from "react";
import { PrivacyService } from "../../services";

interface IPrivacyContextProviderProps {
  children: any;
}

interface IPrivacyViewModel {
  privacyPolicyAccepted: boolean;
  acceptPrivacyPolicy(): void;
}

export const PrivacyContext = createContext({} as IPrivacyViewModel);

export default function PrivacyContextProvider(
  props: IPrivacyContextProviderProps
) {
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(
    PrivacyService.getPrivacyPolicyAccepted()
  );

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
