
function createAccount() {
  if(localStorage.getItem('accounts') == null) {
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
<<<<<<< HEAD
  if(localStorage.getItem('menu') == null) {
    const menu = [
      item1 = {
        id: 0,
        name: "Khoai tây",
        price: 20000,
        type: "Khai vị",
        image: "images/food/french_fries.png",
        group: "Thức ăn",
        description: "khoai khoai khoai ngon ngon"
      },
      item2 = {
        id: 1,
        name: "Hamburger",
        price: 39000,
        type: "Burger",
        image: "images/food/burger.jpg",
        group: "Thức ăn",
        description: "hambuger hambuger hambuger ngon ngon"
      },
      item3 = {
        id: 2,
        name: "Cheese sticks",
        price: 29000,
        type: "Khai vị",
        image: "images/food/cheese_sticks.jfif",
        group: "Thức ăn",
        description: "phmai phmai phmai ngon ngon"
      },
      item4 = {
        id: 3,
        name: "Coca cola",
        price: 15000,
        type: "Nước ngọt",
        image: "images/food/coca_cola.jfif",
        group: "Đồ uống",
        description: "coca coca coca ngon ngon"
      },
      item5 = {
        id: 4,
        name: "Cafe",
        price: 21000,
        type: "Cafe",
        image: "images/food/coffee.jpg",
        group: "Đồ uống",
        description: "cafe cafe cafe ngon ngon"
      },
      item6 = {
        id: 5,
        name: "Bánh su",
        price: 20000,
        type: "Bánh ngọt",
        image: "images/food/cream_puff.jfif",
        group: "Tráng miệng",
        description: "su su su ngon ngon"
      },
      item7 = {
        id: 6,
        name: "Gà rán",
        price: 89000,
        type: "Gà",
        image: "images/food/fried_chicken.jpg",
        group: "Thức ăn",
        description: "ga ga ga ngon ngon"
      },
      item8 = {
        id: 7,
        name: "Kem ly",
        price: 28000,
        type: "Kem",
        image: "images/food/ice_creame.jpg",
        group: "Tráng miệng",
        description: "kem kem kem ngon ngon"
      },
      item9 = {
        id: 8,
        name: "Lemon cake",
        price: 49000,
        type: "Bánh kem",
        image: "images/food/lemon_cake.png",
        group: "Tráng miệng",
        description: "lemon lemon lemon ngon ngon"
      }
    ]
    localStorage.setItem('menu', JSON.stringify(menu))
  }
=======
  const menu = [
    item1 = {
      id: 0,
      name: "Khoai tây",
      price: 20000,
      type: "khoai tay",
      image: "images/food/french_fries.png",
      group: "Thức ăn",
      description: "khoai khoai khoai ngon ngon"
    },
    item2 = {
      id: 1,
      name: "Hamburger",
      price: 39000,
      type: "burger",
      image: "images/food/burger.jpg",
      group: "Thức ăn",
      description: "hambuger hambuger hambuger ngon ngon"
    },
    item3 = {
      id: 2,
      name: "Cheese sticks",
      price: 29000,
      type: "khoai tay",
      image: "images/food/cheese_sticks.jfif",
      group: "Thức ăn",
      description: "phmai phmai phmai ngon ngon"
    },
    item4 = {
      id: 3,
      name: "Coca cola",
      price: 15000,
      type: "soda",
      image: "images/food/coca_cola.jfif",
      group: "Đồ uống",
      description: "coca coca coca ngon ngon"
    },
    item5 = {
      id: 4,
      name: "Cafe",
      price: 20000,
      type: "coffee",
      image: "images/food/coffee.jpg",
      group: "Đồ uống",
      description: "cafe cafe cafe ngon ngon"
    },
    item6 = {
      id: 5,
      name: "Bánh su",
      price: 20000,
      type: "banh",
      image: "images/food/cream_puff.jfif",
      group: "Tráng miệng",
      description: "su su su ngon ngon"
    },
    item7 = {
      id: 6,
      name: "Gà rán",
      price: 89000,
      type: "fried chicken1",
      image: "images/food/fried_chicken.jpg",
      group: "Thức ăn",
      description: "ga ga ga ngon ngon"
    },
    item8 = {
      id: 7,
      name: "Kem ly",
      price: 28000,
      type: "ice cream",
      image: "images/food/ice_creame.jpg",
      group: "Tráng miệng",
      description: "kem kem kem ngon ngon"
    },
    item9 = {
      id: 8,
      name: "Lemon cake",
      price: 49000,
      type: "banh",
      image: "images/food/lemon_cake.png",
      group: "Tráng miệng",
      description: "lemon lemon lemon ngon ngon"
    },
    item10={
      id:9,
      name:"Ga chien",
      price: 45000,
      type:"fired chicken2",
      image:"images/Food/BJ.jpg",
      group:"Thức ăn",
      description:"Mon cua Phuc lam"
    },
    item11={
      id:10,
      name:"Ga chien",
      price: 45000,
      type:"fired chicken2",
      image:"images/Food/BJ.jpg",
      group:"Thức ăn",
      description:"Mon cua Phuc lam"
    },
  ]
  localStorage.setItem('menu', JSON.stringify(menu))
>>>>>>> fb985640abc8512460d1bcbfa7bceff2a83c3833
}
