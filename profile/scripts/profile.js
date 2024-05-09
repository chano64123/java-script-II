//* Parte 01
console.warn("PARTE 01")
const nombre = 'Jose Carlos';
const edad = 24;
const profesion = 'Desarrollador de Software';
const ubicacion = 'Tacna';
const hobby = 'no se';

const template = `Hola mi nombre es ${nombre}, tengo ${edad} años, actualmente me desempeño como ${profesion} en la ciudad de ${ubicacion} y mi hobby es ${hobby}`;
console.log(template);

//* Parte 02
console.warn("PARTE 02")
let isOnline = false;
let result = prompt('¿El usuario esta conectado?');
result = result.toUpperCase();

isOnline = result == 'SI' && !isOnline;

if (isOnline) {
  console.log(`El usuario esta conectado \n ${template}`);
} else {
  console.log(`El usuario no esta conectado`);
}