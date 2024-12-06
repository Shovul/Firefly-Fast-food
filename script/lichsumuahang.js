function donglichsu() {
<<<<<<< HEAD
    document.getElementById("divbao-lichsumuahang").style.display="none";
=======
  const lsmh = document.getElementById("noidungmuahang");
  lsmh.innerHTML = "<p>Đây là lịch sử mua hàng của bạn</p>";
>>>>>>> 4633b28ff24535582cb79ba386094283415fc56b
}
function capNhatLichSu() {
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
<<<<<<< HEAD
    // const remember = localStorage.getItem('rememberAcc'); // Tải tài khoản nhớ
=======
>>>>>>> 4633b28ff24535582cb79ba386094283415fc56b
    const currentAccount = accounts[remember];
  
    if (!currentAccount) {
      console.log('Không tìm thấy tài khoản');
      return;
    }
  
    const lsmh = document.getElementById("noidungmuahang");
    lsmh.innerHTML = "";
  
    for (let i = 0; i < currentAccount.hoadon.length; i++) {
      const hoaDon = currentAccount.hoadon[i];
<<<<<<< HEAD
  
      if (hoaDon.status == "e") {
=======
      if (hoaDon.status === "e") {
>>>>>>> 4633b28ff24535582cb79ba386094283415fc56b
        const orderDiv = document.createElement("div");
        orderDiv.classList.add("order-item");
        
        orderDiv.innerHTML = `
<<<<<<< HEAD
=======
        <div style="margin: 10px;">
>>>>>>> 4633b28ff24535582cb79ba386094283415fc56b
          <div><b>Mã đơn hàng:</b> #${hoaDon.id}</div>
          <div><b>Tên khách hàng:</b> ${hoaDon.info.name}</div>
          <div><b>Email:</b> ${hoaDon.info.email}</div>
          <div><b>Địa chỉ:</b> ${hoaDon.info.address}</div>
          <div><b>Thời gian đặt:</b> ${hoaDon.orderTime}</div>
          <div><b>Phương thức thanh toán:</b> ${hoaDon.paymentMethod}</div>
          <div><b>Tình trạng:</b> Đã nhận hàng</div>
<<<<<<< HEAD
        `;
        lsmh.appendChild(orderDiv); // 
      }
    }
  }
    window.onload = function() {
=======
          <div style="border-bottom: 3px solid black"><b</b></div>
        </div> 
        `;
        lsmh.appendChild(orderDiv);
      }
    }
  }
window.onload = function() {
>>>>>>> 4633b28ff24535582cb79ba386094283415fc56b
    capNhatLichSu();
  };