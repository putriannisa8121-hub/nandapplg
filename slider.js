let index = 0;
const images = document.querySelectorAll("#slider img");

function showSlide() {
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");

    index = (index + 1) % images.length;
}

setInterval(showSlide, 3000);
showSlide();