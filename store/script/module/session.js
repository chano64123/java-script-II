import { KEY_LS_IS_ONLINE } from "./keysLocalStorage.js";
//import { printSocialOptions } from "./utilsLayout.js";

const startSession = () => {
  window.location = 'login.html'
  //localStorage.setItem(KEY_LS_IS_ONLINE, 'true');
  //printSocialOptions(true, 'social');
}

const closeSession = () => {
  localStorage.setItem(KEY_LS_IS_ONLINE, 'false');
  //printSocialOptions(false, 'social');
  window.location = 'login.html'
}

const loginSuccess = () => {
  localStorage.setItem(KEY_LS_IS_ONLINE, 'true')
  window.location.href = 'index.html';
}

const hasSession = () => {
  const hasSession = localStorage.getItem(KEY_LS_IS_ONLINE);
  return hasSession === 'true';
}

export { startSession, closeSession, loginSuccess, hasSession }
