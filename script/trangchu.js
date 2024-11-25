function thaydoitrangchu()
{
    var url=window.location.href;
    var bien= url.split("?");
    switch(bien[1])
        {   
            case "trangchu":
            document.getElementsByClassName("slider")[0].style.display="none";
            document.getElementsByClassName("content")[0].style.display="none";
            break;
            case "lichsu":
            document.getElementsByClassName("slider")[0].style.display="none";
            document.getElementsByClassName("content")[0].style.display="none";
            break;
            case "nguyenlieu":
            document.getElementsByClassName("slider")[0].style.display="none";
            document.getElementsByClassName("content")[0].style.display="none";
            break;
        }
}
function hienThiTrangChu() {
    var url = window.location.href;
    var bien = url.split("?");
    if (bien[1] === "trangchu") {
        const trangchu = document.getElementById("noidungtrangchu");
        trangchu.innerHTML = `
        <div class="divtrangchu">
    <h1>Chào mừng đến với <span>Firefly Restaurant</span></h1>
    <h1>Thiên đường Ẩm Thực Nhanh Chóng và Tiện Lợi! </h1>
    <p class="modau">
        Chúng tôi tự hào mang đến cho bạn những bữa ăn ngon miệng, tiện lợi, và đầy đủ dinh dưỡng. 
        Từ những chiếc <strong>burger thơm ngon</strong>, <strong>gà rán giòn rụm</strong>, cho đến những 
        <strong>món ăn kèm hấp dẫn</strong> như khoai tây chiên, salad tươi, và nhiều hơn thế nữa. 
        Tất cả đều được chế biến từ những nguyên liệu chất lượng cao nhất.
    </p>
    <h2>Tại sao chọn chúng tôi?</h2>
    <ul>
        <li>🍔 <strong>Thực đơn đa dạng:</strong> Đáp ứng mọi khẩu vị với các món ăn quốc tế và sáng tạo.</li>
        <li>🍗 <strong>Hương vị tuyệt vời:</strong> Công thức chế biến độc quyền, mang lại trải nghiệm khó quên.</li>
        <li>🚀 <strong>Dịch vụ nhanh chóng:</strong> Đặt hàng online dễ dàng, giao hàng tận nơi chỉ trong tích tắc.</li>
        <li>💬 <strong>Ưu đãi đặc biệt:</strong> Nhiều chương trình khuyến mãi hấp dẫn đang chờ bạn khám phá!</li>
    </ul>
    <h2>Những món ăn được yêu thích nhất</h2>
    <ul>
        <li>🌟 <strong>Gà Rán Giòn Cay:</strong> Cú đấm vị giác hoàn hảo!</li>
        <li>🌟 <strong>Burger Phô Mai Tan Chảy:</strong> Đậm đà trong từng miếng cắn.</li>
        <li>🌟 <strong>Set Combo Gia Đình:</strong> Tiết kiệm hơn, vui vẻ hơn!</li>
    </ul>
    <p class="vechungtoi">
        Hãy ghé thăm <strong>Firefly Restaurant</strong> ngay hôm nay để thưởng thức những món ăn yêu thích của bạn! 
        Đặt hàng trực tuyến hoặc ghé qua cửa hàng gần nhất để trải nghiệm hương vị ẩm thực đỉnh cao!
    </p>
    <style>
.divtrangchu {
    padding: 30px;
    margin-left: 50px;
}
.divtrangchu h1 {
    font-size: 1.7rem;
    color: red;
    text-align: center;
    margin-bottom: 20px;
}   
.divtrangchu h1 span {
    color: orange;
    font-size: 1.5rem;
    text-align: center;

}
.divtrangchu .modau {
    font-size: 1.2rem;
    margin-bottom: 20px;
}
.divtrangchu h2 {
    font-size: 1.5rem;
    margin-top: 20px;
    color: brown;
    margin-left: 60px;

}
.divtrangchu ul {
    list-style: none;
    padding: 0;
    margin: 10px 0 20px 0;
}

.divtrangchu ul li {
    margin: 10px 0;
    font-size: 1.1rem;
    line-height: 1.8;
}

.divtrangchu ul li strong {
    color: #2ecc71;
}

.divtrangchu .vechungtoi {
    text-align: center;
    font-size: 1.1rem;
    margin-top: 20px;
    margin-left: 20px;
    color: #555;
}

</style>
            `;
}
}
function hienthilichsu()
{
    var url = window.location.href;
    var lichsu = url.split("?");
    if (lichsu[1] === "lichsu") {
        const lichsu = document.getElementById("noidunglichsu");
        lichsu.innerHTML = `
        <div class="divlichsu">
            <h2>Lịch Sử Phát Triển</h2>
            <p>
                <strong>Firefly Restaurant</strong> được thành lập vào năm 2024, bắt đầu với một quán ăn nhỏ chuyên phục vụ các món ăn nhanh cơ bản như <strong>burger</strong> và <strong>gà rán</strong>. 
                Nhờ sự yêu thích và ủng hộ từ khách hàng, chúng tôi đã không ngừng phát triển và mở rộng.
            </p>
            <p>
                Qua nhiều năm, Firefly đã mở rộng thực đơn, cải thiện chất lượng món ăn và dịch vụ. Hiện nay, chúng tôi tự hào là một chuỗi nhà hàng với hàng trăm chi nhánh 
                trên toàn quốc, mang đến trải nghiệm ẩm thực tiện lợi và chất lượng cao.
            </p>
            <p>
                Chúng tôi luôn cam kết mang đến cho khách hàng những bữa ăn không chỉ ngon miệng mà còn an toàn và đầy đủ dinh dưỡng. 
                Sự hài lòng của bạn chính là động lực để chúng tôi tiếp tục phát triển.
            </p>
        </div>
    <style>
.divlichsu {
    padding: 30px;
    margin: 30px;
    margin-left: 60px;
}
.divlichsu h2 {
    text-align:center;
    font-size: 1.8rem;
    color: red;
    margin-bottom: 30px;
}
.divlichsu p {
    line-height: 1.5;
    font-size: 1.1rem;
    margin-bottom: 15px;
}

.divlichsu p strong {
    color: #e67e22;
}
    </style>
        `;}
    
}
function hienthinguyenlieu()
{
    var url = window.location.href;
    var nguyenlieu = url.split("?");
    if (nguyenlieu[1] === "nguyenlieu") {
        const nguyenlieu = document.getElementById("noidungnguyenlieu");
        nguyenlieu.innerHTML = `
    <div class="divnguyenlieu">
        <h2>Nguyên Liệu Tươi Ngon </h2>
        <h2>Bí Quyết Thành Công</h2>
        <p>
            Tại <strong>Firefly Restaurant</strong>,
            chúng tôi luôn đặt tiêu chí chất lượng và sự đa dạng lên hàng đầu bằng cách luôn đưa ra thực đơn phong phú.
            Từng món ăn được chế biến từ những nguyên liệu tươi ngon, đảm bảo mang lại hương vị tuyệt vời và an toàn cho sức khỏe.
            Dưới đây là những cam kết về nguyên liệu của chúng tôi:
        </p>
        <ul>
            <li>🌱 <strong>Rau củ sạch</strong>: Nhập mới mỗi ngày từ các trang trại uy tín, đảm bảo độ tươi và dinh dưỡng.</li>
            <li>🍗 <strong>Gà công thức nguyên bản</strong>: Chọn lọc kỹ lưỡng, không sử dụng chất bảo quản, mang lại vị ngon tự nhiên.</li>
            <li>🍞 <strong>Bánh mì và vỏ burger</strong>: Nướng tươi hàng ngày để giữ độ mềm, thơm, và giòn hoàn hảo.</li>
            <li>🧂 <strong>Gia vị độc quyền</strong>: Pha chế theo công thức đặc biệt, tạo nên hương vị đặc trưng không thể nhầm lẫn.</li>
            <li>🥤 <strong>Nước uống đa dạng</strong>: Từ nước ngọt, các loại trà đến nước trái cây, tất cả đều được chọn lọc để mang đến sự tươi mát.</li>
            <li>🍦 <strong>Kem mát lạnh</strong>: Làm từ sữa nguyên chất, kem của chúng tôi luôn mịn màng và đậm vị, mang lại cảm giác ngọt ngào.</li>
        </ul>
        <p>
            Mỗi món ăn tại <strong>Firefly Restaurant</strong> không chỉ ngon miệng mà còn đảm bảo giá trị dinh dưỡng cao, mang đến cho bạn sự yên tâm và hài lòng tuyệt đối.
        </p>
    </div>
    <style>
.divnguyenlieu {
    padding: 30px;
    margin-left:60px;

}
.divnguyenlieu h2 {
    text-align: center;
    font-size: 1.8rem;
    color: green;
    margin-bottom: 20px;
}
.divnguyenlieu p {
    line-height: 1.8;
    font-size: 1.1rem;
    margin-bottom: 20px;
}

.divnguyenlieu ul {
    list-style-type: none;
    padding-left: 0;
    margin: 20px
}
.divnguyenlieu ul li {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 10px;
}
.divnguyenlieu p strong, 
.divnguyenlieu ul li strong {
    color: orange;
}
</style>
    `;
    }

}        
window.onload = function(e){ 
    thaydoitrangchu();
    hienThiTrangChu();
    hienthilichsu();
    hienthinguyenlieu();
}
