const email = document.getElementById('email-login');
const password = document.getElementById('password-login');
document.getElementById('form-login').addEventListener('submit', (e) => {
  e.preventDefault();
  auth_user.push({
    email: email.value,
    password: password.value,
  });

  window.location.href = '../game/index.html';
  setTimeout(() => {
    name.value = '';
    email.value = '';
    password.value = '';
  }, 0);
});
const emailSign = document.getElementById('email');
const passwordSign = document.getElementById('password');
const nama = document.getElementById('nama');

document.getElementById('form-signUp').addEventListener('submit', (e) => {
  e.preventDefault();
  auth_user.push({
    nama: nama.value,
    email: emailSign.value,
    password: passwordSign.value,
  });

  window.location.href = '../game/index.html';
  setTimeout(() => {
    nama.value = '';
    emailSign.value = '';
    passwordSign.value = '';
  }, 0);
});
