const errorMsg = document.getElementById("error_display");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");

document
  .getElementById("create_account")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/api/register", {
      method: "POST",
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