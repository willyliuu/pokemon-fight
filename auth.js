function authValidation() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  document.getElementById('form-signUp').addEventListener('submit', (e) => {
    e.preventDefault();
    auth_user.push({
      name: name.value,
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
}

authValidation();
