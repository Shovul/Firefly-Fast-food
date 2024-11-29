function showGioHang() {
  document.getElementById('giohang').style.display = 'block'
  document.getElementById("filter").style.display = 'none'
  document.getElementById("filter-list").style.display= 'none'
  document.getElementsByClassName("slider")[0].style.display="none";
  document.getElementsByClassName("search")[0].style.display="none";
  document.getElementsByClassName("content")[0].style.display="none";
}
function offGioHang() {
  document.getElementById('giohang').style.display = 'none'
  document.getElementById("filter").style.display = 'flex'
  document.getElementById("filter-list").style.display= 'grid'
  document.getElementsByClassName("slider")[0].style.display="block";
  document.getElementsByClassName("search")[0].style.display="flex";
  document.getElementsByClassName("content")[0].style.display="block";
}


// Hàm hiển thị danh sách sản phẩm
function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Xóa nội dung cũ
    accounts[remember].cart.forEach((product, index) => {
        // Tạo HTML cho mỗi sản phẩm
        productList.innerHTML += `
            <div class="product-item ${product.selected ? 'selected' : ''}">
                <!-- Checkbox chọn sản phẩm -->
                <input type="checkbox" class="product-checkbox" onchange="toggleSelect(${index})" ${product.selected ? 'checked' : ''} />
                <div class="product-image" style="background-image: url(${product.image});"></div> <!-- Hình ảnh sản phẩm -->
                <div class="product-info">
                    <p>${product.name}</p> <!-- Tên sản phẩm -->
                    <p>${product.price.toLocaleString()}₫</p> <!-- Giá sản phẩm -->
                    <!-- Ô nhập số lượng -->
                    <input type="number" value="${product.quantity}" min="1" onchange="editQuantity(${index}, this.value)" />
                </div>
                <!-- Nút xóa sản phẩm -->
                <div class="remove" onclick="removeProduct(${index})">X</div>
            </div>
        `;
    });
  calculateTotal(); // Tính lại tổng tiền
}

// Hàm chỉnh sửa số lượng sản phẩm
function editQuantity(index, quantity) {
  accounts[remember].cart[index].quantity = parseInt(quantity); // Cập nhật số lượng
  localStorage.setItem('accounts', JSON.stringify(accounts))
  calculateTotal(); // Tính lại tổng tiền
}

// Hàm chọn hoặc bỏ chọn sản phẩm
function toggleSelect(index) {
  accounts[remember].cart[index].selected = !accounts[remember].cart[index].selected; // Đảo trạng thái
  localStorage.setItem('accounts', JSON.stringify(accounts))
  displayProducts(); // Cập nhật hiển thị
}

// Hàm xóa sản phẩm khỏi danh sách
function removeProduct(index) {
  if(window.confirm('Xóa tất cả món khỏi giỏ hàng?')) {
    accounts[remember].cart.splice(index, 1); // Xóa sản phẩm khỏi mảng
    localStorage.setItem('accounts', JSON.stringify(accounts))
    displayProducts(); // Cập nhật hiển thị
  }
}

// Hàm tính tổng tiền
function calculateTotal() {
  const summaryItems = document.getElementById("summary-items");
  summaryItems.innerHTML = ""; // Xóa nội dung cũ
  let totalPrice = 0;

  // Tính tổng tiền cho các sản phẩm được chọn
  
    accounts[remember].cart.forEach(product => {
        if (product.selected) {
            const itemTotal = product.price * product.quantity;
            totalPrice += itemTotal; // Cộng vào tổng tiền
            summaryItems.innerHTML += `<div class="summary-item">${product.name}: ${itemTotal.toLocaleString()}₫</div>`;
        }
    });
  
  document.getElementById("total-price").innerText = `${totalPrice.toLocaleString()}₫`; // Cập nhật tổng tiền
}

// Hàm xử lý thanh toán
function checkout() {
const selectedProducts = accounts[remember].cart.filter(product => product.selected); // Lọc sản phẩm đã chọn
if (selectedProducts.length === 0) {
  alert("Chưa có sản phẩm nào được chọn!");
  return;
}
// Lưu danh sách sản phẩm đã chọn vào localStorage
localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
// Chuyển hướng đến trang thông tin giao hàng
openCheckOut()
}

displayProducts();

