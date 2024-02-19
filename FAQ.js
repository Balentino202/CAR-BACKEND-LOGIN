window.addEventListener('load', function() {
    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('.menu');
  
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      menu.classList.toggle('show');
    });
  });

  // JavaScript code for handling the chat functionality
document.addEventListener("DOMContentLoaded", function() {
  var messagesContainer = document.getElementById("chat-messages");
  var inputBox = document.getElementById("chat-input");
  var sendButton = document.getElementById("send-button");

  // Retrieve chat history from local storage (if available)
  var chatHistory = localStorage.getItem("chatHistory");
  if (chatHistory) {
      messagesContainer.innerHTML = chatHistory;
  }

  function addMessage(message, sender) {
      var messageElement = document.createElement("div");
      messageElement.classList.add("message");
      if (sender === "user") {
          messageElement.classList.add("user-message");
      } else {
          messageElement.classList.add("agent-message");
      }

      var profileImage = document.createElement("img");
      profileImage.classList.add("profile-image");
      if (sender === "user") {
          profileImage.classList.add("user-profile-image");
          profileImage.src = "/img/customer pic.png"; // Replace with user profile image URL
      } else {
          profileImage.classList.add("agent-profile-image");
          profileImage.src = "/img/agent pic.png"; // Replace with agent profile image URL
      }

      var messageContent = document.createElement("div");
      messageContent.classList.add("message-content");
      messageContent.textContent = message;

      messageElement.appendChild(profileImage);
      messageElement.appendChild(messageContent);
      messagesContainer.appendChild(messageElement);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function getAgentResponse(question) {
      // Predefined responses based on different questions
      var responses = {
          "hello": "Hello! How can I assist you today?",
          "order status": "To check the status of your order, please provide your order number.",
          "shipping time": "Shipping time may vary depending on your location. Can you please provide your location?",
          "payment methods": "We accept various payment methods such as credit cards, PayPal, and bank transfers.",
          "ok": "No problem.",
          "how are you?": "I'm doing well, thank you! How can I help you today?",
          "product availability": "To check product availability, please provide the name or SKU of the product.",
          "returns and refunds": "For returns and refunds, please refer to our return policy on our website.",
          "account assistance": "For account assistance, please contact our support team through the contact information provided on our website.",
          "discounts and promotions": "We offer various discounts and promotions throughout the year. Please check our website or subscribe to our newsletter for the latest updates.",
          "product specifications": "For detailed product specifications, please visit the product page on our website.",
          "cancellation policy": "To learn about our cancellation policy, please refer to the terms and conditions section on our website.",
          "track shipment": "To track your shipment, please provide your tracking number. You can find it in the shipping confirmation email.",
          "contact customer support": "You can contact our customer support team through phone, email, or live chat. Please visit our website for the contact details.",
          "order cancellation": "To cancel your order, please contact our customer support team within 24 hours of placing the order.",
          "delivery options": "We offer various delivery options such as standard shipping, express shipping, and same-day delivery. The availability of these options may depend on your location.",
          "product returns": "For product returns, please ensure that the item is unused and in its original packaging. You can initiate the return process by contacting our customer support team.",
          "product recommendations": "For personalized product recommendations, please provide some details about your preferences or the type of product you are looking for.",
          // Add more responses for different questions
      };

      // Check if the question exists in the responses object
      if (question.toLowerCase() in responses) {
          return responses[question.toLowerCase()];
      } else {
          return "I'm sorry, I'm unable to assist with that question at the moment.";
      }
  }

  function sendMessage() {
      var message = inputBox.value;
      if (message.trim() !== "") {
          addMessage(message, "user");
          inputBox.value = "";

          // Simulate agent's response based on the user's message
          setTimeout(function() {
              var response = getAgentResponse(message);
              addMessage(response, "agent");

              // Save chat history to local storage
              localStorage.setItem("chatHistory", messagesContainer.innerHTML);
          }, 500);
      }
  }

  function handleKeyDown(event) {
      if (event.keyCode === 13 && event.target.nodeName === "TEXTAREA") {
          event.preventDefault();
          var value = inputBox.value.trim();
          if (value !== "") {
              addMessage(value, "user");
              inputBox.value = "";
          }
      }
  }

  sendButton.addEventListener("click", sendMessage);
  document.addEventListener("keydown", handleKeyDown);

  inputBox.focus();
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
  
  