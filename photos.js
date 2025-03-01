window.onload = function () {
    let images = document.querySelectorAll("img"); // Make sure this selector is correct
    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = "1";
            img.style.transform = "scale(1)";
        }, index * 1000);
    });
};