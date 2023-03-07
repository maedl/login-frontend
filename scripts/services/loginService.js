import { renderWelcomePage, renderWrongCreds } from "../script.js";
import { setLoggedIn } from "./storage.js";

export function loginUser(user, password) {

  let userCredentials = {
    username: user,
    password: password
  }

  fetch('http://localhost:3000/users/login', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(userCredentials)
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.loggedIn) {
      setLoggedIn(data);
      renderWelcomePage(data);
    }
    else {
      renderWrongCreds();
    }
  })
  .catch((err) => {
    console.error(err);
  });
};
