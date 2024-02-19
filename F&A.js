window.addEventListener('load', function() {
  var hamburger = document.querySelector('.hamburger');
  var menu = document.querySelector('.menu');

  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    menu.classList.toggle('show');
  });
});

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

function toggleDropdown() {
  var dropdownSection = document.getElementById("dropdown-section");
  dropdownSection.classList.toggle("show");
}

document.addEventListener('click', function(event) {
  var dropdownMain = document.querySelector('.dropdown-main');
  var dropdownArrow = document.querySelector('.dropdown-arrow');
  
  if (!dropdownMain.contains(event.target) && !dropdownArrow.contains(event.target)) {
    var dropdownSection = document.getElementById("dropdown-section");
    dropdownSection.classList.remove("show");
  }
});

document.getElementById("signOutButton").addEventListener("click", function() {
  var confirmed = confirm("Do you want to sign out?");
  if (confirmed) {
    window.location.href = "index.html";
  }
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

  
  
  
  function toggleFAQ(id) {
    const faqContent = document.getElementById(`faq${id}`);
    const faqItem = faqContent.parentElement;
  
    faqItem.classList.toggle("active");
  }

