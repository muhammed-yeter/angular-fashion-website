const urunler = [
  {
    id: 1,
    name: "Titanium Camping Mug",
    category: "Outdoor",
    brand: "TrailPro",
    price: 25.90,
    image: "../assets/product1.jpg",
    size: "M",
    material: "Titanium",
    comments: {
      commenter_id: 1001,
      commenter_username: "outdoorfan",
      commenter_type: "User",
      commenter_comment: "Ateşin üzerinde bile kullanabiliyorum!"
    }
  },
  {
    id: 2,
    name: "Plastic Drawer Organizer",
    category: "Indoor",
    brand: "HomeMax",
    price: 15.20,
    image: "../assets/product1.jpg",
    size: "S",
    material: "Plastic",
    comments: {
      commenter_id: 1002,
      commenter_username: "duzenlihayat",
      commenter_type: "User",
      commenter_comment: "Tüm makyaj malzemelerimi topladı!"
    }
  },
  {
    id: 3,
    name: "Metal Sunglasses Case",
    category: "Accessories",
    brand: "NeoForm",
    price: 9.99,
    image: "../assets/product1.jpg",
    size: "XS",
    material: "Metal",
    comments: {
      commenter_id: 1003,
      commenter_username: "stilsahibi",
      commenter_type: "User",
      commenter_comment: "Şık ve dayanıklı, tavsiye ederim."
    }
  },
  {
    id: 4,
    name: "Titanium Multi-tool",
    category: "Outdoor",
    brand: "TrailPro",
    price: 35.75,
    image: "../assets/product1.jpg",
    size: "S",
    material: "Titanium",
    comments: {
      commenter_id: 1004,
      commenter_username: "hayattakalan",
      commenter_type: "User",
      commenter_comment: "Kampta hayat kurtardı!"
    }
  },
  {
    id: 5,
    name: "Plastic Shoe Rack",
    category: "Indoor",
    brand: "HomeMax",
    price: 22.30,
    image: "../assets/product1.jpg",
    size: "XL",
    material: "Plastic",
    comments: {
      commenter_id: 1005,
      commenter_username: "ayakkabisever",
      commenter_type: "User",
      commenter_comment: "Yerden tasarruf sağladı."
    }
  },
  {
    id: 6,
    name: "Metal Watch Strap",
    category: "Accessories",
    brand: "NeoForm",
    price: 14.60,
    image: "../assets/product1.jpg",
    size: "XS",
    material: "Metal",
    comments: {
      commenter_id: 1006,
      commenter_username: "zamanlayici",
      commenter_type: "User",
      commenter_comment: "Şık ve konforlu."
    }
  },
  {
    id: 7,
    name: "Titanium Tent Pegs",
    category: "Outdoor",
    brand: "TrailPro",
    price: 18.45,
    image: "../assets/product1.jpg",
    size: "XS",
    material: "Titanium",
    comments: {
      commenter_id: 1007,
      commenter_username: "kampci",
      commenter_type: "User",
      commenter_comment: "Fırtınada bile yerinden oynamadı."
    }
  },
  {
    id: 8,
    name: "Plastic Kitchen Tray",
    category: "Indoor",
    brand: "HomeMax",
    price: 9.99,
    image: "../assets/product1.jpg",
    size: "L",
    material: "Plastic",
    comments: {
      commenter_id: 1008,
      commenter_username: "mutfaksever",
      commenter_type: "User",
      commenter_comment: "Pratik ve temizlemesi kolay."
    }
  },
  {
    id: 9,
    name: "Metal Pen Holder",
    category: "Accessories",
    brand: "NeoForm",
    price: 5.99,
    image: "../assets/product1.jpg",
    size: "M",
    material: "Metal",
    comments: {
      commenter_id: 1009,
      commenter_username: "caliskan",
      commenter_type: "User",
      commenter_comment: "Masanın yıldızı oldu."
    }
  },
  {
    id: 10,
    name: "Titanium Flashlight",
    category: "Outdoor",
    brand: "TrailPro",
    price: 42.80,
    image: "../assets/product1.jpg",
    size: "S",
    material: "Titanium",
    comments: {
      commenter_id: 1010,
      commenter_username: "gecegezgini",
      commenter_type: "User",
      commenter_comment: "Gece yürüyüşlerinde vazgeçilmez."
    }
  }, {
    id: 11,
    name: "Plastic Hanger Set",
    category: "Indoor",
    brand: "HomeMax",
    price: 12.40,
    image: "../assets/product1.jpg",
    size: "L",
    material: "Plastic",
    comments: {
      commenter_id: 1011,
      commenter_username: "gardropguzari",
      commenter_type: "User",
      commenter_comment: "Kıyafetlerim sonunda düzenli!"
    }
  },
  {
    id: 12,
    name: "Metal Card Wallet",
    category: "Accessories",
    brand: "NeoForm",
    price: 11.80,
    image: "../assets/product1.jpg",
    size: "XS",
    material: "Metal",
    comments: {
      commenter_id: 1012,
      commenter_username: "cuzdanmeraklisi",
      commenter_type: "User",
      commenter_comment: "Hem kompakt hem şık."
    }
  },
  {
    id: 13,
    name: "Titanium Tent Stove",
    category: "Outdoor",
    brand: "TrailPro",
    price: 63.20,
    image: "../assets/product1.jpg",
    size: "M",
    material: "Titanium",
    comments: {
      commenter_id: 1013,
      commenter_username: "dagadam",
      commenter_type: "User",
      commenter_comment: "Kış kamplarında ideal."
    }
  },
  {
    id: 14,
    name: "Plastic Table Mat",
    category: "Indoor",
    brand: "HomeMax",
    price: 6.90,
    image: "../assets/product1.jpg",
    size: "S",
    material: "Plastic",
    comments: {
      commenter_id: 1014,
      commenter_username: "yemeksever",
      commenter_type: "User",
      commenter_comment: "Lekelere karşı dayanıklı."
    }
  },
  {
    id: 15,
    name: "Metal Bookmark",
    category: "Accessories",
    brand: "NeoForm",
    price: 3.50,
    image: "../assets/product1.jpg",
    size: "XS",
    material: "Metal",
    comments: {
      commenter_id: 1015,
      commenter_username: "kitapkurtu",
      commenter_type: "User",
      commenter_comment: "Kitaplarım için şahane!"
    }
  },
  {
    id: 16,
    name: "Titanium Compass",
    category: "Outdoor",
    brand: "TrailPro",
    price: 21.75,
    image: "../assets/product1.jpg",
    size: "S",
    material: "Titanium",
    comments: {
      commenter_id: 1016,
      commenter_username: "yolcuserseri",
      commenter_type: "User",
      commenter_comment: "Her zaman yönümü buluyorum."
    }
  },
  {
    id: 17,
    name: "Plastic Cup Set",
    category: "Indoor",
    brand: "HomeMax",
    price: 8.99,
    image: "../assets/product1.jpg",
    size: "XS",
    material: "Plastic",
    comments: {
      commenter_id: 1017,
      commenter_username: "misafirsever",
      commenter_type: "User",
      commenter_comment: "Çocuklar için ideal."
    }
  },
  {
    id: 18,
    name: "Metal Belt Buckle",
    category: "Accessories",
    brand: "NeoForm",
    price: 13.20,
    image: "../assets/product1.jpg",
    size: "L",
    material: "Metal",
    comments: {
      commenter_id: 1018,
      commenter_username: "modagunlugu",
      commenter_type: "User",
      commenter_comment: "Tasarım harikası."
    }
  },
  {
    id: 19,
    name: "Titanium Hiking Pole",
    category: "Outdoor",
    brand: "TrailPro",
    price: 38.90,
    image: "../assets/product1.jpg",
    size: "XL",
    material: "Titanium",
    comments: {
      commenter_id: 1019,
      commenter_username: "dogaasigi",
      commenter_type: "User",
      commenter_comment: "Denge konusunda süper."
    }
  },
  {
    id: 20,
    name: "Plastic Storage Bin",
    category: "Indoor",
    brand: "HomeMax",
    price: 16.50,
    image: "../assets/product1.jpg",
    size: "XXL",
    material: "Plastic",
    comments: {
      commenter_id: 1020,
      commenter_username: "saklayanitoplamaci",
      commenter_type: "User",
      commenter_comment: "Oyuncaklar için mükemmel."
    }
  },
  {
    id: 21,
    name: "Metal Napkin Holder",
    category: "Accessories",
    brand: "NeoForm",
    price: 8.30,
    image: "../assets/product1.jpg",
    size: "M",
    material: "Metal",
    comments: {
      commenter_id: 1021,
      commenter_username: "sofrahazircisi",
      commenter_type: "User",
      commenter_comment: "Şıklık katıyor."
    }
  },
  {
    id: 22,
    name: "Titanium Climbing Carabiner",
    category: "Outdoor",
    brand: "TrailPro",
    price: 19.90,
    image: "../assets/product1.jpg",
    size: "S",
    material: "Titanium",
    comments: {
      commenter_id: 1022,
      commenter_username: "tirmanici",
      commenter_type: "User",
      commenter_comment: "Güven verici!"
    }
  },
  {
    id: 23,
    name: "Plastic Food Container",
    category: "Indoor",
    brand: "HomeMax",
    price: 6.80,
    image: "../assets/product1.jpg",
    size: "XS",
    material: "Plastic",
    comments: {
      commenter_id: 1023,
      commenter_username: "yemeksaklayan",
      commenter_type: "User",
      commenter_comment: "Buzlukta bile dayanıklı."
    }
  },
  {
    id: 24,
    name: "Metal Hair Clip",
    category: "Accessories",
    brand: "NeoForm",
    price: 4.20,
    image: "../assets/product1.jpg",
    size: "S",
    material: "Metal",
    comments: {
      commenter_id: 1024,
      commenter_username: "stiltutkunu",
      commenter_type: "User",
      commenter_comment: "Saçı güzel tutuyor."
    }
  },
  {
    id: 25,
    name: "Titanium Folding Knife",
    category: "Outdoor",
    brand: "TrailPro",
    price: 44.90,
    image: "../assets/product1.jpg",
    size: "M",
    material: "Titanium",
    comments: {
      commenter_id: 1025,
      commenter_username: "macerasever",
      commenter_type: "User",
      commenter_comment: "Keskinlik efsane."
    }
  },
  {
    id: 26,
    name: "Plastic Laundry Basket",
    category: "Indoor",
    brand: "HomeMax",
    price: 17.60,
    image: "../assets/product1.jpg",
    size: "XL",
    material: "Plastic",
    comments: {
      commenter_id: 1026,
      commenter_username: "temizlikci",
      commenter_type: "User",
      commenter_comment: "Evde vazgeçilmezim."
    }
  },
  {
    id: 27,
    name: "Metal Business Card Stand",
    category: "Accessories",
    brand: "NeoForm",
    price: 6.50,
    image: "../assets/product1.jpg",
    size: "XS",
    material: "Metal",
    comments: {
      commenter_id: 1027,
      commenter_username: "ofisdekorcu",
      commenter_type: "User",
      commenter_comment: "Profesyonel duruyor."
    }
  },
  {
    id: 28,
    name: "Titanium Survival Whistle",
    category: "Outdoor",
    brand: "TrailPro",
    price: 10.99,
    image: "../assets/product1.jpg",
    size: "XS",
    material: "Titanium",
    comments: {
      commenter_id: 1028,
      commenter_username: "kampustasi",
      commenter_type: "User",
      commenter_comment: "Acil durumlar için birebir!"
    }
  },
  {
    id: 29,
    name: "Plastic Cutting Board",
    category: "Indoor",
    brand: "HomeMax",
    price: 9.20,
    image: "../assets/product1.jpg",
    size: "L",
    material: "Plastic",
    comments: {
      commenter_id: 1029,
      commenter_username: "mutfaksever",
      commenter_type: "User",
      commenter_comment: "Kaymıyor, çok iyi."
    }
  },
  {
    id: 30,
    name: "Metal Picture Frame",
    category: "Accessories",
    brand: "NeoForm",
    price: 12.75,
    image: "../assets/product1.jpg",
    size: "M",
    material: "Metal",
    comments: {
      commenter_id: 1030,
      commenter_username: "anihatirasi",
      commenter_type: "User",
      commenter_comment: "Salonumun yıldızı oldu."
    }
  }
];
