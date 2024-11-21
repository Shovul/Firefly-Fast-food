// Giá mỗi sản phẩm
const pricePerItem = 25000;
    
// Hàm cập nhật tổng giá
function updateTotalPrice() {
    let quantity = parseInt(document.getElementById("quantity").value);
    let totalPrice = pricePerItem * quantity;
    document.getElementById("total-price").innerText = totalPrice.toLocaleString("vi-VN");
}



// Tăng số lượng
function increaseQuantity() {
    let quantityInput = document.getElementById("quantity");
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateTotalPrice();
}

// Giảm số lượng
function decreaseQuantity() {
    let quantityInput = document.getElementById("quantity");
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
        updateTotalPrice();
    }
}

// Tính tổng giá khi trang tải
window.onload = function() {
    updateTotalPrice();
}

// Đóng bản hiện thị sản phẩm
function closeSP(){
    document.getElementById("hienthongtinsp").style.display = "none";
    document.getElementById("blur-bg").style.display = "none";
    document.body.style.overflow = "auto";
}

//mở chi tiết
function mochitiet(){
    document.getElementById("hienthongtinsp").style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById("blur-bg").style.display = "block";
    
}
