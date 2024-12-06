
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
      },
      item10 = {
        id: 9,
        name: "Salad cà chua",
        price: 25000,
        type: "Khai vị",
        image: "images/Food/salad_tomato.png",
        group: "Thức ăn",
        description: "Salad cà chua tươi mát, kết hợp vị ngọt thanh của cà chua chín mọng với dầu ô liu và rau thơm, mang đến món ăn nhẹ nhàng, bổ dưỡng và đầy hấp dẫn"
      },
      item11 = {
        id: 10,
        name: "Salad rau củ",
        price: 25000,
        type: "Khai vị",
        image: "images/Food/salad_raucu.jpg",
        group: "Thức ăn",
        description: "Salad rau củ tươi ngon, kết hợp đa dạng các loại rau củ giòn ngọt và sốt thanh nhẹ, mang đến món ăn bổ dưỡng và tràn đầy sức sống"
      },
      item12 = {
        id: 11,
        name: "Salad rau kèm trứng",
        price: 30000,
        type: "Khai vị",
        image: "images/Food/salad_trung_rau.jpg",
        group: "Thức ăn",
        description: "Salad rau tươi kết hợp trứng luộc béo bùi, hòa quyện cùng sốt thanh nhẹ, tạo nên món ăn đơn giản mà đầy dinh dưỡng"
      },
      item13 = {
        id: 12,
        name: "Mango Smoothie",
        price: 25000,
        type: "Smoothie",
        image: "images/Food/mango_smoothie.jpg",
        group: "Đồ uống",
        description: "Mango smoothie mát lạnh, hòa quyện vị ngọt thơm tự nhiên của xoài chín cùng sự béo mịn của sữa, mang đến ly thức uống sảng khoái và đầy dinh dưỡng"
      },
      item14 = {
        id: 13,
        name: "Avocado Smoothie",
        price: 25000,
        type: "Smoothie",
        image: "images/Food/avocado_smoothie.jpg",
        group: "Đồ uống",
        description: "Avocado smoothie béo mịn, kết hợp vị thơm ngậy của bơ tươi với sự ngọt dịu nhẹ nhàng, mang đến thức uống bổ dưỡng và đầy năng lượng"
      },
      item15 = {
        id: 14,
        name: "Banana Smoothie",
        price: 25000,
        type: "Smoothie",
        image: "images/Food/banana_smoothie.jpg",
        group: "Đồ uống",
        description: "Banana smoothie ngọt dịu, hòa quyện vị thơm đặc trưng của chuối chín cùng độ mịn màng của sữa, là lựa chọn lý tưởng cho một thức uống giàu năng lượng"
      },
      item16 = {
        id: 15,
        name: "Strawberry Smoothie",
        price: 30000,
        type: "Smoothie",
        image: "images/Food/str_smoothie.jpg",
        group: "Đồ uống",
        description: "Strawberry smoothie chua ngọt hài hòa, kết hợp vị tươi mát của dâu tây chín mọng và sự mịn màng của sữa, mang đến thức uống sảng khoái và bổ dưỡng"
      },
      item17 = {
        id: 16,
        name: "Nước suối",
        price: 15000,
        type: "Nước",
        image: "images/Food/aquafina-500ml.jpg",
        group: "Đồ uống",
        description: "Nước suối Aquafina tinh khiết, được lọc qua quy trình hiện đại, mang đến sự tươi mát và an toàn tuyệt đối cho sức khỏe"
      },
      item18 = {
        id: 17,
        name: "Bánh su kem",
        price: 29000,
        type: "Bánh kem",
        image: "images/Food/banh_su.png",
        group: "Tráng miệng",
        description: "Bánh Su Kem với lớp vỏ mềm mịn, nhân kem thơm béo"
      },
      item19 = {
        id: 18,
        name: "Bánh Phô Mai Caramel",
        price: 35000,
        type: "Bánh kem",
        image: "images/Food/banh_caramel.png",
        group: "Tráng miệng",
        description: "Bánh Phô Mai Caramel mềm mịn, tan chảy với độ thơm béo của phô mai, thêm caramel bắt mắt và ngọt ngào"
      },
      item20 = {
        id: 19,
        name: "Bánh Croissant",
        price: 29000,
        type: "Bánh ngọt",
        image: "images/Food/banh_Croissant.png",
        group: "Tráng miệng",
        description: "Bánh Croissant vỏ giòn thơm bơ, xốt mịn mềm tan"
      },
      item21 = {
        id: 20,
        name: "Bánh Tiramisu ",
        price: 35000,
        type: "Bánh kem",
        image: "images/Food/banh_tiramisu.png",
        group: "Tráng miệng",
        description: "Bánh Tiramisu lạnh thơm mát với nguyên liệu ca-cao Việt Nam, thêm phô mai ít béo và hương thơm nhẹ nhàng của Rhum"
      },
      item22 = {
        id: 21,
        name: "Bánh Sữa Chua Phô Mai ",
        price: 35000,
        type: "Bánh kem",
        image: "images/Food/banh_chesse.png",
        group: "Tráng miệng",
        description: "Bánh Sữa Chua Phô Mai lớp bánh mềm mịn, tan chảy với độ chua nhẹ nhàng của sữa chua cùng phô mai thơm béo"
      },
      item23 = {
        id: 22,
        name: "Trà tiên nhân",
        price: 24000,
        type: "Trà",
        image: "images/Food/TraTienNhan.PNG",
        group: "Đồ uống",
        description: "Thức uống vớ vẩn cực kỳ không tốt cho sức khỏe, nhưng uống vào sẽ nở nụ cười bí ẩn"
      },
      item24 = {
        id: 23,
        name: "Trà xoài",
        price: 24000,
        type: "Trà",
        image: "images/Food/tra_xoai.png",
        group: "Đồ uống",
        description: "Trà xoài – sự hòa quyện giữa trà thơm thanh mát và vị xoài nhiệt đới ngọt ngào, mang đến thức uống tươi mới và sảng khoái cho mọi thời điểm!"
      },
      item25 = {
        id: 24,
        name: "Trà tắc",
        price: 24000,
        type: "Trà",
        image: "images/Food/tra_tac.png",
        group: "Đồ uống",
        description: "Trà tắc – hương vị chua nhẹ của tắc hòa quyện cùng trà thanh mát, tạo nên thức uống giải khát thơm ngon và đầy sảng khoái!"
      },
      item26 = {
        id: 25,
        name: "Trà dâu",
        price: 24000,
        type: "Trà",
        image: "images/Food/tra_dau.png",
        group: "Đồ uống",
        description: "Trà dâu – vị ngọt dịu và chua nhẹ từ dâu tươi kết hợp cùng trà thanh mát, mang đến thức uống hấp dẫn và tươi mới khó cưỡng!"
      },
      
    ]
    localStorage.setItem('menu', JSON.stringify(menu))
  }
}
