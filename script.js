function closeSignup() {
    window.history.back(); // Go back to the previous page
}
function getUsername() {
    return localStorage.getItem("username") || "";
  }
  
  // Function to set the welcome message based on the username
  function setWelcomeMessage() {
    var welcomeMessage = document.getElementById("welcomeMessage");
    var username = getUsername();
  
    if (username) {
      welcomeMessage.innerText = "Welcome, " + username + " to Ghar ka Khana!";
    }
  }
  
  // Call setWelcomeMessage when the page loads
  window.onload = setWelcomeMessage;

  function isLoggedIn() {
  return localStorage.getItem("username") !== null;
}

// Function to update the navigation buttons based on login status
// Function to check if the user is logged in
function isLoggedIn() {
    return localStorage.getItem("username") !== null;
}

// Function to set the welcome message based on the username
function setWelcomeMessage() {
    var welcomeMessage = document.getElementById("welcomeMessage");
    var username = localStorage.getItem("username");

    if (username) {
        welcomeMessage.innerText = "Welcome, " + username + " to Ghar ka Khana!";
    }
}

// Function to update navigation buttons based on login status
function updateNavigationButtons() {
    var loginButton = document.querySelector("a[href='signup.html'] > button");
    var signupButton = document.querySelector("a[href='signup.html'] ~ a[href='signup.html'] > button");
    var logoutButton = document.getElementById("logoutBtn");
    var cartButton = document.getElementById("cartBtn");
    var menuButton = document.getElementById("menuBtn");
    

    if (isLoggedIn()) {
        // User is logged in, hide signup and login buttons, show logout and cart buttons
        loginButton.style.display = "none";
        signupButton.style.display = "none";
        logoutButton.style.display = "inline-block";
        cartButton.style.display = "inline-block";
        menuButton.style.display="inline-block";
    } else {
        // User is not logged in, show signup and login buttons, hide logout and cart buttons
        loginButton.style.display = "inline-block";
        signupButton.style.display = "inline-block";
        logoutButton.style.display = "none";
        cartButton.style.display = "none";
    }
}

// Function to handle logout
function logout() {
    // Remove the username from local storage
    localStorage.removeItem("username");

    // Redirect to the original home page or login page
    window.location.href = "Home.html";
}



// Call functions when the page loads
window.onload = function () {
    setWelcomeMessage();
    updateNavigationButtons();

    // Example: Add an item to the cart
    var exampleItem = { name: "Example Item", price: 10 };
    addToCart(exampleItem);
};
