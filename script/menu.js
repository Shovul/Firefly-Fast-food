// Khởi tạo số lượng sản phẩm trên mỗi trang và trạng thái trang hiện tại
const ITEMS_PER_PAGE = 3; // Số sản phẩm trên mỗi trang
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
  const startIndex = (currentPage[type] - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
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
        <img class="hinhanh" src="${item.image}" alt="${item.name}">
      </div>
      <div class="container-items"> <h3>${item.name}</h3></div>
      <div class="container-items"> <b>${item.price} VND</b> </div>
      <div class="container-items"> <p>${item.description}</p></div>
    `;
    container.appendChild(div);
  });

  // Cập nhật phân trang
  updatePagination(type, dataList);
}

// Hàm cập nhật thông tin phân trang
function updatePagination(type, dataList) {
  const totalPages = Math.ceil(dataList.length / ITEMS_PER_PAGE);
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
  } else if (direction === "next" && currentPage[type] < Math.ceil(dataList.length / ITEMS_PER_PAGE)) {
    currentPage[type]++;
  }

  loadMenuByPage(type, dataList);
}

// Khởi tạo menu hiển thị
function initializeMenu() {
  loadMenuByPage("food", foods);
  loadMenuByPage("drink", drinks);
  loadMenuByPage("dessert", desserts);
}

// Gọi hàm khởi tạo
initializeMenu();
