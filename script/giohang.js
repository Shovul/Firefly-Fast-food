function showGioHang() {
  document.getElementById('giohang').style.display = 'block'
  document.getElementById("filter").style.display = 'none'
  document.getElementById("filter-list").style.display= 'none'
  document.getElementsByClassName("slider")[0].style.display="none";
  document.getElementsByClassName("search")[0].style.display="none";
  document.getElementsByClassName("content")[0].style.display="none";
  displayProducts();
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
            <label class="product-item ${product.selected ? 'selected' : ''}" for="product${product.id}">
                <!-- Checkbox chọn sản phẩm -->
                <input type="checkbox" class="product-checkbox" id="product${product.id}" onchange="toggleSelect(${index})" ${product.selected ? 'checked' : ''} />
                <div class="product-image" style="background-image: url(${product.image});"></div> <!-- Hình ảnh sản phẩm -->
                <div class="product-info">
                    <p>${product.name}</p> <!-- Tên sản phẩm -->
                    <p>${product.price.toLocaleString()}₫</p> <!-- Giá sản phẩm -->
                    <!-- Ô nhập số lượng -->
                    <input type="number" value="${product.quantity}" min="1" onchange="editQuantity(${index}, this.value)" />
                </div>
                <!-- Nút xóa sản phẩm -->
                <div class="remove" onclick="removeProduct(${index})">X</div>
            </label>
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

function newAddress() {
  const form = document.getElementById('shipping-form')
  form['email'].style.display = 'block'
  form.querySelector('label[for="email"]').style.display = 'block'
  form['address'].style.display = 'block'
  form.querySelector('label[for="address"]').style.display = 'block'
  form['district'].style.display = 'block'
  form.querySelector('label[for="district"]').style.display = 'block'
  form['ward'].style.display = 'block'
  form.querySelector('label[for="ward"]').style.display = 'block'
  form['province'].innerHTML = `
    <option value="" selected disabled>Chọn tỉnh/thành</option>
    <option value="Bắc Ninh">Bắc Ninh</option>
    <option value="Hà Nội">Hà Nội</option>
    <option value="Hồ Chí Minh">Hồ Chí Minh</option>
  `
  form['cart-btn'].setAttribute('onclick', 'submitOrder()')
  document.getElementById("switch-btn").firstElementChild.classList.add('active')
  document.getElementById("switch-btn").lastElementChild.classList.remove('active')
}
function oldAddress() {
  const form = document.getElementById('shipping-form')
  form['email'].style.display = 'none'
  form.querySelector('label[for="email"]').style.display = 'none'
  form['address'].style.display = 'none'
  form.querySelector('label[for="address"]').style.display = 'none'
  form['district'].style.display = 'none'
  form.querySelector('label[for="district"]').style.display = 'none'
  form['ward'].style.display = 'none'
  form.querySelector('label[for="ward"]').style.display = 'none'
  form['province'].innerHTML = ''
  form.querySelector('label[for="province"]').innerHTML = 'Địa chỉ'
  form['cart-btn'].setAttribute('onclick', 'addToHoaDon()')

  let addresses = form['province']
  let name = form['name']
  let phone = form['phone']
  name.setAttribute('readonly', true)
  phone.setAttribute('readonly', true)
  accounts[remember].addresses.forEach(address => {
    addresses.appendChild(createAddressOption(address))
    if(address.status == 'choose') {
      addresses.selectedIndex = address.id
      name.value = address.name
      phone.value = address.phone
    }
  })
  document.getElementById("switch-btn").lastElementChild.classList.add('active')
  document.getElementById("switch-btn").firstElementChild.classList.remove('active')
}
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
    form['email'].style.display = 'none'
    form.querySelector('label[for="email"]').style.display = 'none'
    form['address'].style.display = 'none'
    form.querySelector('label[for="address"]').style.display = 'none'
    form['district'].style.display = 'none'
    form.querySelector('label[for="district"]').style.display = 'none'
    form['ward'].style.display = 'none'
    form.querySelector('label[for="ward"]').style.display = 'none'
    form['province'].innerHTML = ''
    form.querySelector('label[for="province"]').innerHTML = 'Địa chỉ'
    form['cart-btn'].setAttribute('onclick', 'addToHoaDon()')

    let addresses = form['province']
    let name = form['name']
    let phone = form['phone']
    name.setAttribute('readonly', true)
    phone.setAttribute('readonly', true)
    accounts[remember].addresses.forEach(address => {
      addresses.appendChild(createAddressOption(address))
      if(address.status == 'choose') {
        addresses.selectedIndex = address.id
        name.value = address.name
        phone.value = address.phone
      }
    })
    document.getElementById("switch-btn").lastElementChild.classList.add('active')
    document.getElementById("switch-btn").firstElementChild.classList.remove('active')
  }
}
let addressSelect = document.querySelector('#shipping-form #province')

