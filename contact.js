document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        // Validate input fields
        if (name === "" || email === "" || message === "") {
            alert("⚠ Please fill in all fields before submitting.");
            return;
        }

        // Simple email validation
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("⚠ Please enter a valid email address.");
            return;
        }

        // If all validations pass, show success message
        successMessage.classList.remove("hidden");

        // Reset form after submission
        contactForm.reset();
    });
});