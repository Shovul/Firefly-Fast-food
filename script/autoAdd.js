
function createAccount() {
  if(localStorage.getItem('accounts') == null) {
    localStorage.setItem('rememberAcc', 0)
    const accounts = [
        admin = {
        id: 0,
        name: "admin",
        email: "firefly@gmail.com",
        pass: "123456",
        phone: "0924501312",
        gender: null,
        avatar: "images/Icons/logo.png",
        status: "active",
        addresses: [],
        hoadon: [],
        cart: []
      },
      admin2 = {
        id: 1,
        name: "quanTri",
        email: "fireflyCEO@gmail.com",
        pass: "123456",
        phone: "0776551132",
        gender: null,
        avatar: "images/Icons/logo.png",
        status: "active",
        addresses: [],
        hoadon: [],
        cart: []
      }
    ]
    localStorage.setItem('accounts', JSON.stringify(accounts))
  }
}
function createMenu() {
  if(localStorage.getItem('menu') == null) {
    const menu = [
      item1 = {
        id: 0,
        name: "Khoai tây",
        price: 20000,
        type: "Khai vị",
        image: "images/Food/french_fries.png",
        group: "Thức ăn",
        description: "Khoai tây chiên – giòn rụm bên ngoài, mềm mịn bên trong, được chế biến từ khoai tây tươi ngon nhất và hoàn hảo cho mọi bữa ăn!"
      },
      item2 = {
        id: 1,
        name: "Hamburger",
        price: 39000,
        type: "Burger",
        image: "images/Food/burger.jpg",
        group: "Thức ăn",
        description: "Hamburger – sự kết hợp hoàn hảo giữa bánh mì mềm mại, nhân thịt đậm đà, rau tươi giòn và sốt đặc biệt, mang đến hương vị khó quên!"
      },
      item3 = {
        id: 2,
        name: "Cheese sticks",
        price: 29000,
        type: "Khai vị",
        image: "images/Food/cheese_sticks.jfif",
        group: "Thức ăn",
        description: "Cheese sticks – phô mai que vàng giòn, tan chảy bên trong, mang đến hương vị béo ngậy và hấp dẫn trong từng miếng cắn!"
      },
      item4 = {
        id: 3,
        name: "Coca cola",
        price: 15000,
        type: "Nước ngọt",
        image: "images/Food/coca_cola.jfif",
        group: "Đồ uống",
        description: "Coca-Cola – thức uống giải khát sảng khoái, với hương vị độc đáo và cảm giác mát lạnh đầy năng lượng!"
      },
      item5 = {
        id: 4,
        name: "Cafe",
        price: 21000,
        type: "Cafe",
        image: "images/Food/coffee.jpg",
        group: "Đồ uống",
        description: "Cà phê – hương vị đậm đà, thơm nồng, mang đến nguồn năng lượng tỉnh táo và cảm giác thư thái cho ngày mới!"
      },
      item6 = {
        id: 5,
        name: "Bánh su",
        price: 20000,
        type: "Bánh ngọt",
        image: "images/Food/cream_puff.jfif",
        group: "Tráng miệng",
        description: "Bánh su – lớp vỏ mềm mịn hòa quyện cùng nhân kem béo ngậy, tạo nên hương vị ngọt ngào khó cưỡng"
      },
      item7 = {
        id: 6,
        name: "Gà rán",
        price: 89000,
        type: "Gà",
        image: "images/Food/fried_chicken.jpg",
        group: "Thức ăn",
        description: "Gà rán – lớp vỏ vàng giòn rụm, thịt gà mềm mọng nước, đậm đà hương vị, mang đến trải nghiệm ngon miệng khó quên!"
      },
      item8 = {
        id: 7,
        name: "Kem ly",
        price: 28000,
        type: "Kem",
        image: "images/Food/ice_creame.jpg",
        group: "Tráng miệng",
        description: "Kem ly – mát lạnh, mịn màng, hòa quyện hương vị ngọt ngào, mang lại cảm giác sảng khoái trong từng muỗng!"
      },
      item9 = {
        id: 8,
        name: "Lemon cake",
        price: 49000,
        type: "Bánh kem",
        image: "images/Food/lemon_cake.png",
        group: "Tráng miệng",
        description: "Lemon cake – bánh chanh mềm mịn, hương chanh tươi mát hòa quyện cùng vị ngọt dịu, tạo nên món tráng miệng thơm ngon khó cưỡng!"
      }
    ]
    localStorage.setItem('menu', JSON.stringify(menu))
  }
}
