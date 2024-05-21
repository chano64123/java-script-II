import { KEY_LS_USERS } from "./keysLocalStorage.js";

function validateEmail(email) {
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

const existUser = (email) => {
  const users = getUsers();
  return users.some(user => user.email === email);
}

const validateUser = (user, discriminateEmail = true) => {
  const { email, password } = user;
  const response = {
    success: false,
    message: "Todos los datos correctos."
  }

  if (!email) {
    response.message = "Ingrese un email.";
  } else if (!password) {
    response.message = "Ingrese una clave.";
  } else if (!validateEmail(email)) {
    response.message = "Ingrese un email válido.";
  } else if (password.length < 6) {
    response.message = "Ingrese una clave de al menos 6 caracteres.";
  } else if (existUser(email) && discriminateEmail) {
    response.message = "El email ya se encuentra registrado.";
  } else {
    response.success = true;
  }

  return response;
}

const registerUser = (user) => {
  const response = {
    success: true,
    message: 'Usuario registrado correctamente.'
  }

  const users = getUsers();
  users.push(user);
  setUsers(users);

  return response;
}

const loginUser = (user) => {
  const { email, password } = user;
  const response = {
    success: true,
    message: 'Inicio de sesion exitoso.'
  }

  const users = getUsers();
  user = users.find(user => user.email === email)

  if (!user || user.password !== password) {
    response.success = false;
    response.message = "Las credenciales no coinciden con ni una cuenta."
  }

  return response;
}

const getUsers = () => {
  let users = JSON.parse(localStorage.getItem(KEY_LS_USERS)) ?? [];
  return users;
}

const setUsers = (users) => {
  localStorage.setItem(KEY_LS_USERS, JSON.stringify(users));
}

export { registerUser, validateUser, loginUser }