// Số sản phẩm tối đa trên mỗi trang
const ITEMS_PER_PAGE = {
  food: 6,      // 6 sản phẩm cho Thức ăn
  drink: 3,     // 3 sản phẩm cho Đồ uống
  dessert: 3,   // 3 sản phẩm cho Tráng miệng
};

let currentPage = {
  food: 1,
  drink: 1,
  dessert: 1,
};

// Lấy dữ liệu menu từ localStorage
let menu = JSON.parse(localStorage.getItem('menu')) || [];
let foods = menu.filter(item => item.group === "Thức ăn");
let drinks = menu.filter(item => item.group === "Đồ uống");
let desserts = menu.filter(item => item.group === "Tráng miệng");

// Hàm hiển thị sản phẩm theo trang
function loadMenuByPage(type, dataList) {
  const startIndex = (currentPage[type] - 1) * ITEMS_PER_PAGE[type];
  const endIndex = startIndex + ITEMS_PER_PAGE[type];
  const paginatedItems = dataList.slice(startIndex, endIndex);

  // Xác định container để hiển thị sản phẩm
  const container = document.getElementById(`${type}-items`);
  container.innerHTML = ""; // Xóa sản phẩm cũ

  // Hiển thị từng sản phẩm trong trang hiện tại
  paginatedItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "items-content";
    div.innerHTML = `
      <div>
          <img class="hinhanh" src ="${item.image}">
        </div> 
        <div class="container-items"> <h3>${item.name}</h3></div>
        <div class="container-items"> <b>${item.price}</b> </div>
        <div class="container">
          <div class="container-items">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
          </div>
          <div class="container-items" id="${item.id}" onclick="mochitiet(this)"><b>Chi tiết</b></div>
        </div>
    `;
    container.appendChild(div);
  });

  // Cập nhật phân trang
  updatePagination(type, dataList);
}

// Hàm cập nhật thông tin phân trang
function updatePagination(type, dataList) {
  const totalPages = Math.ceil(dataList.length / ITEMS_PER_PAGE[type]);
  const pageNumbers = document.getElementById(`${type}-page-numbers`);
  pageNumbers.textContent = `Trang ${currentPage[type]} / ${totalPages}`;

  // Điều khiển nút "Trang trước" và "Trang sau"
  const prevButton = document.querySelector(`#${type}-pagination button:first-child`);
  const nextButton = document.querySelector(`#${type}-pagination button:last-child`);

  prevButton.disabled = currentPage[type] === 1;
  nextButton.disabled = currentPage[type] === totalPages;
}

// Hàm xử lý chuyển trang
function changePage(type, direction) {
  const dataList = {
    food: foods,
    drink: drinks,
    dessert: desserts,
  }[type];

  if (direction === "prev" && currentPage[type] > 1) {
    currentPage[type]--;
  } else if (direction === "next" && currentPage[type] < Math.ceil(dataList.length / ITEMS_PER_PAGE[type])) {
    currentPage[type]++;
  }

  loadMenuByPage(type, dataList);
}

// Hàm xử lý khi bấm vào nút "Chi tiết"
function viewDetails(itemId) {
  const item = menu.find(i => i.id === itemId);
  if (item) {
    alert(`Thông tin chi tiết:\nTên: ${item.name}\nGiá: ${item.price} VND\nMô tả: ${item.description}`);
  }
}

// Khởi tạo menu hiển thị
function initializeMenu() {
  loadMenuByPage("food", foods);
  loadMenuByPage("drink", drinks);
  loadMenuByPage("dessert", desserts);
}

// Gọi hàm khởi tạo
initializeMenu();
