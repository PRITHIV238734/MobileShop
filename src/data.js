const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 79999,
    category: "mobiles",
    image: "/images/iphone15.jpg",
    description: "Apple iPhone 15 with A16 Bionic chip, Super Retina XDR Display.",
    details: {
      brand: "Apple",
      model: "iPhone 15",
      display: "6.1-inch Super Retina XDR",
      processor: "A16 Bionic",
      camera: "48MP Main + 12MP Ultra Wide",
      battery: "3,279 mAh",
      os: "iOS 17",
      warranty: "1 Year Manufacturer Warranty"
    }
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 69999,
    category: "mobiles",
    image: "/images/samsunggalaxy.jpg",
    description: "Samsung Galaxy S23 with Snapdragon 8 Gen 2, 120Hz AMOLED Display.",
    details: {
      brand: "Samsung",
      model: "Galaxy S23",
      display: "6.1-inch Dynamic AMOLED 2X, 120Hz",
      processor: "Snapdragon 8 Gen 2",
      camera: "50MP Main + 12MP Ultra Wide + 10MP Telephoto",
      battery: "3,900 mAh",
      os: "Android 13",
      warranty: "1 Year Manufacturer Warranty"
    }
  },
   {
    id: 3,
    name: "Lenovo LOQ 12th Gen",
    price: 39000,
    category: "laptops",
    image: "/images/lenovoloq12thgen.jpg",
    description: " A16 Bionic chip, Super Retina XDR Display.",
    details: {
      brand: "Lenovo",
      model: "LOQ 12th Gen",
      display: "14-inch Super Retina XDR",
      processor: "A16 Bionic",
      camera: "4Mp Front",
      battery: "4,279 mAh",
      os: "Windows 11",
      warranty: "1 Year Manufacturer Warranty"
    }
  },
   {
    id: 4,
    name: "Dell Pro Plus",
    price: 79999,
    category: "laptops",
    image: "/images/dellproplus.jpg",
    description: " A16 Bionic chip, Super Retina XDR Display.",
    details: {
      brand: "Dell",
      model: "Dell pro plus",
      display: "13-inch Super Retina XDR",
      processor: "intel",
      camera: "5mp Front",
      battery: "3,279 mAh",
      os: "windows 11",
      warranty: "1 Year Manufacturer Warranty"
    }
  },
   {
    id: 5,
    name: "Asus Vivobook Go",
    price: 59999,
    category: "laptops",
    image: "/images/asusvivobookgo.jpg",
    description: " Bionic chip, Super Retina XDR Display.",
    details: {
      brand: "Asus",
      model: "vivobook go",
      display: "14.5-inch Super Retina XDR",
      processor: "intel",
      camera: "4mp Front",
      battery: "5,279 mAh",
      os: "windows 11",
      warranty: "1 Year Manufacturer Warranty"
    }
  },
   {
    id: 6,
    name: "Hp Victus Gaming",
    price: 79999,
    category: "laptops",
    image: "/images/hpvictusgaming.jpg",
    description: " A16 Bionic chip, Super Retina XDR Display.",
    details: {
      brand: "Hp",
      model: "victus",
      display: "15-inch Super Retina XDR",
      processor: "intel",
      camera: "4MP front",
      battery: "3,279 mAh",
      os: "windows 11",
      warranty: "1 Year Manufacturer Warranty"
    }
  },
   {
    id: 7,
    name: "Acer Aspire 7",
    price: 49999,
    category: "laptops",
    image: "/images/aceraspire7.jpg",
    description: " A16 Bionic chip, Super Retina XDR Display.",
    details: {
      brand: "Acer",
      model: "Aspire 7",
      display: "13-inch Super Retina XDR",
      processor: "intel",
      camera: "4MP front",
      battery: "4,279 mAh",
      os: "windows 11",
      warranty: "1 Year Manufacturer Warranty"
    }
  },
   {
    id: 8,
    name: "Nothing Phone 3a",
    price: 69999,
    category: "mobiles",
    image: "/images/nothingphone3a.jpg",
    description: "Android Mobile  with A16 Bionic chip, Super Retina XDR Display.",
    details: {
      brand: "Nothing phone",
      model: "3a",
      display: "6.1-inch Super Retina XDR",
      processor: "A16 Bionic",
      camera: "48MP Main + 12MP Ultra Wide",
      battery: "3,279 mAh",
      os: "oxygen os",
      warranty: "1 Year Manufacturer Warranty"
    }
  },
   {
    id: 8,
    name: "Vivo X Fold 5",
    price: 68999,
    category: "mobiles",
    image: "/images/vivoxfold5.jpg",
    description: "Apple iPhone 15 with A16 Bionic chip, Super Retina XDR Display.",
    details: {
      brand: "Vivo",
      model: "fold 5",
      display: "6.1-inch Super Retina XDR",
      processor: "A16 Bionic",
      camera: "48MP Main + 12MP Ultra Wide",
      battery: "3,279 mAh",
      os: "oxygen os",
      warranty: "1 Year Manufacturer Warranty"
    }
  },
   {
    id: 9,
    name: "Xiaomi 15",
    price: 79999,
    category: "mobiles",
    image: "/images/xiaomi15.jpg",
    description: " A16 Bionic chip, Super Retina XDR Display.",
    details: {
      brand: "Xiaomi",
      model: "15",
      display: "6.1-inch Super Retina XDR",
      processor: "A16 Bionic",
      camera: "48MP Main + 12MP Ultra Wide",
      battery: "3,279 mAh",
      os: "oxygen os",
      warranty: "1 Year Manufacturer Warranty"
    }
  },
   {
    id: 10,
    name: "Realme 11 Pro",
    price: 79499,
    category: "mobiles",
    image: "/images/realme11pro.jpg",
    description: " A16 Bionic chip, Super Retina XDR Display.",
    details: {
      brand: "Realme",
      model: "11 pro",
      display: "6.1-inch Super Retina XDR",
      processor: "A16 Bionic",
      camera: "48MP Main + 12MP Ultra Wide",
      battery: "3,279 mAh",
      os: "oxygen os",
      warranty: "1 Year Manufacturer Warranty"
    }
  },
   {
    id: 11,
    name: "Google Pixel 9 Pro",
    price: 79999,
    category: "mobiles",
    image: "/images/googlepixel9pro.jpg",
    description: " A16 Bionic chip, Super Retina XDR Display.",
    details: {
      brand: "Google Pixel",
      model: "9 pro",
      display: "6.1-inch Super Retina XDR",
      processor: "A16 Bionic",
      camera: "48MP Main + 12MP Ultra Wide",
      battery: "3,279 mAh",
      os: "oxygen os",
      warranty: "1 Year Manufacturer Warranty"
    }
  }
];

export default products;
