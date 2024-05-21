import { startSession, closeSession } from "./session.js";
import { getLayoutOptionsAsync } from "../../service/layoutService.js";

const layoutOptions = await getLayoutOptionsAsync();

const getSocialOptions = (isOnline, optionsSocial) => {
  let optionsNodeSocial = []
  const optionsIgnored = ['icon-start-session'];

  for (let option of optionsSocial) {
    if (option.requiredSession && !isOnline) {
      continue;
    }

    if (optionsIgnored.includes(option.id) && isOnline) {
      continue;
    }

    const listItem = document.createElement("li"); //nuevo

    const anchor = document.createElement("a");
    anchor.href = option.linkTo;

    if (option.callBack) {
      const callbackFunction = window[option.callBack];
      if (typeof callbackFunction === 'function') {
        anchor.onclick = callbackFunction;
      } else {
        console.error(`La función ${option.callBack} no está definida.`);
      }
    }

    const icon = document.createElement("i");
    icon.className = option.iconClass;

    anchor.appendChild(icon)
    listItem.appendChild(anchor); //nuevo
    optionsNodeSocial.push(listItem)
  }
  return optionsNodeSocial;
}

const getNavOptions = (optionsNav) => {
  let optionsNodeNav = [];
  for (let option of optionsNav) {
    const listItem = document.createElement("li"); //nuevo
    const anchor = document.createElement("a");

    anchor.textContent = option.title;
    anchor.href = option.linkTo;

    listItem.appendChild(anchor); //nuevo
    optionsNodeNav.push(listItem);
  }
  return optionsNodeNav;
}

const getFooterOptions = (optionsFooter) => {
  let optionsNodeFooter = [];
  for (let options of optionsFooter) {
    //!para el div
    const divCol = document.createElement("div");
    divCol.className = "col";

    //!para el ul
    const ul = document.createElement('ul');

    for (let option of options) {
      const li = document.createElement('li');
      //!para el li
      if (option.isPrincipal) {
        li.className = 'col-main-item';
      }

      //! para al ancla
      const anchor = document.createElement('a')
      anchor.href = option.linkTo;
      anchor.textContent = option.option;

      li.appendChild(anchor);
      ul.appendChild(li);
    }

    divCol.appendChild(ul);
    optionsNodeFooter.push(divCol);
  }
  return optionsNodeFooter;
}

const printSocialOptions = (isOnline, idSelector) => {
  const socialSelector = document.getElementById(idSelector);

  socialSelector.innerHTML = '';
  const optionsNodeSocial = getSocialOptions(isOnline, layoutOptions.social);
  for (const option of optionsNodeSocial) {
    socialSelector.appendChild(option);
  }
}

const printNavOptions = (idSelector) => {
  const navSelector = document.getElementById(idSelector);
  const optionsNodeNav = getNavOptions(layoutOptions.nav);
  for (const option of optionsNodeNav) {
    navSelector.appendChild(option);
  }
}

const printFooterOptions = (idSelector) => {
  const footerSelector = document.getElementById(idSelector);
  const optionsNodeFooter = getFooterOptions(layoutOptions.footer.options);
  for (const option of optionsNodeFooter) {
    footerSelector.appendChild(option);
  }
}

try {
  window.startSession = startSession;
  window.closeSession = closeSession;
} catch (error) {
  console.warn(error);
}

export { printSocialOptions, printNavOptions, printFooterOptions }
