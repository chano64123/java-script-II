import { hasSession } from "./module/session.js";
import { printSocialOptions, printNavOptions, printFooterOptions } from "./module/utilsLayout.js";

printSocialOptions(hasSession(), 'social');
printNavOptions('nav');
printFooterOptions('footer');
