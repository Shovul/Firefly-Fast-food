// Giá mỗi sản phẩm
//mở chi tiết
var pricePerItem
function mochitiet(item){
    var getItem = item.id
    document.getElementById("hienthongtinsp").style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById("blur-bg").style.display = "block";
    document.getElementById("chen-hinh").src = menu[getItem].image
    document.getElementById('total-price').innerHTML = menu[getItem].price
    document.getElementById('ten-chitiet-sp').innerHTML = menu[getItem].name
    pricePerItem = menu[getItem].price
    document.getElementById("chitiet-sp").innerHTML = menu[getItem].description
}

// function printMoney(money) {
//     var stringMoney
//     while(money !== 0) {
//         alert(stringMoney)
//         stringMoney += money%1000
//         stringMoney += ","
//         money = Math.floor(money/1000)
//     }
//     return stringMoney
// }
// Hàm cập nhật tổng giá
function updateTotalPrice() {
    let quantity = parseInt(document.getElementById("quantity").value);
    if(pricePerItem * quantity < Number.MAX_SAFE_INTEGER) {
        let totalPrice = pricePerItem * quantity;
        document.getElementById("total-price").innerText = totalPrice
    }
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
// window.onload = function() {
//     updateTotalPrice();
// }

// Đóng bản hiện thị sản phẩm
function closeSP(){
    document.getElementById("quantity").value = 1;
    document.getElementById("hienthongtinsp").style.display = "none";
    document.getElementById("blur-bg").style.display = "none";
    document.body.style.overflow = "auto";
    document.getElementById("total-price").innerHTML = ""
}
