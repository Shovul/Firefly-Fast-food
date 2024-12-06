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
      },
      account2 = {
        id: 2,
        name: "phuc",
        email: "phuc@gmail.com",
        pass: "123456",
        phone: "1111111111",
        gender: 'Nam',
        avatar: "images/Icons/logo.png",
        status: "active",
        addresses: [],
        hoadon: [
          {arriveTime: "16:53:15",
          id: 0,
          info: {id: 0, name: "sang", phone: "0924201311", address: "123/123", status: "choose"},
          items: [ 
            {id: 1, name: "Hamburger", price: 39000, quantity: 1, image: "images/Food/burger.jpg", selected: true}
          ],
          orderTime: "5/111/2024-16:24:15",
          paymentMethod: "Tiền mặt",
          status: "e"}
        ],
        cart: []
      },
      account3 = {
        id: 3,
        name: "nu",
        email: "nu@gmail.com",
        pass: "123456",
        phone: "2222222222",
        gender: 'Nữ',
        avatar: "images/Icons/logo.png",
        status: "active",
        addresses: [],
        hoadon: [],
        cart: []
      },
      account4 = {
        id: 4,
        name: "sang",
        email: "sang@gmail.com",
        pass: "123456",
        phone: "3333333333",
        gender: 'Nam',
        avatar: "images/Icons/logo.png",
        status: "active",
        addresses: [],
        hoadon: [],
        cart: []
      },
      account5 = {
        id: 5,
        name: "phuong",
        email: "phuong@gmail.com",
        pass: "123456",
        phone: "4444444444",
        gender: 'Nữ',
        avatar: "images/Icons/logo.png",
        status: "active",
        addresses: [],
        hoadon: [],
        cart: []
      },
      account6 = {
        id: 6,
        name: "huy",
        email: "huy@gmail.com",
        pass: "123456",
        phone: "5555555555",
        gender: 'Nam',
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
        type: "Nước ngọt",
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
        price: 30000,
        type: "Trà",
        image: "images/Food/TraTienNhan.PNG",
        group: "Đồ uống",
        description: "Thức uống vớ vẩn cực kỳ không tốt cho sức khỏe, nhưng uống vào sẽ nở nụ cười bí ẩn"
      },
      item24 = {
        id: 23,
        name: "Trà xoài",
        price: 28000,
        type: "Trà",
        image: "images/Food/tra_xoai.png",
        group: "Đồ uống",
        description: "Trà xoài – sự hòa quyện giữa trà thơm thanh mát và vị xoài nhiệt đới ngọt ngào, mang đến thức uống tươi mới và sảng khoái cho mọi thời điểm!"
      },
      item25 = {
        id: 24,
        name: "Trà tắc",
        price: 29000,
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
      item27 = {
        id: 26,
        name: "Spaghetti Chicken",
        price: 24000,
        type: "Spaghetti",
        image: "images/Food/spaghetti_chicken.png",
        group: "Thức ăn",
        description: "Spaghetti Chicken – sợi mì Ý dai ngon hòa quyện cùng sốt đậm đà và thịt gà mềm mọng, tạo nên món ăn thơm ngon đầy hấp dẫn"
      },
      item28 = {
        id: 27,
        name: "Spaghetti Bò",
        price: 49000,
        type: "Spaghetti",
        image: "images/Food/spaghetti_bo.jpeg",
        group: "Thức ăn",
        description: "Spaghetti bò – món ăn kinh điển với sợi mì Ý mềm mịn, hòa quyện cùng sốt bò bằm đậm vị, tạo nên trải nghiệm ẩm thực đầy cuốn hút!"
      },
      item29 = {
        id: 28,
        name: "Khoai Lang",
        price: 14000,
        type: "Khai vị",
        image: "images/Food/khoailang.jpg",
        group: "Tráng miệng",
        description: "Khoai lang – hương vị ngọt tự nhiên, mềm bùi, giàu dinh dưỡng, là lựa chọn hoàn hảo cho bữa ăn nhẹ lành mạnh và thơm ngon!"
      },
      item30 = {
        id: 29,
        name: "Kem bơ Đà Lạt",
        price: 15000,
        type: "Kem",
        image: "images/Food/kem-bo-da-lat.jpg",
        group: "Tráng miệng",
        description: "Kem bơ Đà Lạt – sự hòa quyện hoàn hảo giữa kem mát lạnh và bơ tươi béo ngậy, mang đến hương vị ngọt ngào, thơm ngon đặc trưng của vùng cao nguyên!"
      },
      item31 = {
        id: 30,
        name: "Kem Vani",
        price: 5000,
        type: "Kem",
        image: "images/Food/kem_vani.png",
        group: "Tráng miệng",
        description: "Kem vani – hương vị ngọt dịu, thơm mát, với độ mịn màng tan chảy trong miệng, mang đến cảm giác sảng khoái trong từng muỗng!"
      },
      item32 = {
        id: 31,
        name: "Kem Cuộn",
        price: 15000,
        type: "Kem",
        image: "images/Food/kem_cuon.jpg",
        group: "Tráng miệng",
        description: "Kem cuộn – món tráng miệng độc đáo với lớp kem mát lạnh được cuộn lại cùng các topping thơm ngon, mang đến trải nghiệm thú vị và đầy hấp dẫn!"
      },
      item33 = {
        id: 32,
        name: "Kem Socola",
        price: 12000,
        type: "Kem",
        image: "images/Food/kem socola.jpg",
        group: "Tráng miệng",
        description: "Kem sô-cô-la – hương vị đậm đà, béo ngậy của sô-cô-la hòa quyện cùng kem mịn màng, tạo nên món tráng miệng ngọt ngào khó cưỡng!"
      },
      item34 = {
        id: 33,
        name: "Gà sốt me",
        price: 37000,
        type: "Gà",
        image: "images/Food/ga_sotme.PNG",
        group: "Thức ăn",
        description: "Gà sốt me – món ăn đậm đà với thịt gà mềm mại, được phủ lớp sốt me chua ngọt đặc trưng, mang đến hương vị thú vị và khó quên! !"
      },
      item35 = {
        id: 34,
        name: "Gà chiên giòn",
        price: 33000,
        type: "Gà",
        image: "images/Food/ga_chien.png",
        group: "Thức ăn",
        description: "Gà chiên giòn – lớp vỏ giòn rụm, vàng ươm, bên trong thịt gà mềm mọng, đậm đà hương vị, là món ăn hấp dẫn không thể bỏ qua!!"
      },
      item36 = {
        id: 35,
        name: "Dừa cà phê",
        price: 21000,
        type: "Cafe",
        image: "images/Food/dua_cafe.jpg",
        group: "Thức uống",
        description: "Dừa cà phê – sự kết hợp độc đáo giữa nước dừa tươi mát lạnh và hương vị cà phê đậm đà, mang đến thức uống mới lạ, sảng khoái và đầy hấp dẫn!"
      },
      item37 = {
        id: 36,
        name: "Chocolate Cupcakes",
        price: 26000,
        type: "Bánh kem",
        image: "images/Food/chocolate-cupcakes.jpg",
        group: "Tráng miệng",
        description: "Chocolate Cupcakes – những chiếc bánh cupcake mềm mại, phủ lớp socola ngọt ngào, thơm lừng, tạo nên món tráng miệng hoàn hảo cho mọi tín đồ yêu thích socola!"
      },
      item38 = {
        id: 37,
        name: "Cơm gà",
        price: 45000,
        type: "Cơm",
        image: "images/Food/com_ga.jpg",
        group: "Thức ăn",
        description: "Cơm gà – món ăn đơn giản nhưng đầy đậm đà, với cơm mềm dẻo, thịt gà thơm ngon, hòa quyện cùng gia vị đặc trưng, mang đến bữa ăn ngon miệng và bổ dưỡng!"
      }, 
      item39 = {
        id: 38,
        name: "Cơm bò",
        price: 45000,
        type: "Cơm",
        image: "images/Food/com_bo.png",
        group: "Thức ăn",
        description: "Cơm bò – cơm dẻo thơm kết hợp với thịt bò xào mềm, đậm đà hương vị, tạo nên một món ăn ngon miệng và đầy đủ dinh dưỡng!"
      }, 
      item40 = {
        id: 39,
        name: "Cánh gà rán",
        price: 55000,
        type: "Gà",
        image: "images/Food/canhga.jpg",
        group: "Thức ăn",
        description: "Cánh gà – món ăn hấp dẫn với lớp vỏ giòn rụm, thịt gà mềm ngọt, thấm đẫm gia vị đậm đà, mang đến hương vị tuyệt vời trong từng miếng cắn!!"
      },
       item41 = {
        id: 40,
        name: "Cà phê sữa",
        price: 15000,
        type: "Cafe",
        image: "images/Food/caffe_sua.PNG",
        group: "Thức uống",
        description: "Cà phê sữa – sự kết hợp hoàn hảo giữa cà phê đậm đà và sữa ngọt mịn, mang đến một thức uống thơm ngon, đầy năng lượng cho ngày mới!" 
      },
      item42 = {
        id: 41,
        name: "Cà phê đen đá",
        price: 15000,
        type: "Cafe",
        image: "images/Food/caffe_denda.PNG",
        group: "Thức uống",
        description: "Cà phê đen đá – hương vị đậm đà, mạnh mẽ của cà phê nguyên chất, kết hợp với đá mát lạnh, mang đến sự sảng khoái và tỉnh táo trong từng ngụm!" 
      },
      item43 = {
        id: 42,
        name: "Cacao",
        price: 20000,
        type: "Cafe",
        image: "images/Food/cacao.png",
        group: "Thức uống",
        description: "Cacao – hương vị đậm đà, ngọt ngào từ cacao nguyên chất, mang đến một thức uống ấm áp, thơm lừng và đầy năng lượng, lý tưởng cho những ngày se lạnh!" 
      },
      item44 = {
        id: 43,
        name: "Bánh bao chiên",
        price: 25000,
        type: "Khai vị",
        image: "images/Food/banhbaochien.jpg",
        group: "Thức ăn",
        description: "Bánh bao chiên – lớp vỏ bánh giòn rụm, bên trong nhân thịt, nấm và gia vị thơm ngon, tạo nên món ăn vặt hấp dẫn, đầy đủ hương vị!" 
      },
      item45 = {
        id: 44,
        name: "Bánh chuối",
        price: 15000,
        type: "Bánh ngọt",
        image: "images/Food/banh_chuoi.png",
        group: "Tráng miệng",
        description: "Bánh chuối – sự kết hợp ngọt ngào giữa chuối chín mềm và lớp bột thơm lừng, tạo nên món bánh mềm mịn, béo ngậy và đầy hương vị tự nhiên của chuối!" 
      },
      item46 = {
        id: 45,
        name: "Burger Chicken",
        price: 45000,
        type: "Burger",
        image: "images/Food/burger_chicken.jpg",
        group: "Thức ăn",
        description: "Burger gà – chiếc bánh mì mềm mại, kèm miếng gà chiên giòn, rau tươi và sốt đặc biệt, mang đến hương vị thơm ngon, đậm đà trong từng miếng cắn!" 
      },
      item47 = {
        id: 46,
        name: "Burger Rau",
        price: 37000,
        type: "Burger",
        image: "images/Food/burger_rau.jpg",
        group: "Thức ăn",
        description: "Burger rau – sự kết hợp tươi mát của rau xanh giòn, cùng với sốt nhẹ nhàng và bánh mì mềm mại, tạo nên món ăn lành mạnh, ngon miệng và đầy dinh dưỡng!" 
      },
      item48 = {
        id: 47,
        name: "Burger thập cẩm",
        price: 57000,
        type: "Burger",
        image: "images/Food/burger_thapcam.png",
        group: "Thức ăn",
        description: "Hamburger thập cẩm – sự kết hợp hoàn hảo giữa thịt bò, thịt gà, phô mai, rau tươi và sốt đặc biệt, mang đến hương vị phong phú, đầy đủ và hấp dẫn trong mỗi miếng cắn!" 
      },
      item49 = {
        id: 48,
        name: "Nước rau má",
        price: 17000,
        type: "Smoothie",
        image: "images/Food/rau_ma.png",
        group: "Thức uống",
        description: "Nước rau má – thức uống mát lạnh, thanh khiết, có vị ngọt nhẹ và hơi đắng đặc trưng, giúp giải nhiệt, thanh lọc cơ thể và bổ dưỡng cho sức khỏe!" 
      },
      item50 = {
        id: 49,
        name: "Spaghetti sốt cà chua",
        price: 34000,
        type: "Spaghetti",
        image: "images/Food/m_jolly_-_6_7-compressed_1.jpg",
        group: "Thức ăn",
        description: "Spaghetti sốt cà chua – sợi mì Ý mềm mại kết hợp với sốt cà chua tươi ngon, đậm đà và thơm phức, mang đến một món ăn đơn giản nhưng đầy hấp dẫn!" 
      },
      item51 = {
        id: 50,
        name: "Coca Cola",
        price: 15000,
        type: "Nước ngọt",
        image: "images/Food/coca_cola.jfif",
        group: "Thức uống",
        description: "Coca – thức uống giải khát nổi tiếng với vị ngọt, sảng khoái và bọt nước đặc trưng, mang lại cảm giác tươi mới và đầy năng lượng!" 
      },
      item52 = {
        id: 51,
        name: "Mirinda cam",
        price: 15000,
        type: "Nước ngọt",
        image: "images/Food/mirinda.png",
        group: "Thức uống",
        description: "Mirinda cam – thức uống giải khát có vị cam tươi mát, ngọt ngào và sảng khoái, mang đến cảm giác tươi mới trong từng ngụm!" 
      },
      item53 = {
        id: 52,
        name: "7 Up",
        price: 15000,
        type: "Nước ngọt",
        image: "images/Food/7up.png",
        group: "Thức uống",
        description: "7UP – nước giải khát vị chanh tươi mát, sảng khoái, với hương vị nhẹ nhàng và bọt nước đặc trưng, mang đến sự sảng khoái trong từng ngụm!" 
      },
      item54 = {
        id: 53,
        name: "Pepsi",
        price: 15000,
        type: "Nước ngọt",
        image: "images/Food/pepsi.png",
        group: "Thức uống",
        description: "Pepsi – thức uống giải khát với vị ngọt đặc trưng, sảng khoái và bọt nước tươi mát, mang đến cảm giác đầy năng lượng và thư giãn trong mỗi lần thưởng thức!" 
      }


    ]
    localStorage.setItem('menu', JSON.stringify(menu))
  }
}
