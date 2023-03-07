import { renderLoginForm, renderWelcomePage } from "../script.js";

export function setLoggedIn(userData) {
  let jsonData = JSON.stringify(userData);
  localStorage.setItem('user', jsonData);
};

export function checkLoginStatus() {
  let usr = JSON.parse(localStorage.getItem('user'));
  if (usr !== null) {
    renderWelcomePage(usr);
  }
  else {
    renderLoginForm();
  }
};

export function logoutUser() {
  localStorage.clear();
  renderLoginForm();
};
