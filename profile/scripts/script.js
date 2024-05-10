//* Parte 03
console.warn("PARTE 03");
const misDatosFisicos = {
  nombre: 'Homero Simpson',
  edad: 30,
  direccion: {
    calle: 'Av. Siempre Viva',
    numero: 742,
    ciudad: 'Sprinfield'
  },
  altura: 175,
  peso: 80,
  hobby: 'ciclismo'
};

const perfilSelector = document.getElementById('perfil');
const contenidoPerfil = `
  <h1>${misDatosFisicos.nombre}</h1>
  <p>Edad: ${misDatosFisicos.edad}</p>
  <p>Dirección: ${misDatosFisicos.direccion.calle}, ${misDatosFisicos.direccion.numero}, ${misDatosFisicos.direccion.ciudad}</p>
  <p>Altura: ${misDatosFisicos.altura} cm</p>
  <p>Peso: ${misDatosFisicos.peso} kg</p>
  <p>Hobby: ${misDatosFisicos.hobby}</p>
`;

perfilSelector.innerHTML = contenidoPerfil;

//* Parte 04
console.warn("PARTE 04")
const printTemplate = (id = 'template3') => {
  const preSelector = document.getElementById(id);
  preSelector.innerHTML = contenidoPerfil;
}

printTemplate()