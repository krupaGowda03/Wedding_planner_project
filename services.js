document.addEventListener("DOMContentLoaded", function () {
    // Modal elements
    const modal = document.getElementById("serviceModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const closeModal = document.querySelector(".close");

    // Service descriptions
    const serviceDetails = {
        venue: {
            title: "Venue Selection",
            description: "We help you find the perfect wedding venue, from grand ballrooms to intimate garden settings, based on your budget and theme."
        },
        catering: {
            title: "Catering & Menu Planning",
            description: "Choose from a variety of exquisite cuisines, expertly crafted by professional chefs to make your wedding