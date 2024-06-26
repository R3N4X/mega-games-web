const errorMsg = document.getElementById("error_display");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");

document
  .getElementById("create_account")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const res = await fetch("https://store-megagames.onrender.com/api/users", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        username: username.value,
        password: password.value,
      }),
    });
    if (!res.ok) {
      errorMsg.classList.toggle("hidden", false);
      username.classList.add("error");
      email.classList.add("error");
      password.classList.add("error");
    }

    const resJson = await res.json();
    if (resJson.redirect) {
      window.location.href = resJson.redirect;
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  if (isAuthenticated) {
    window.location.href = "/";
    console.error("Error al iniciar sesión");
  }
});
