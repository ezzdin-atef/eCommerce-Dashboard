import _ from "lodash";
import { 
  DELETE_NOTIFICATION, 
  UPADTE_ITEM_COUNT_SHOPPING_CART, 
  ADD_TO_SHOPPING_CART, 
  DELETE_ITEM_SHOPPING_CART, 
  DELETE_WISHLIST, 
  ADD_RATE, 
  DELETE_PRODUCT, 
  UPDATE_USER, 
  DELETE_PAYMENT 
} from './actions';
import applewatch from "./img/apple-watch.jpg";
import PerregauxWatch from "./img/Girard-Perregaux-Watch.jpg";
import huaweiLaptop from "./img/huawei-honor-magicbook.jpg";
import iphoneX from "./img/IPhone-X.jpg";
import SamsungGalaxyS20 from "./img/Samsung-Galaxy-S20.jpg";
import VinceroWatch from "./img/Vincero-Watch.jpg";
import samsungFold from "./img/samsung-fold.jpg";
import samsungnote20 from "./img/samsung-note20.png";
import asus from "./img/asus.jpg";
import hp from "./img/hp.jpg";
import lenovoideapad from "./img/lenovo-ideapad.png";
import userImage from "./img/user.jpeg";


const initialState = {
  user: {
    image: userImage,
    username: "ezzdin_atef",
    name: "Ezzdin Atef",
    email: "ezzdin1125@gmail.com",
    your_website: "https://ezzdinatef.me",
    twitter: "https://twitter.com/ezzdin_atef"
  },
  payments: [
    {
      id: "15454646",
      type: "visa",
      number: "**** **** **** **54"
    },
    {
      id: "65465448",
      type: "master",
      number: "**** **** **** **91"
    }
  ],
  notifications: [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5"
  ],
  shoppingCart: [
    {
      id: "5165465486",
      img: applewatch,
      title: "Apple Watch Series 3",
      price: "800",
      count: "1",
      stock: "12"
    },{
      id: "3465464654",
      img: iphoneX,
      title: "IPhone X - Silver 64GB",
      price: "1200",
      count: "1",
      stock: "61"
    }
  ],
  orders: [
    {
      id: "1355689478",
      title: "TP-Link Router",
      by: "Souq",
      condition: "New",
      status: "Shipped",
      rate: null
    },{
      id: "13553699478",
      title: "Head First Java",
      by: "Amazon",
      condition: "New",
      status: "Arrived",
      rate: null
    },{
      id: "14513456457",
      title: "Cracking the Coding Interview",
      by: "Laakmann McDowell",
      condition: "Used",
      status: "Delivered",
      rate: null
    },{
      id: "3213546598",
      title: "Eloquent JavaScript",
      by: "Marijn Haverbeke",
      condition: "New",
      status: "Delivered",
      rate: "4"
    }
  ],
  wishlist: [
    {
      id: "5165465486",
      img: applewatch,
      title: "Apple Watch Series 3",
      price: "800",
      stock: "12"
    },{
      id: "3465464654",
      img: iphoneX,
      title: "IPhone X - Silver 64GB",
      price: "1200",
      stock: "61"
    },{
      id: "3545465465",
      img: PerregauxWatch,
      title: "Girard Perregaux Watch",
      price: "700",
      stock: "79"
    },{
      id: "689789456",
      img: VinceroWatch,
      title: "Vincero Watch",
      price: "500",
      stock: "135"
    },{
      id: "897654132135",
      img: huaweiLaptop,
      title: "HUAWEI Honor Magicbook",
      price: "2200",
      stock: "150"
    },{
      id: "68789451352",
      img: SamsungGalaxyS20,
      title: "Samsung Galaxy S20 Ultra",
      price: "1100",
      stock: "18"
    },{
      id: "8978461321",
      img: samsungFold,
      title: "Samsung Galaxy Fold Z",
      price: "2200",
      stock: "13"
    }
  ],
  products: [
    {
      id: "5465465456",
      img: samsungnote20,
      title: "Samsung Note 20",
      price: "999",
      stock: "3000"
    },{
      id: "6484541",
      img: asus,
      title: "Philips Headphone",
      price: "335",
      stock: "15"
    },{
      id: "8945612132161",
      img: hp,
      title: "HP Laptop",
      price: "1300",
      stock: "30"
    },{
      id: "61616515165",
      img: lenovoideapad,
      title: "Lenovo IdeaPad",
      price: "899",
      stock: "100"
    },{
      id: "23515611561",
      img: applewatch,
      title: "Apple Watch Series 3",
      price: "335",
      stock: "15"
    },{
      id: "654894894984",
      img: huaweiLaptop,
      title: "HUAWEI Honor Magicbook",
      price: "1399",
      stock: "26"
    },{
      id: "8978461321",
      img: SamsungGalaxyS20,
      title: "Samsung Galaxy S20 Ultra",
      price: "1099",
      stock: "10"
    }
  ]
};


function reducer(state = initialState, action) {
  switch(action.type) {
    case DELETE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter((el) => el !== action.payload.element)
      }
    case UPADTE_ITEM_COUNT_SHOPPING_CART:
      return {
        ...state,
        shoppingCart: state.shoppingCart.map(el => el.id === action.payload.id? {...el, count: action.payload.count} : el)
      }
    case DELETE_ITEM_SHOPPING_CART: 
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(el => el.id !== action.payload.id)
      }
    case ADD_TO_SHOPPING_CART:
      return {
        ...state,
        shoppingCart: _.findIndex(state.shoppingCart, { id: action.payload.id }) > -1 ? 
                            state.shoppingCart.map(el => el.id === action.payload.id ? {...el, count: parseInt(el.count, 10) + 1} : el) 
                            : 
                            [...state.shoppingCart, {...action.payload, count: 1}]
      }
    case DELETE_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(el => el.id !== action.payload.id)
      }
    case ADD_RATE:
      return {
        ...state,
        orders: state.orders.map(el => el.id === action.payload.id ? {...el, rate: action.payload.rate } : el)
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(el => el.id !== action.payload.id)
      }
    case UPDATE_USER: 
      return {
        ...state, 
        user: action.payload
      }
    case DELETE_PAYMENT:
      return {
        ...state,
        payments: state.payments.filter(el => el.id !== action.payload.id)
      }
    default:
      return state;
    }
  }

  export default reducer;