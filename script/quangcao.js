const manghinhanh = [
    'images/Advertisement/x1600x504-1.jpg.pagespeed.ic.9cuGI5vJI3.webp',
    'images/Advertisement/xchuoi_1600x504_1.png.pagespeed.ic.fgj8XoOnqu.webp',
    'images/Advertisement/xMDS_homeslide.jpg.pagespeed.ic.x74msAaTAi.webp',
    'images/Advertisement/xWeb-value.jpg.pagespeed.ic.5GlFsD9vWU.webp'
]
const containermanghinhanh = document.querySelector('.slider');
let currentIndex = 0;
 // tạo ảnh từ mảng
 manghinhanh.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('banner-img');
    containermanghinhanh.appendChild(img);
});

// Thêm ảnh đầu tiên vào cuối
const anhdautien = document.createElement('img');
anhdautien.src = imageArray[0];
anhdautien.classList.add('banner-img');
containermanghinhanh.appendChild(anhdautien);

function dichuyenslide(direction) {
    currentIndex += direction;

    if (currentIndex === manghinhanh.length) {
        // Chuyển đến ảnh clone
        containermanghinhanh.style.transition = 'transform 1s ease';
        containermanghinhanh.style.transform = `translateX(-${currentIndex * 100}%)`;

        setTimeout(() => {
            // Nhảy về ảnh đầu tiên
            containermanghinhanh.style.transition = 'none';
            currentIndex = 0;
            containermanghinhanh.style.transform = `translateX(0%)`;
        }, 1000); // Phù hợp với thời gian transition
    } else if (currentIndex < 0) {
        // Lùi về ảnh cuối
        containermanghinhanh.style.transition = 'none';
        currentIndex = manghinhanh.length - 1;
        containermanghinhanh.style.transform = `translateX(-${currentIndex * 100}%)`;
    } else {
        // Di chuyển bình thường
        containermanghinhanh.style.transition = 'transform 1s ease';
        containermanghinhanh.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

// Chuyển ảnh tự động sau mỗi 10 giây
setInterval(() => {
    dichuyenslide(1);
}, 10000); // 10 giây

 style="transition: none; transform: translateX(0%)"