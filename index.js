document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Perform login logic here
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Check if email and password are not empty
  if ((email === "ebikomicheal018@gmail.com" && password === "balentino1*")) {
    alert("Login successful!");
    // Redirect to home.html
    window.location.href = "top.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});

document.querySelector(".google-button").addEventListener("click", function(event) {
  // Redirect to the Google sign-in page
  window.location.href = "https://accounts.google.com"; // Replace with the actual Google sign-in URL
});
