let lichSuMuaHang = [];

function donglichsu() {
    const thoat = document.getElementById("divbao-lichsumuahang");
    if (thoat) {
        thoat.style.display = "none";  
    }
}

function capNhatLichSu() {
    let account = JSON.parse(localStorage.getItem('account[remember]'));

    if (!account) {
        console.log("Không có tài khoản đăng nhập.");
        return;
    }

    if (account.hoadon && Array.isArray(account.hoadon)) {
        for (let i = 0; i < account.hoadon.length; i++) {
            let hoaDon = account.hoadon[i];

            if (hoaDon.status === 'e') {
                lichSuMuaHang.push(hoaDon); 
            }
        }
    }

    hienThiLichSuMuaHang(lichSuMuaHang);
}

function hienThiLichSuMuaHang(lichSu) {
    const ndung = document.getElementById('noidungmuahang');
    ndung.innerHTML = '';  

    for (let i = 0; i < lichSu.length; i++) {
        const hoaDon = lichSu[i];
        const div = document.createElement('div');
        div.innerHTML = `
            <div><b>Mã đơn hàng:</b> ${hoaDon.id}</div>
            <div><b>Tên khách hàng:</b> ${hoaDon.info.name}</div>
            <div><b>Email:</b> ${hoaDon.info.email}</div>
            <div><b>Tình trạng:</b> Đã nhận hàng</div>
            <div><b>Ngày Order:</b> ${hoaDon.orderTime}</div>
            <div><b>Tổng tiền:</b> $${hoaDon.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</div>
            <button onclick="xemChiTiet(${hoaDon.id})">Chi tiết đơn hàng</button>
            <hr>
        `;
        ndung.appendChild(div); 
    }
}

// window.onload = function() {
//     capNhatLichSu();
//     hienThiLichSuMuaHang();
// };