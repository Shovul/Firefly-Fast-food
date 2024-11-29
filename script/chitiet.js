// Giá mỗi sản phẩm
//mở chi tiết
var pricePerItem
var totalPrice


function mochitiet(item){
    let option = document.getElementById('themvaogio')
    
    if(item.classList.contains('muaNgay')) {
        option.firstElementChild.innerHTML = 'Mua ngay'
    }
    else {
        option.firstElementChild.innerHTML = 'Thêm vào giỏ hàng'
    }

    var getItem = item.id
    option.classList = menu[getItem].id
    document.getElementById("hienthongtinsp").style.display = "block";
    document.body.style.overflow = "hidden";
    document.querySelector('.bg#blur').style.display = "block";
    document.getElementById("chen-hinh").src = menu[getItem].image
    document.getElementById('total-price').innerHTML = menu[getItem].price
    document.getElementById('ten-chitiet-sp').innerHTML = menu[getItem].name
    pricePerItem = menu[getItem].price
    document.getElementById("chitiet-sp").innerHTML = menu[getItem].description
    updateTotalPrice()
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
        totalPrice = pricePerItem * quantity;
        document.querySelectorAll("#total-price")[1].innerHTML = totalPrice.toLocaleString() + 'đ'
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
//     
// }

// Đóng bản hiện thị sản phẩm
function closeSP(){
    document.getElementById("quantity").value = 1;
    document.getElementById("hienthongtinsp").style.display = "none";
    document.querySelector('.bg#blur').style.display = "none";
    document.body.style.overflow = "auto";
    document.getElementById("total-price").innerHTML = ""
    totalPrice = 0
}

function muaSP(option) {
    const mua = option.firstElementChild.innerHTML
    const quantity = Math.ceil(totalPrice/pricePerItem)
    const food = menu[option.classList]
    let item
    if(mua === 'Mua ngay') {
        alert('mua ngay')
    }
    else {
        item = {
            id: food.id,
            name: food.name,
            price: food.price,
            quantity: quantity,
            image: food.image,
            selected: false
        }
    }
        for(let i=0; i<accounts[remember].cart.length; i++) {
            if(accounts[remember].cart[i].id === item.id) {
                accounts[remember].cart[i].quantity += item.quantity
                localStorage.setItem('accounts', JSON.stringify(accounts))
                alert('Đã thêm ' + item.name + ' vào giỏ hàng')
                closeSP()
                return false
            }
        }
    console.log(accounts)
    accounts[remember].cart.push(item)
    localStorage.setItem('accounts', JSON.stringify(accounts))
    alert('Đã thêm ' + item.name + ' vào giỏ hàng')
    closeSP()
}
