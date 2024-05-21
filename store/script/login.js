import { loginSuccess } from "./module/session.js";
import { ICONS_SA, showAlert } from "./module/utilsSweetAlert.js";
import { loginUser, validateUser } from "./module/utilsUser.js";

const tooglePasswordSelector = document.getElementById('toggle-password')
const registerSelector = document.getElementById('register-button')
const loginSelector = document.getElementById('login-button')

tooglePasswordSelector.addEventListener('click', function () {
  var passwordInput = document.getElementById('password');
  var icon = this.querySelector('i');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  }
});

registerSelector.addEventListener('click', function () {
  window.location.href = 'register.html';
});

loginSelector.addEventListener('click', function () {
  const emailSelector = document.getElementById('email');
  const passwordSelector = document.getElementById('password');

  const user = {
    email: emailSelector.value,
    password: passwordSelector.value
  }

  const validation = validateUser(user, false);

  if (!validation.success) {
    showToast(validation.message, ICONS_SA.WARNING);
    return;
  }

  const login = loginUser(user);
  if (login.success) {
    emailSelector.value = '';
    passwordSelector.value = '';
  }
  const callback = login.success ? loginSuccess : null;
  const icon = login.success ? ICONS_SA.SUCCESS : ICONS_SA.ERROR;
  showAlert("Inicio de Sesión!!!", login.message, icon, callback);
});
