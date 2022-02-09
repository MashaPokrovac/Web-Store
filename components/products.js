const products = [
  {
    image:
      "https://cdn.pixabay.com/photo/2017/09/21/09/25/teddy-bear-2771252__340.jpg",
    title: "Stuffed Animal",
    category: "Toys",
    price: 5,
    id: "1",
  },

  {
    image:
     "https://cdn.pixabay.com/photo/2016/06/22/21/35/toy-1474138__340.jpg",
    title: "Duck",
    category: "Dolls & Soft Toys",
    price: 3,
    id: "2",
  },

  {
    image:
      "https://cdn.pixabay.com/photo/2018/06/04/19/27/beanie-baby-3453980__340.jpg",
    title: "Dog Toy",
    category: "Toys",
    price: 5,
    id: "3",
  },

  {
    image:
      "https://images.unsplash.com/photo-1594150878496-a921e5af8907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGJhYnklMjB0b3lzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Shoes",
    category: "Action Toys",
    price: 13,
    id: "4",
  },

  {
    image:
      "https://cdn.pixabay.com/photo/2018/12/29/21/51/toys-3902272__340.jpg",
    title: "Doll Kitchen",
    category: "Action Toys",
    price: 10,
    id: "5",
  },

  {
    image:
      "https://cdn.pixabay.com/photo/2014/08/26/19/14/elephant-428287__340.jpg",
    title: "Dambolina",
    category: "Toys",
    price: 6,
    id: "6",
  },

  {
    image:
      "https://cdn.pixabay.com/photo/2016/06/20/15/46/teddy-bear-1469126__340.jpg",
    title: "Bears",
    category: "Dolls & Soft Toys",
    price: 9,
    id: "7",
  },

  {
    image:
     "https://cdn.pixabay.com/photo/2020/05/20/06/31/toys-5194951__340.jpg",

    title: "Xylophone",
    category: "Toys",
    price: 11,
    id: "8",
  },

  {
    image:
      "https://images.unsplash.com/photo-1641563817292-d2085b953e78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHx0b3klMjBkdWNrfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Plastic Toy",
    category: "Outdoor Toys",
    price: 11,
    id: "9",
  },

  {
    image:
      "https://images.unsplash.com/photo-1611957082141-c449bb2b4ada?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHRveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    title: "Abbacus",
    category: "",
    price: 11,
    id: "10",
  },

  {
    image:
      "https://cdn.pixabay.com/photo/2013/11/11/11/18/toy-208708__340.jpg",
    title: "Donkey Plush",
    category: "Toys",
    price: 10,
    id: "11",
  },

  {
    image:
      "https://images.unsplash.com/photo-1513780194864-9ac1138f93ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHRveSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Gift Bear",
    category: "Dolls & Soft Toys",
    price: 14,
    id: "12",
  },

  {
    image:
      "https://cdn.pixabay.com/photo/2017/02/21/02/19/hello-kitty-2084481__340.jpg",
    title: "Hello  Kitty",
    category: "",
    price: 3,
    id: "13",
  },

  {
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/20/09/toys-1284070__340.jpg",
    title: "Bears",
    category: "",
    price: 13,
    id: "15",
  },

  {
    image:
    "https://cdn.pixabay.com/photo/2016/03/01/14/50/flower-1230518__340.jpg",
    title: "Flower Colorful",
    category: "",
    price: 9,
    id: "16",
  },

  {
    image:
      "https://images.unsplash.com/photo-1638573387119-9144302c4b84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRveXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Wooden Toy",
    category: "",
    price: 3,
    id: "18",
  },

  {
    image:
      "https://images.unsplash.com/photo-1485460535564-844461f37f77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHx0b3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Wooden Toy",
    category: "Toys",
    price: 3,
    id: "19",
  },

  {
    image:
      "https://cdn.pixabay.com/photo/2020/05/20/06/31/toys-5194944__340.jpg",
    title: "WoodenToy",
    category: "",
    price: 6,
    id: "20",
  },

  {
    image:
      "https://cdn.pixabay.com/photo/2015/05/19/16/19/toys-773813__340.jpg",
    title: "Plastic Keys",
    category: "Toys",
    price: 4,
    id: "21",
  },

  {
    image:
      "https://images.unsplash.com/photo-1576860525375-4e7b4e00155c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGJhYnklMjB0b3lzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Knitted Clothing",
    category: "Toys",
    price: 7,
    id: "14",
  },

  {
    image:
      "https://images.unsplash.com/photo-1617791169544-1ba998b069e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGx1c2h8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Cradle",
    category: "Dolls & Soft Toys",
    price: 9,
    id: "22",
  },

  {
    image:
    "https://cdn.pixabay.com/photo/2021/04/07/07/57/book-6158371__340.jpg",
    title: "Book Toy",
    category: "",
    price: 9,
    id: "23",
  },

  {
    image:
      "https://cdn.pixabay.com/photo/2015/06/11/13/35/toy-805814__340.jpg",
    title: "Rocking Horse",
    category: "Action Toys",
    price: 5,
    id: "24",
  },

  {
    image:
      "https://images.unsplash.com/photo-1591716443294-b0614281cb3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRveXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Toy Train",
    category: "Action Toys",
    price: 13,
    id: "25",
  },
];

export default products;
