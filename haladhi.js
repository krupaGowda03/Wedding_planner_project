document.addEventListener("DOMContentLoaded", function () {
    const nextBtn = document.querySelector(".next-btn");

    nextBtn.addEventListener("click", function () {
        window.location.href = "nextpage.html"; // Change this to your next page URL
    });
});