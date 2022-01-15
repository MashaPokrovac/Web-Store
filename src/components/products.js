const products = [
  {
    image:
      "https://images.unsplash.com/photo-1588090644556-14707d0e886a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG95fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    title: "Stuffed Animal",
    category: "Toys",
    price: 25,
    id: "1",
  },

  {
    image:
      "https://images.unsplash.com/photo-1580597095981-8d21aa8cdfed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzI3fHxiYWJ5JTIwdG95c3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Duck",
    category: "Dolls & Soft Toys",
    price: 3,
    id: "2",
  },

  {
    image:
      "https://images.unsplash.com/photo-1560961911-0ac252fecc71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzIzfHx0b3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Lego",
    category: "Toys",
    price: 55,
    id: "3",
  },

  {
    image:
      "https://images.unsplash.com/photo-1594150878496-a921e5af8907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGJhYnklMjB0b3lzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Shoes",
    category: "Action Toys",
    price: 25,
    id: "4",
  },

  {
    image:
      "https://images.unsplash.com/photo-1581557991964-125469da3b8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Robot",
    category: "Action Toys",
    price: 10,
    id: "5",
  },

  {
    image:
      "https://images.unsplash.com/photo-1638803283078-e6b250007715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzY3fHxuZXdib3JuJTIwdG95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    title: "Lamp",
    category: "Toys",
    price: 45,
    id: "6",
  },

  {
    image:
      "https://images.unsplash.com/photo-1615486363973-f79d875780cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Wool",
    category: "Dolls & Soft Toys",
    price: 9,
    id: "7",
  },

  {
    image:
      "https://images.unsplash.com/photo-1509781827353-fb95c262fc40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDk3fHx0b3klMjBzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Xylophone",
    category: "Toys",
    price: 29,
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
    price: 20,
    id: "10",
  },

  {
    image:
      "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHRveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    title: "Wooden",
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
      "https://images.unsplash.com/photo-1577122602163-32704f11893c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDEzfHx0b3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Wooden",
    category: "",
    price: 90,
    id: "13",
  },

  {
    image:
      "https://images.unsplash.com/photo-1607982909464-4c5b3b6d211e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRveXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Soft Toy",
    category: "Action Toys",
    price: 13,
    id: "15",
  },

  {
    image:
      "https://images.unsplash.com/photo-1624895674105-6c63a2b0ce96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTczfHx0b3l8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    title: "Kitchen",
    category: "Action Toys",
    price: 120,
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
    price: 30,
    id: "19",
  },

  {
    image:
      "https://images.unsplash.com/photo-1552900144-5a8ca71fd614?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cnViaXh8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Rubix Cube",
    category: "",
    price: 13,
    id: "20",
  },

  {
    image:
      "https://images.unsplash.com/photo-1560506839-a23b986135a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzcxfHx0b3l8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    title: "Babynatur",
    category: "Toys",
    price: 15,
    id: "21",
  },

  {
    image:
      "https://images.unsplash.com/photo-1576860525375-4e7b4e00155c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGJhYnklMjB0b3lzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Knitted Clothing",
    category: "Toys",
    price: 70,
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
      "https://images.unsplash.com/photo-1621508638997-e30808c10653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHx0b3l8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Plush Toy",
    category: "",
    price: 90,
    id: "23",
  },

  {
    image:
      "https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dG95fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Toy Robot",
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
