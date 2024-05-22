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
