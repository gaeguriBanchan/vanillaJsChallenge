const loginForm = document.querySelector('.login-form');
const loginInput = document.querySelector('.login-form input');
const loginBtn = document.querySelector('.login-form button');
const greeting = document.querySelector('#greeting');

function handleLogin(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem('username', username);
  // if (username.trim() === '') {
  //   alert('Please write your name');
  // }
  // console.log(username);
  loginForm.classList.add('hidden');
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello! ${username}!`;
  greeting.classList.remove('hidden');
}

const savedUsername = localStorage.getItem('username');

if (savedUsername === null) {
  loginForm.classList.remove('hidden');
  loginForm.addEventListener('submit', handleLogin);
} else {
  paintGreeting(savedUsername);
}
