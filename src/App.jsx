import "./theme.css";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Products";
import Footer from "./components/Footer";
import "./components/Card.css";

import {  useState } from "react";
import { pages } from "./pages";


function App() {
  

  const links = [
    { id: "home", icon: "🏠", label: "Home" },
    { id: "Products", icon: "🚞", label: "Products" },
    { id: "About", icon: "🍉", label: "About" },
    { id: "Contactus", icon: "❤️", label: "Contactus" },
  ];

  // const user ={ userName: "Ahmed", email: "ahmed@gmail.com"};
  // const username =user.userName;
  // const email = user.email;
  // const {userName,email} = user;

  // const [num, setNum ]= useState(0);
  const [activePage, setActivePage] = useState("About");

  


 
  let Page = pages[activePage];

  // let component;

  // if (activePage === "Home") {
  //   component = <Home />;
  // } else if (activePage === "About") {
  //   component = <About />;
  // } else {
  //   component = <Products products={products} />;
  // }

  // function renderRightComponent(){

  // if (activePage==="Home") return <Home/>;
  // if(activePage==="About") return <About/>;
  // if (activePage==="Products") return <Products products={products} />;
  // }

// let comp;

// switch(activePage){
//   case "Home":
//     comp = <Home/>;
//     break;
//     case "About":
//       comp =<About/>
//       break;
//       case "Products":
//         comp = <Products products={products} />;
//         break;
// }

  return (
    // <div>
    //    {num}

    //   <button onClick={()=> {setNum(num=> num+1);
    //     // console.log(num);
    //   }
    // }>increase</button>

    //   <button onClick={()=> {setNum(num=> num-1);
    //     // console.log(num);
    //   }
    // }>decrease</button>
    // </div>
    <div className="app">
      <Header></Header>
      <div className="layout">
        {/* <Sidebar links={links} setActiveLink={setActivePage}></Sidebar> */}
        <aside className="sidebar">
          <ul>
            <li>
              <button
                className="sidebar-link"
                href=""
                onClick={() => setActivePage("Home")}
              >
                <span>{links[0].icon}</span>
                {links[0].label}
              </button>
            </li>

            <li>
              <button
                className="sidebar-link"
                href=""
                onClick={() => setActivePage("Products")}
              >
                <span>{links[1].icon}</span>
                {links[1].label}
              </button>
            </li>
            <li>
              <button
                className="sidebar-link"
                href=""
                onClick={() => setActivePage("About")}
              >
                <span>{links[2].icon}</span>
                {links[2].label}
              </button>
            </li>
             <li>
              <button
                className="sidebar-link"
                href=""
                onClick={() => setActivePage("Contactus")}
              >
                <span>{links[3].icon}</span>
                {links[3].label}
              </button>
            </li>
          </ul>
        </aside>
        {/* <Home/>
        <Products products={products}/>
        <About/> */}
{/* {Component} */}
        {/* {renderRightComponent()} */}
        {/* {comp} */}
        {/* {activePage ==="Home" ? <Home/> : ""}
        {activePage ==="About" ? <About/> : ""}
        {activePage ==="Products" ? <Products products={products}/> : ""} */}

      {/* {activePage === "Home" ? (<Home/>) : activePage === "Products" ? (<Products products={products}/>): (<About/>) } */}

      {/* {activePage==="Home" && <Home/>}
      {activePage==="About" && <About/>}
      {activePage==="Products" && <Products products={products}/>} */}
      {<Page/>}
     
        
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
