import { registerUser, validateUser } from "./module/utilsUser.js";
import { ICONS_SA, showAlert, showToast } from "./module/utilsSweetAlert.js";
import { loginSuccess } from "./module/session.js";

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
  const emailSelector = document.getElementById('email');
  const passwordSelector = document.getElementById('password');

  const user = {
    email: emailSelector.value,
    password: passwordSelector.value
  }

  const validation = validateUser(user);

  if (!validation.success) {
    showToast(validation.message, ICONS_SA.WARNING);
    return;
  }

  const register = registerUser(user);
  if (register.success) {
    emailSelector.value = '';
    passwordSelector.value = '';
  }
  const callback = register.success ? loginSuccess : null;
  const icon = register.success ? ICONS_SA.SUCCESS : ICONS_SA.ERROR;
  showAlert("Registro!!!", register.message, icon, callback);
});

loginSelector.addEventListener('click', function () {
  window.location.href = 'login.html';
});

