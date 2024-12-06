let currentIndex = 0; // Slide hiện tại
const slides = document.querySelector(".slider");
const slideImages = document.querySelectorAll(".slider img");
const buttons = document.querySelectorAll(".nav-btn .btn");
const totalSlides = slideImages.length;

// Hiển thị slide theo chỉ số
function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    buttons.forEach((btn, i) => {
        btn.classList.toggle("active", i === index);
    });
}

// Tự động chuyển slide mỗi 3 giây
function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// Thêm sự kiện khi nhấn vào nút điều hướng
buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

// Bắt đầu slider
setInterval(autoSlide, 3000);
window.onload = function () {
    showSlide(currentIndex);
};