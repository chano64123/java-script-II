import { startSession, closeSession } from "./session.js";

const optionsSocial = [
  { id: "icon-facebook", iconClass: "fa-brands fa-facebook", requiredSession: false, linkTo: "#" },
  { id: "icon-intagram", iconClass: "fa-brands fa-instagram", requiredSession: false, linkTo: "#" },
  { id: "icon-start-session", iconClass: "fa-solid fa-circle-user", requiredSession: false, linkTo: "#", callBack: startSession },
  { id: "icon-cart-shopping", iconClass: "fa-solid fa-cart-shopping", requiredSession: true, linkTo: "cart.html" },
  { id: "icon-favorites", iconClass: "fa-solid fa-star", requiredSession: true, linkTo: "favorites.html" },
  { id: "icon-user-check", iconClass: "fa-solid fa-user-check", requiredSession: true, linkTo: "#", callBack: closeSession },
];

const optionsNav = [
  { title: "Ofertas", linkTo: "#" },
  { title: "Como comprar", linkTo: "#" },
  { title: "Costos y tarifas", linkTo: "#" },
  { title: "Mis productos", linkTo: "#" },
  { title: "Garantia", linkTo: "#" },
];

const optionsFooter = [
  [
    { option: "Ofertas de la semana", isPrincipal: true, linkTo: "#" },
    { option: "Laptop", isPrincipal: false, linkTo: "#" },
    { option: "Audio", isPrincipal: false, linkTo: "#" },
    { option: "Auriculares", isPrincipal: false, linkTo: "#" },
  ],
  [
    { option: "Cómo comprar", isPrincipal: true, linkTo: "#" },
    { option: "Formas de pago", isPrincipal: false, linkTo: "#" },
    { option: "Envios", isPrincipal: false, linkTo: "#" },
    { option: "Devoluciones", isPrincipal: false, linkTo: "#" },
  ],
  [
    { option: "Costos y tarifas", isPrincipal: true, linkTo: "#" },
    { option: "Impuestos", isPrincipal: false, linkTo: "#" },
    { option: "Facturación", isPrincipal: false, linkTo: "#" },
  ],
  [
    { option: "Mis pedidos", isPrincipal: true, linkTo: "#" },
    { option: "Pedir nuevamente", isPrincipal: false, linkTo: "#" },
    { option: "Lista de deseos", isPrincipal: false, linkTo: "#" },
  ],
  [
    { option: "Garantía de Entrega", isPrincipal: true, linkTo: "#" },
  ],
];

export { optionsSocial, optionsNav, optionsFooter }
