import pro1 from "../Assets/pro1.jpg";
import pro2 from "../Assets/pro2.jpg";
import pro3 from "../Assets/pro3.jpg";
import pro4 from "../Assets/pro4.jpg";
import pro5 from "../Assets/pro5.jpg";
import pro6 from "../Assets/pro6.jpg";

export const ProductsList = [
  {
    id:1001,
    name: "Sandals",
    price: 2000,
    src: pro1 ,
    // discount is in percentage
    discount: 35,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    variations: [
      {
        color: "pink",
        price: 3000,
      },
      {
        color: "purple",
        price: 4000,
      },
    ],
  },
  {
    id:1002,
    name: "T-Shirt",
    price: 250,
    src:  pro2 ,
    // discount is in percentage
    discount: 10,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    variations: [
      {
        color: "black",
        price: 300,
      },
      {
        color: "red",
        price: 400,
      },
    ],
  },
  {
    id:1003,
    name: "Shirt",
    price: 500,
    src: pro5 ,
    // discount is in percentage
    discount: 15,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    variations: [
      {
        color: "brown",
        price: 600,
      },
      {
        color: "purple",
        price: 700,
      },
    ],
  },
  {
    id:1004,
    name: "Pants",
    price: 800,
    src:  pro4 ,
    // discount is in percentage
    discount: 20,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    variations: [
      {
        color: "black",
        price: 900,
      },
      {
        color: "blue",
        price: 1200,
      },
    ],
  },
  {
    id:1005,
    name: "Jacket",
    price: 1200,
    src:  pro6 ,
    // discount is in percentage
    discount: 25,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    variations: [
      {
        color: "black",
        price: 1500,
      },
      {
        color: "brown",
        price: 1700,
      },
    ],
  },
  {
    id:1006,
    name: "Sneakers",
    price: 1900,
    src:  pro3,
    // discount is in percentage
    discount: 30,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    variations: [
      {
        color: "black",
        price: 2000,
      },
      {
        color: "brown",
        price: 2500,
      },
    ],
  },
  
];
