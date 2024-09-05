// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Navigation Menu Toggle
    const navMenuBtn = document.querySelector(".nav-menu-btn i");
    const navMenu = document.getElementById("navMenu");

    navMenuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("responsive");
    });

    // Form Toggle Buttons
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");
    const loginContainer = document.getElementById("login");
    const registerContainer = document.getElementById("register");

    // Initialize by showing the login form
    showLogin();

    loginBtn.addEventListener("click", showLogin);
    registerBtn.addEventListener("click", showRegister);

    function showLogin() {
        // Positioning forms
        loginContainer.style.left = "4px";
        registerContainer.style.right = "-520px";

        // Adjust button styles
        loginBtn.classList.add("white-btn");
        registerBtn.classList.remove("white-btn");

        // Adjust opacity for smooth transition
        loginContainer.style.opacity = "1";
        registerContainer.style.opacity = "0";
    }

    function showRegister() {
        // Positioning forms
        loginContainer.style.left = "-510px";
        registerContainer.style.right = "5px";

        // Adjust button styles
        loginBtn.classList.remove("white-btn");
        registerBtn.classList.add("white-btn");

        // Adjust opacity for smooth transition
        loginContainer.style.opacity = "0";
        registerContainer.style.opacity = "1";
    }

    // Optional: Close the responsive menu when a link is clicked (useful for single-page applications)
    const navLinks = document.querySelectorAll(".nav-menu ul li a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navMenu.classList.contains("responsive")) {
                navMenu.classList.remove("responsive");
            }
        });
    });
});
