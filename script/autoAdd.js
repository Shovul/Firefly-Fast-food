
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
        description: "khoai khoai khoai ngon ngon"
      },
      item2 = {
        id: 1,
        name: "Hamburger",
        price: 39000,
        type: "Burger",
        image: "images/Food/burger.jpg",
        group: "Thức ăn",
        description: "hambuger hambuger hambuger ngon ngon"
      },
      item3 = {
        id: 2,
        name: "Cheese sticks",
        price: 29000,
        type: "Khai vị",
        image: "images/Food/cheese_sticks.jfif",
        group: "Thức ăn",
        description: "phmai phmai phmai ngon ngon"
      },
      item4 = {
        id: 3,
        name: "Coca cola",
        price: 15000,
        type: "Nước ngọt",
        image: "images/Food/coca_cola.jfif",
        group: "Đồ uống",
        description: "coca coca coca ngon ngon"
      },
      item5 = {
        id: 4,
        name: "Cafe",
        price: 21000,
        type: "Cafe",
        image: "images/Food/coffee.jpg",
        group: "Đồ uống",
        description: "cafe cafe cafe ngon ngon"
      },
      item6 = {
        id: 5,
        name: "Bánh su",
        price: 20000,
        type: "Bánh ngọt",
        image: "images/Food/cream_puff.jfif",
        group: "Tráng miệng",
        description: "su su su ngon ngon"
      },
      item7 = {
        id: 6,
        name: "Gà rán",
        price: 89000,
        type: "Gà",
        image: "images/Food/fried_chicken.jpg",
        group: "Thức ăn",
        description: "ga ga ga ngon ngon"
      },
      item8 = {
        id: 7,
        name: "Kem ly",
        price: 28000,
        type: "Kem",
        image: "images/Food/ice_creame.jpg",
        group: "Tráng miệng",
        description: "kem kem kem ngon ngon"
      },
      item9 = {
        id: 8,
        name: "Lemon cake",
        price: 49000,
        type: "Bánh kem",
        image: "images/Food/lemon_cake.png",
        group: "Tráng miệng",
        description: "lemon lemon lemon ngon ngon"
      }
    ]
    localStorage.setItem('menu', JSON.stringify(menu))
  }
}
