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
  let name = form['name']
  let phone = form['phone']
  name.readOnly = false
  phone.readOnly = false
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
  name.value = ''
  phone.value = ''
  name.setAttribute('readonly', false)
  phone.setAttribute('readonly', false)
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
  var orderDate = currentdate.getDay() + "/" + currentdate.parseInt(getMonth())+1 + "/" + currentdate.getFullYear() + "-" + (currentdate.getHours()<10 ? '0' + currentdate.getHours() : currentdate.getHours()) + ":" + (currentdate.getMinutes()<10 ? '0' + currentdate.getMinutes() : currentdate.getMinutes()) + ":" + (currentdate.getSeconds()<10 ? '0' + currentdate.getSeconds() : currentdate.getSeconds());


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
  const newTime = (updateTime[0]<10 ? '0' + updateTime[0] : updateTime[0]) + ':' + (updateTime[1]<10 ? '0' + updateTime[1] : updateTime[1]) + ':' + (updateTime[2]<10 ? '0' + updateTime[2] : updateTime[2])

  return newTime
}
 // Hàm cập nhật Quận/Huyện khi chọn Tỉnh/Thành
 const data = {
  "Hà Nội": {
      "Ba Đình": ["Phường Ngọc Hà", "Phường Kim Mã", "Phường Phúc Xá", "Phường Đội Cấn", "Phường Liễu Giai", "Phường Quan Hoa"],
      "Hoàn Kiếm": ["Phường Hàng Bạc", "Phường Hàng Bài", "Phường Tràng Tiền", "Phường Phan Chu Trinh", "Phường Cửa Đông"],
      "Cầu Giấy": ["Phường Dịch Vọng Hậu", "Phường Mai Dịch", "Phường Nghĩa Tân", "Phường Dịch Vọng", "Phường Cầu Giấy"],
      "Đống Đa": ["Phường Láng Hạ", "Phường Trung Liệt", "Phường Khâm Thiên", "Phường Nam Đồng", "Phường Thịnh Quang"],
      "Tây Hồ": ["Phường Nhật Tân", "Phường Quảng An", "Phường Thụy Khuê", "Phường Phú Thượng", "Phường Yên Phụ"],
      "Thanh Xuân": ["Phường Khương Đình", "Phường Thanh Xuân Bắc", "Phường Thanh Xuân Nam", "Phường Hạ Đình", "Phường Phương Liệt"],
      "Long Biên": ["Phường Giang Biên", "Phường Thượng Thanh", "Phường Long Biên", "Phường Việt Hưng", "Phường Phúc Lợi"],
      "Hai Bà Trưng": ["Phường Bạch Mai", "Phường Quỳnh Lôi", "Phường Đồng Tâm", "Phường Thanh Lương", "Phường Vĩnh Tuy"]
  },
  "Hồ Chí Minh": {
      "Quận 1": ["Phường Bến Nghé", "Phường Bến Thành", "Phường Cầu Kho", "Phường Nguyễn Cư Trinh", "Phường Phạm Ngũ Lão"],
      "Quận 2": ["Phường An Phú", "Phường Bình An", "Phường Thạnh Mỹ Lợi", "Phường Cát Lái", "Phường Phú Hữu"],
      "Quận 3": ["Phường Võ Thị Sáu", "Phường Phạm Ngũ Lão", "Phường Nguyễn Cư Trinh", "Phường Nguyễn Thái Bình", "Phường Bến Thành"],
      "Quận 4": ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5"],
      "Quận 5": ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5"],
      "Quận 7": ["Phường Tân Phú", "Phường Phú Mỹ", "Phường Tân Quy", "Phường Tân Kiểng", "Phường Hưng Phú"],
      "Quận 8": ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5"],
      "Quận 9": ["Phường Long Bình", "Phường Tăng Nhơn Phú A", "Phường Tăng Nhơn Phú B", "Phường Hiệp Phú", "Phường Phước Long A"]
  },
  "Hải Phòng": {
        "Quận Hồng Bàng": ["Phường Sở Dầu", "Phường Hoàng Văn Thụ", "Phường Minh Khai", "Phường Phan Bội Châu", "Phường Hạ Lý"],
        "Quận Ngô Quyền": ["Phường Máy Tơ", "Phường Cầu Đất", "Phường Lạc Viên", "Phường Đông Khê", "Phường Đồng Quốc Bình"],
        "Quận Lê Chân": ["Phường An Dương", "Phường Dư Hàng Kênh", "Phường Hàng Kênh", "Phường Vĩnh Niệm", "Phường Quán Trữ"],
        "Quận Kiến An": ["Phường Bắc Sơn", "Phường Quán Trữ", "Phường Lãm Hà", "Phường An Khê", "Phường Nam Sơn"],
        "Quận Hải An": ["Phường Đông Hải 1", "Phường Đông Hải 2", "Phường Cát Bi", "Phường Tân Thành", "Phường Hùng Vương"]
    },
    "Đà Lạt (Lâm Đồng)": {
        "Thành phố Đà Lạt": ["Phường 1", "Phường 2", "Phường 3", "Phường 4", "Phường 5", "Phường 6", "Phường 7", "Phường 8"],
        "Huyện Lâm Hà": ["Xã Đan Phượng", "Xã Lộc Châu", "Xã Liên Hiệp", "Xã Tân Tiến", "Xã Đinh Trang Thượng"],
        "Huyện Đức Trọng": ["Xã Liên Hiệp", "Xã Lạc Dương", "Xã Đạ Nhim", "Xã Tân Hội", "Xã Hiệp Thạnh"]
    },
    "Bắc Giang": {
        "Thành phố Bắc Giang": ["Phường Xương Giang", "Phường Trần Nguyên Hãn", "Phường Ngô Quyền", "Phường Dĩnh Kế", "Phường Lê Lợi"],
        "Huyện Hiệp Hòa": ["Xã Bắc Lý", "Xã Lương Phong", "Xã Hiệp Sơn", "Xã Ngọc Sơn", "Xã Thái Sơn"],
        "Huyện Việt Yên": ["Xã Quang Châu", "Xã Hương Mai", "Xã Tăng Tiến", "Xã Nghĩa Hòa", "Xã Vân Trung"]
    },
    "Thanh Hóa": {
        "Thành phố Thanh Hóa": ["Phường Lam Sơn", "Phường Tân Sơn", "Phường Ngọc Trạo", "Phường Đông Vệ", "Phường Quảng Cư"],
        "Huyện Nga Sơn": ["Xã Nga Thạch", "Xã Nga Hải", "Xã Nga Sơn", "Xã Nga Thiện", "Xã Nga Trung"],
        "Huyện Thọ Xuân": ["Xã Xuân Hòa", "Xã Xuân Giang", "Xã Thọ Lộc", "Xã Thọ Tân", "Xã Thọ Khánh"]
    },
    "Đồng Nai": {
        "Thành phố Biên Hòa": ["Phường An Bình", "Phường Tân Biên", "Phường Long Bình", "Phường Tam Hòa", "Phường Hóa An"],
        "Huyện Trảng Bom": ["Xã Bình Minh", "Xã Hố Nai", "Xã Sông Thao", "Xã Trung Dũng", "Xã Bàu Hàm"],
        "Huyện Long Thành": ["Xã Long Phước", "Xã An Phước", "Xã Bình Sơn", "Xã Bàu Cạn", "Xã Cẩm Đường"]
    },
    "Quảng Ninh": {
        "Thành phố Hạ Long": ["Phường Hồng Gai", "Phường Bãi Cháy", "Phường Cao Thắng", "Phường Cẩm Phả", "Phường Trần Hưng Đạo"],
        "Huyện Vân Đồn": ["Xã Minh Châu", "Xã Quan Lạn", "Xã Cái Rồng", "Xã Đoàn Kết", "Xã Vạn Yên"],
        "Huyện Cẩm Phả": ["Xã Quảng Hòa", "Xã Quảng Đức", "Xã Quảng Long", "Xã Cẩm Đông", "Xã Cẩm Sơn"]
    }
};


