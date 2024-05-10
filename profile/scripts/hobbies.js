//* PARTE 01
console.warn('Parte 01');
const enPareja = ['comer', 'pasear', 'ver pelicula', 'videojuegos', 'jugar futbol', 'jugar tenis de mesa'];
const conAmigos = ['comer', 'pasear', 'ver pelicula', 'videojuegos', 'jugar futbol', 'jugar tenis de mesa'];
const conFamilia = ['comer', 'pasear', 'ver pelicula', 'videojuegos', 'jugar futbol', 'jugar tenis de mesa'];

const hobbies = { enPareja, conAmigos, conFamilia };

const { conFamilia: [, , hobbieEnPareja], conAmigos: [, , , hobbieConFamilia] } = hobbies;

console.log(hobbieEnPareja);
console.log(hobbieConFamilia);

const message = `Uno de mis hobbies favoritos para hacer en pareja es <strong>${hobbieEnPareja}</strong>, y uno de los mejores para hacer en familia es <strong>${hobbieConFamilia}</strong>.`

const printMessage = (message) => {
  const messageSelector = document.getElementById('hobbies-seleccionados');
  messageSelector.innerHTML = message;
}

printMessage(message)

//* PARTE 02
console.warn('Parte 02');
const todos = { hobbies: [...enPareja, ...conAmigos, ...conFamilia] };
console.log(todos);

//* PARTE 03
console.warn('Parte 03');
const algunos = [...enPareja.slice(1, 3), ...conAmigos.slice(0, 1), ...conFamilia.slice(0, 1)];
console.log(algunos);