addressSelect.addEventListener('change', () => {
  for(let i=0; i<accounts[remember].addresses.length; i++) {
    if(accounts[remember].addresses[i].id == addressSelect.value) {
      document.getElementById('shipping-form')['name'].value = accounts[remember].addresses[i].name 
      document.getElementById('shipping-form')['phone'].value =accounts[remember].addresses[i].phone 
    }
  }
})
function openCheckOut() {
  showAddresses()
  const shipForm = document.getElementById('shipping-form')
  shipForm.style.display = 'block'
  document.querySelector('.bg#white').style.display = 'block'
}
function addToHoaDon() {
  if(accounts[remember].addresses.length === 0) {
    alert('Chưa có địa chỉ')
    return false
  } 
  const form = document.getElementById('shipping-form')
  if(form['thanh_toan'].value == 'Thẻ ngân hàng' || form['thanh_toan'].value == 'Thẻ tín dụng') {
    
    return false
  }

  var currentdate = new Date();
  var orderDate = currentdate.getDay() + "/" + currentdate.getMonth() + "/" + currentdate.getFullYear() + "-" + (currentdate.getHours()<10 ? '0' + currentdate.getHours() : currentdate.getHours()) + ":" + (currentdate.getMinutes()<10 ? '0' + currentdate.getMinutes() : currentdate.getMinutes()) + ":" + (currentdate.getSeconds()<10 ? '0' + currentdate.getSeconds() : currentdate.getSeconds());


  const address = accounts[remember].addresses.filter(address => address.id == form['province'].value)


  let selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'))
  let newHoaDon = {
    id: accounts[remember].hoadon.length,
    info: address[0],
    items: selectedProducts,
    orderTime: orderDate,
    arriveTime: calculateArrivalTime(orderDate.split("-")[1],Math.floor(Math.random() * 50)),
    paymentMethod: form['thanh_toan'].value,
    status: 'a'
  }
  accounts[remember].hoadon.push(newHoaDon)
  for(let i=0; i<accounts[remember].cart.length; i++) {
    for(let j=0; j<selectedProducts.length; j++) {
      if(accounts[remember].cart[i].id == selectedProducts[j].id) {
        accounts[remember].cart.splice(i, 1)
      }
    }
  }

  localStorage.setItem('accounts', JSON.stringify(accounts))
  localStorage.removeItem('selectedProducts') 
  
  alert(`Bạn đã đặt hàng thành công! Đơn hàng dự kiến sẽ đến lúc ${newHoaDon.arriveTime}`)

  window.location.href = 'index.html'
}
function calculateArrivalTime(time, minutes) {
  let updateTime = time.split(":")
  updateTime[1] = parseInt(updateTime[1]) + minutes
  updateTime[0] = parseInt(updateTime[0]) + Math.floor(parseInt(updateTime[1])/60)
  updateTime[1] = parseInt(updateTime[1])%60

  return updateTime[0] + ':' + updateTime[1] + ':' + updateTime[2]
}
 // Giả lập danh sách quận/huyện/phường theo tỉnh/thành
 const districts = {
  "Bắc Ninh": ["Quận 1", "Quận 2"],
  "Hà Nội": ["Cầu Giấy", "Đống Đa", "Hoàn Kiếm"],
  "Hồ Chí Minh": ["Quận 1", "Quận 3", "Thủ Đức"]
};
const wards = {
  "Quận 1": ["Phường 1", "Phường 2"],
  "Quận 2": ["Phường 3", "Phường 4"],
  "Quận 3": ["Phường 5", "Phường 6"],
  "Cầu Giấy": ["Nghĩa Đô", "Nghĩa Tân"],
  "Đống Đa": ["Quốc Tử Giám", "Văn Miếu"],
  "Hoàn Kiếm": ["Dịch Vọng", "Quan Hoa"],
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

  fullAddress = address + ' ' + ward.value + ', '+ district.value + ', ' + province.value
  // alert(`Đặt hàng thành công!\nThông tin giao hàng:\nHọ và tên: ${name}\nEmail: ${email}\nSố điện thoại: ${phone}\nĐịa chỉ: ${address}, ${ward.value}, ${district.value}, ${province.value}`);

  // lay thoi gian hien tai
  var currentdate = new Date();
  var orderDate = currentdate.getDay() + "/" + currentdate.getMonth() + "/" + currentdate.getFullYear() + "-" + (currentdate.getHours()<10 ? '0' + currentdate.getHours() : currentdate.getHours()) + ":" + (currentdate.getMinutes()<10 ? '0' + currentdate.getMinutes() : currentdate.getMinutes()) + ":" + (currentdate.getSeconds()<10 ? '0' + currentdate.getSeconds() : currentdate.getSeconds());

  const form = document.getElementById('shipping-form')

  let selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'))
  let newHoaDon = {
    id: accounts[remember].hoadon.length,
    info: {
      name: name,
      email: email,
      phone: phone,
      address: fullAddress
    },
    items: selectedProducts,
    orderTime: orderDate,
    arriveTime: calculateArrivalTime(orderDate.split("-")[1],Math.floor(Math.random() * 50)),
    paymentMethod: form['thanh_toan'].value,
    status: 'a'
  }

  accounts[remember].hoadon.push(newHoaDon)
  for(let i=0; i<accounts[remember].cart.length; i++) {
    for(let j=0; j<selectedProducts.length; j++) {
      if(accounts[remember].cart[i].id == selectedProducts[j].id) {
        accounts[remember].cart.splice(i, 1)
      }
    }
  }

  localStorage.setItem('accounts', JSON.stringify(accounts))
  localStorage.removeItem('selectedProducts') 
  
  alert(`Bạn đã đặt hàng thành công! Đơn hàng dự kiến sẽ đến lúc ${newHoaDon.arriveTime}`)

  window.location.href = 'index.html'
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
