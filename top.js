window.addEventListener('load', function() {
  var hamburger = document.querySelector('.hamburger');
  var menu = document.querySelector('.menu');

  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    menu.classList.toggle('show');
  });
});

// Get references to HTML elements for slider
const imageUpload = document.getElementById('image-upload');
const sliderImage = document.getElementById('slider-image');
const sliderText = document.getElementById('slider-text');

// Event listener for file upload
imageUpload.addEventListener('change', function(event) {
const file = event.target.files[0];
const reader = new FileReader();

reader.onload = function() {
  sliderImage.src = reader.result;
}

reader.readAsDataURL(file);
});

// Get references to HTML elements for slider text customization
const textInput = document.getElementById('text-input');
const fontSelect = document.getElementById('font-select');
const weightSelect = document.getElementById('weight-select');
const sizeInput = document.getElementById('size-input');
const colorInput = document.getElementById('color-input');
const updateButton = document.getElementById('update-button');

// Event listener for update button
updateButton.addEventListener('click', function() {
const newText = textInput.value;
const selectedFont = fontSelect.value;
const selectedWeight = weightSelect.value;
const selectedSize = sizeInput.value;
const selectedColor = colorInput.value;

sliderText.textContent = newText;
sliderText.style.fontFamily = selectedFont;
sliderText.style.fontWeight = selectedWeight;
sliderText.style.fontSize = selectedSize + 'px';
sliderText.style.color = selectedColor;
});

function search() {
var searchInput = document.getElementById("search").value;
// Add your search functionality here
alert("Search query: " + searchInput);
}

document.getElementById("bell-icon").addEventListener("click", function() {
var bellSound = document.getElementById("bell-sound");
bellSound.play();
});

document.getElementById("brightness-icon").addEventListener("click", function() {
document.body.classList.toggle("brightness");
});

document.getElementById("signOutButton").addEventListener("click", function() {
  var confirmed = confirm("Do you want to sign out?");
  if (confirmed) {
    window.location.href = "index.html";
  }
});



function toggleFAQ(id) {
const faqContent = document.getElementById(`faq${id}`);
const faqItem = faqContent.parentElement;

faqItem.classList.toggle("active");
}

function toggleDropdown() {
  const dropdown = document.querySelector(".dropdown-item");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdown.classList.toggle("open");
  
  if (dropdown.classList.contains("open")) {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
}

