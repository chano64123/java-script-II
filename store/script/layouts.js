import { KEY_LS_IS_ONLINE } from "./module/keysLocalStorage.js";
import { printSocialOptions, printNavOptions, printFooterOptions } from "./module/utilsLayout.js";

const isOnline = localStorage.getItem(KEY_LS_IS_ONLINE) === 'true';

printSocialOptions(isOnline, 'social');
printNavOptions('nav');
printFooterOptions('footer');
