  
import Products from "./components/Products";
import About from "./components/About";
import Home from "./components/Home";
import  Contactus  from "./components/Contactus";
import Settings from "./components/Settings";
import headphones from "./assets/headphones.svg";
import backpack from "./assets/backpack.svg";
import watch from "./assets/watch.svg";

const products = [
    {
      discription: "this is headphones",
      title: "headphones",
      image: headphones,
    },
    { title: "backpack", discription: "this is backpack", image: backpack },
    { title: "watch", discription: "this is watch", image: watch },
  ];

 export const pages = [

    { id: "Home", icon: "🏠", label: "Home" , component:Home },
    { id: "Products", icon: "🚞", label: "Products", component:Products , props:products },
    { id: "About", icon: "🍉", label: "About" , component:About },
    { id: "Contactus", icon: "❤️", label: "Contactus" , component:Contactus },
    { id: "Settings", icon: "👌", label: "Settings" , component:Settings }


  ];
  
