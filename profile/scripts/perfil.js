//* PARTE 01
console.warn('Parte 01');
const name = 'Jose Carlos';
const age = 24;
const profession = 'Desarrollador de Software';
const location1 = 'Tacna';
const hobbies = 'nose';

const profile = { name, age, profession, location: location1, hobbies }

console.log(profile);

const nameSelector = document.getElementById('name');
const ageSelector = document.getElementById('age');
const professionSelector = document.getElementById('profession');
const locationSelector = document.getElementById('location');
const hobbiesSelector = document.getElementById('hobbies');

const isOlder = profile.age >= 18;

nameSelector.textContent = profile.name;
ageSelector.textContent = profile.age;
professionSelector.textContent = isOlder ? profile.profession : 'No especifica';
locationSelector.textContent = profile.location;
hobbiesSelector.textContent = profile.hobbies;