function updateDistricts() {
  const province = document.getElementById('province').value;
  const districtSelect = document.getElementById('district');
  const wardSelect = document.getElementById('ward');
  
  // Xóa các quận/huyện và phường/xã cũ
  districtSelect.innerHTML = '<option value="" selected disabled>Chọn quận/huyện</option>';
  wardSelect.innerHTML = '<option value="" selected disabled>Chọn phường/xã</option>';
  
  if (province && data[province]) {
      // Lấy danh sách quận/huyện của tỉnh
      const districts = data[province];
      
      // Cập nhật danh sách Quận/Huyện
      for (let district in districts) {
          let option = document.createElement('option');
          option.value = district;
          option.innerText = district;
          districtSelect.appendChild(option);
      }
  }
}

// Hàm cập nhật Phường/Xã khi chọn Quận/Huyện
function updateWards() {
  const province = document.getElementById('province').value;
  const district = document.getElementById('district').value;
  const wardSelect = document.getElementById('ward');
  
  // Xóa các phường/xã cũ
  wardSelect.innerHTML = '<option value="" selected disabled>Chọn phường/xã</option>';
  
  if (province && district && data[province] && data[province][district]) {
      // Lấy danh sách phường/xã của quận/huyện
      const wards = data[province][district];
      
      // Cập nhật danh sách Phường/Xã
      wards.forEach(ward => {
          let option = document.createElement('option');
          option.value = ward;
          option.innerText = ward;
          wardSelect.appendChild(option);
      });
  }
}

// Gắn sự kiện cho các dropdown
document.getElementById('province').addEventListener('change', updateDistricts);
document.getElementById('district').addEventListener('change', updateWards);


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
  var orderDate = currentdate.getDay() + "/" + currentdate.parseInt(getMonth())+1 + "/" + currentdate.getFullYear() + "-" + (currentdate.getHours()<10 ? '0' + currentdate.getHours() : currentdate.getHours()) + ":" + (currentdate.getMinutes()<10 ? '0' + currentdate.getMinutes() : currentdate.getMinutes()) + ":" + (currentdate.getSeconds()<10 ? '0' + currentdate.getSeconds() : currentdate.getSeconds());

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
