// Lấy dữ liệu từ localStorage
const accounts = JSON.parse(localStorage.getItem('accounts')); // Dữ liệu dạng JSON
const remember = localStorage.getItem('rememberAcc'); // Dữ liệu dạng chuỗi

// Kiểm tra dữ liệu
if (accounts) {
    console.log('Danh sách tài khoản:', accounts);
} else {
    console.log('Không tìm thấy dữ liệu tài khoản trong localStorage.');
}

if (remember) {
    console.log('Thông tin tài khoản nhớ:', remember);
} else {
    console.log('Không có thông tin nhớ tài khoản.');
}
function updateStatisticsFromLocalStorage() {
    // Kiểm tra nếu dữ liệu tồn tại
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    const totalAccounts = accounts.length; // Đếm số tài khoản
    const totalOrders = localStorage.getItem('totalOrders') || 0; // Mặc định 0 nếu không có
    const totalRevenue = localStorage.getItem('totalRevenue') || 0; // Mặc định 0
    const totalProducts = localStorage.getItem('totalProducts') || 0; // Mặc định 0

    // Cập nhật vào giao diện
    document.getElementById('total-accounts').innerText = totalAccounts;
    document.getElementById('total-orders').innerText = totalOrders;
    document.getElementById('total-revenue').innerText = `${Number(totalRevenue).toLocaleString()} VND`;
    document.getElementById('total-products').innerText = totalProducts;
}
const orders = [
    { id: 1, account: 'Nguyen Van A', total: 120000, items: [{ name: 'Burger', qty: 2 }, { name: 'Coke', qty: 1 }] },
    { id: 2, account: 'Tran Thi B', total: 140000, items: [{ name: 'Spaghetti', qty: 1 }, { name: 'Tea', qty: 2 }] }
];
localStorage.setItem('orders', JSON.stringify(orders));
function calculateStatistics() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    const totalProducts = orders.reduce((count, order) => count + order.items.reduce((sum, item) => sum + item.qty, 0), 0);

    // Cập nhật giao diện
    document.getElementById('total-orders').innerText = totalOrders;
    document.getElementById('total-revenue').innerText = `${totalRevenue.toLocaleString()} VND`;
    document.getElementById('total-products').innerText = totalProducts;
}
window.onload = function() {
    updateStatisticsFromLocalStorage();
    calculateStatistics();
};
