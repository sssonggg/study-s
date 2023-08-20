const usernameInput = document.getElementById("usernameInput");
const loginButton = document.getElementById("loginButton");
const greeting = document.getElementById("greeting");

loginButton.addEventListener("click", () => {
  const username = usernameInput.value;
  if (username) {
    localStorage.setItem("username", username);
    showGreeting(username);
  }
});

function showGreeting(username) {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    greeting.innerText = `Hello, ${savedUsername}!`;
    greeting.style.display = "block";
  }
}

showGreeting();