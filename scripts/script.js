import { formHtml, wrongHtml } from "./html.js";
import { loginUser } from "./services/loginService.js";
import { checkLoginStatus, logoutUser } from "./services/storage.js";

const main = document.querySelector('main');

function init() {
  checkLoginStatus();
}

function handleLoginClick() {
  const username = (document.querySelector('#username-input').value);
  const password = (document.querySelector('#password-input').value);
  loginUser(username, password);
}

/**************************
 * RENDER
 */

export function renderLoginForm() {
  main.innerHTML = '';
  main.innerHTML = formHtml;
  const loginBtn = document.querySelector('button');
  loginBtn.addEventListener('click', handleLoginClick)
}

export function renderWelcomePage(user) {
  main.innerHTML = '';
  main.innerHTML = `
  <div>
  <h2>Welcome ${user.user}, your ID is ${user.id}</h2>
  <br>
  <button type="button">Logout</button>
  </div>
  `
  document.querySelector('button').addEventListener('click', logoutUser);
}

export function renderWrongCreds() {
  main.innerHTML = '';
  main.innerHTML = wrongHtml;
  let btn = document.querySelector('button');
  btn.addEventListener('click', renderLoginForm);
}

init();