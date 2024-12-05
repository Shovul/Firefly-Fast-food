function donglichsu() {
    document.getElementById("divbao-lichsumuahang").style.display="none";
}

function capNhatLichSu() {
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    // const remember = localStorage.getItem('rememberAcc'); // Tải tài khoản nhớ
    const currentAccount = accounts[remember];
  
    if (!currentAccount) {
      console.log('Không tìm thấy tài khoản');
      return;
    }
  
    const lsmh = document.getElementById("noidungmuahang");
    lsmh.innerHTML = "";
  
    for (let i = 0; i < currentAccount.hoadon.length; i++) {
      const hoaDon = currentAccount.hoadon[i];
  
      if (hoaDon.status == "e") {
        const orderDiv = document.createElement("div");
        orderDiv.classList.add("order-item");
        
        orderDiv.innerHTML = `
          <div><b>Mã đơn hàng:</b> #${hoaDon.id}</div>
          <div><b>Tên khách hàng:</b> ${hoaDon.info.name}</div>
          <div><b>Email:</b> ${hoaDon.info.email}</div>
          <div><b>Địa chỉ:</b> ${hoaDon.info.address}</div>
          <div><b>Thời gian đặt:</b> ${hoaDon.orderTime}</div>
          <div><b>Phương thức thanh toán:</b> ${hoaDon.paymentMethod}</div>
          <div><b>Tình trạng:</b> Đã nhận hàng</div>
        `;
        lsmh.appendChild(orderDiv); // 
      }
    }
  }
    window.onload = function() {
    capNhatLichSu();
  };