import { IProfile } from "./data";

const nombre: string = 'Jose Carlos';
const edad: number = 24;
const profesion: string = 'Desarrollador de Software';
const ubicacion: string = 'Tacna';
const hobbies: string[] = ['jugar', 'programar'];

const data: IProfile = {
  name: nombre,
  age: edad,
  profession: profesion,
  location: ubicacion,
  hobbies
}

const familiar1: IProfile = {
  name: 'Pedro',
  age: 20,
  profession: 'Estudiante',
  location: 'Su casa',
  hobbies: ['correr', 'jugar']
}

const familiar2: IProfile = {
  name: 'ALberto',
  age: 36,
  profession: 'Ingeniero',
  location: 'Algun Lugar',
  hobbies: ['tomar', 'beber']
}

const family: IProfile[] = [data, familiar1, familiar2]

console.log(family);

console.log("Operador TypeOf");
console.log(`family es del tipo: ${typeof family}`);
console.log(`data es del tipo: ${typeof data}`);
console.log(`familiar1 es del tipo: ${typeof familiar1}`);
console.log(`nombre es del tipo: ${typeof nombre}`);
console.log(`edad es del tipo: ${typeof edad}`);
console.log(`hobbies es del tipo: ${typeof hobbies}`);

console.log("\nOperador In");
const propiedades = ['name', 'nombre', 'age', 'profesion', 'peso', 'altura', 'hobby', 'hobbies']
for (const propiedad of propiedades) {
  const esta = propiedad in data ? 'está' : 'no está';
  console.log(`La propiedad "${propiedad}" ${esta} en el objeto data.`);
}

console.log("\nOperador Is");
const verificar = [
  ['data', data, 'object'],
  ['data', data, 'number'],
  ['edad', edad, 'number'],
  ['edad', edad, 'string'],
  ['nombre', nombre, 'number'],
  ['nombre', nombre, 'string'],
  ['familiar1', familiar1, 'boolean']
]
for (const [nombre, propiedad, tipo] of verificar) {
  const es = typeof propiedad === tipo ? 'es' : 'no es';
  console.log(`La propiedad "${nombre}" ${es} del tipo ${tipo}.`);
}