document.querySelector('#shipping-form #address').addEventListener('change', () => {
  for(let i=0; i<accounts[remember].addresses.length; i++) {
    if(accounts[remember].addresses[i].id == document.querySelector('#shipping-form #address').value) {
      document.querySelector('#shipping-form #name').value = accounts[remember].addresses[i].name 
      document.querySelector('#shipping-form #phone').value =accounts[remember].addresses[i].phone 
    }
  }
})
function createAddressOption(address) {
  const receiver = document.createElement('optgroup')
  receiver.setAttribute('label', address.name + ", " + address.phone)
  const newAddress = document.createElement('option')
  newAddress.setAttribute('value', address.id)
  newAddress.innerHTML = address.address
  receiver.appendChild(newAddress)

  return receiver
}
function showAddresses() {
  const form = document.getElementById('shipping-form')
  if(accounts[remember].addresses.length > 0) {
    form.innerHTML = `
        <h2>Thông Tin Giao Hàng</h2>
        <label for="name">Họ và Tên</label>
        <input type="text" id="name" placeholder="Nhập họ và tên" required>

        <label for="phone">Số điện thoại</label>
        <input type="tel" id="phone" placeholder="Nhập số điện thoại" required>

        <label for="address">Địa chỉ</label>
        <select id="address" name="province" required>
        </select>
        
        <button type="button" onclick="submitOrder()">Tiếp tục đến phương thức thanh toán</button>

        <button type="button" class="cart-button" onclick="goToCart()">Quay lại giỏ hàng</button>
    `
    let addresses = form['province']
    let name = form['name']
    let phone = form['phone']
    accounts[remember].addresses.forEach(address => {
      addresses.appendChild(createAddressOption(address))
      if(address.status == 'choose') {
        addresses.selectedIndex = address.id
        name.value = address.name
        phone.value = address.phone
      }
    })
  }
  else {

  }
}
function openCheckOut() {
  showAddresses()
  const shipForm = document.getElementById('shipping-form')
  shipForm.style.display = 'block'
  document.querySelector('.bg#white').style.display = 'block'
}
 // Giả lập danh sách quận/huyện/phường theo tỉnh/thành
 const districts = {
  "Bắc Ninh": ["Quận 1", "Quận 2"],
  "Hà Nội": ["Cầu Giấy", "Đống Đa", "Hoàn Kiếm"],
  "Hồ Chí Minh": ["Quận 1", "Quận 3", "Thủ Đức"]
};
const wards = {
  "Quận 1": ["Phường 1", "Phường 2"],
  "Cầu Giấy": ["Dịch Vọng", "Quan Hoa"],
  "Thủ Đức": ["Linh Đông", "Hiệp Bình Chánh"]
};

// Tải danh sách quận/huyện khi chọn tỉnh/thành
document.getElementById('province').addEventListener('change', function () {
  const districtSelect = document.getElementById('district');
  const wardSelect = document.getElementById('ward');
  const province = this.value;

  districtSelect.innerHTML = '<option value="">Chọn quận/huyện</option>';
  wardSelect.innerHTML = '<option value="">Chọn phường/xã</option>';

  if (districts[province]) {
      districts[province].forEach(district => {
          districtSelect.innerHTML += `<option value="${district}">${district}</option>`;
      });
  }
});

// Tải danh sách phường/xã khi chọn quận/huyện
document.getElementById('district').addEventListener('change', function () {
  const wardSelect = document.getElementById('ward');
  const district = this.value;

  wardSelect.innerHTML = '<option value="">Chọn phường/xã</option>';

  if (wards[district]) {
      wards[district].forEach(ward => {
          wardSelect.innerHTML += `<option value="${ward}">${ward}</option>`;
      });
  }
});

// Xử lý khi bấm "Tiếp tục đến phương thức thanh toán"
function submitOrder() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  // const province = document.getElementById('province').value;
  // const district = document.getElementById('district').value;
  // const ward = document.getElementById('ward').value;

  if (!name || !email || !phone || !address || !province || !district || !ward) {
      alert("Vui lòng điền đầy đủ thông tin giao hàng!");
      return;
  }

  alert(`Đặt hàng thành công!\nThông tin giao hàng:\nHọ và tên: ${name}\nEmail: ${email}\nSố điện thoại: ${phone}\nĐịa chỉ: ${address}, ${ward.value}, ${district.value}, ${province.value}`);
}

// Điều hướng về trang giỏ hàng
function goToCart() {
  window.location.href = "index.html?giohang"; // Điều hướng về trang giỏ hàng
}
function addToCart(itemId, quantity = 1) {
  const menu = JSON.parse(localStorage.getItem('menu')); // Lấy menu từ localStorage
  const accounts = JSON.parse(localStorage.getItem('accounts')); // Lấy danh sách tài khoản
  const currentAccount = accounts[remember]; // Tài khoản hiện tại

  // Tìm món ăn trong menu
  const item = menu.find(product => product.id === itemId);
  if (!item) {
      alert("Món ăn không tồn tại!");
      return;
  }

  // Kiểm tra nếu món ăn đã có trong giỏ hàng
  const existingItem = currentAccount.cart.find(cartItem => cartItem.id === itemId);
  if (existingItem) {
      existingItem.quantity += quantity; // Tăng số lượng nếu đã tồn tại
  } else {
      // Thêm món ăn mới vào giỏ hàng
      currentAccount.cart.push({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: quantity,
          image: item.image,
          selected: true // Mặc định chọn
      });
  }

  // Lưu lại thay đổi vào localStorage
  localStorage.setItem('accounts', JSON.stringify(accounts));
  alert(`Đã thêm "${item.name}" vào giỏ hàng!`);
  displayProducts(); // Cập nhật giao diện giỏ hàng (nếu cần)
}
