const eye = document.getElementById('eyeball');

eye.addEventListener('click', e => {
  e.preventDefault();
  document.body.classList.toggle('show-password');
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password'
  passwordInput.focus();
});