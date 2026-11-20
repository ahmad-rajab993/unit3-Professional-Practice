import "./theme.css";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import './components/Card.css';
import headphones from "./assets/headphones.svg";
import backpack from "./assets/backpack.svg";
import watch from "./assets/watch.svg";
import { useState } from "react";



function App() {

 const products = [
    {
      discription: "this is headphones",
      title: "headphones",
      image: headphones,
    },
    { title: "backpack", discription: "this is backpack", image: backpack },
    { title: "watch", discription: "this is watch", image: watch },
  ];

  const links = [
  {id:"home", icon:"🏠", label:"Home"},
  {id:"Products", icon:"🚞", label:"Products"},
  {id:"About", icon:"🍉", label:"About"},
]

// const user ={ userName: "Ahmed", email: "ahmed@gmail.com"};
// const username =user.userName;
// const email = user.email;
// const {userName,email} = user;

const [num, setNum ]= useState(0);



  return (
    <div>
       {num}

      <button onClick={()=> {setNum(num=> num+1);
        // console.log(num);
      }
    }>increase</button>
    
      <button onClick={()=> {setNum(num=> num-1);
        // console.log(num);
      }
    }>decrease</button>
    </div>
    // <div className="app">
    //    <Header></Header> 
    //   <div className="layout">
    //     <Sidebar links={links}></Sidebar>
    //     <Content products={products}/>
    //   </div>
    //   <Footer></Footer> 
    // </div>
  );
}

export default App;
