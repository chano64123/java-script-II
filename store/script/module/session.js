import { KEY_LS_IS_ONLINE } from "./keysLocalStorage.js";
import { printSocialOptions } from "./utilsLayout.js";

const startSession = () => {
  localStorage.setItem(KEY_LS_IS_ONLINE, 'true');
  printSocialOptions(true, 'social');
}

const closeSession = () => {
  localStorage.setItem(KEY_LS_IS_ONLINE, 'false');
  printSocialOptions(false, 'social');
}

export { startSession, closeSession }
