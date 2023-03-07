export const formHtml = `  
<form>
  <label for="username">Username: </label>
  <input type="text" id="username-input" name="username">
  <label for="password">Password: </label>
  <input type="password" id="password-input" name="password">

  <button type="button" id="login-button">Login</button>
</form>
`;

export const wrongHtml = `
<div>
  <h2>Wrong username or password</h2>
  <button type="button">Back to Login</button>
</div>
`;
