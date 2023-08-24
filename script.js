document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Add login logic here
      console.log("Login button clicked");
  });

  signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Add signup logic here
      console.log("Signup button clicked");
  });
});
