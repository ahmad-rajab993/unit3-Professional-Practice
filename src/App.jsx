import "./theme.css";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Footer from "./components/Footer";
import "./components/Card.css";

import {  useState } from "react";
import { pages } from "./pages";



function App() {
  

 

  const [activePage, setActivePage] = useState("Home");



  let currentPage = pages.find((page)=>(page.id===activePage));
 const Page =currentPage.component

  return (

    <div className="app">
      <Header></Header>
      <div className="layout">
        <Sidebar links={pages} setActiveLink={setActivePage} activeLink={activePage}></Sidebar>
        

      {<Page {...currentPage.props} />}
     
        
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
