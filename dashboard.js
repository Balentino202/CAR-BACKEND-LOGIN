// Signup form
document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Perform form validation and submit logic here
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  // Display alert with registration details
  alert('Registration Successful!\n\nName: ' + firstName + ' ' + lastName + '\nEmail: ' + email);

  // Perform further processing or submit the form
  
  // Redirect to the login page
  window.location.href = 'login.html'; // Replace with the actual login page URL
});

// Facebook login button
document.getElementById('facebookBtn').addEventListener('click', function(event) {
  // Redirect to the Facebook login page
  window.location.href = 'https://www.facebook.com'; // Replace with the actual Facebook login URL
});

// Google login button
document.getElementById('googleBtn').addEventListener('click', function(event) {
  // Redirect to the Google login page
  window.location.href = 'https://accounts.google.com'; // Replace with the actual Google login URL
});