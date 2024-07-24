import { trueString } from "../../../core/utils/utils";

const localStorageKey = "privacy_policy_accepted_v1.0.0";

export function acceptPrivacyPolicy() {
  localStorage.setItem(localStorageKey, true.toString());
}

export function getPrivacyPolicyAccepted() {
  const entry = localStorage.getItem(localStorageKey);
  return entry === trueString;
}

const PrivacyService = {
  acceptPrivacyPolicy,
  getPrivacyPolicyAccepted,
};

export default PrivacyService;
