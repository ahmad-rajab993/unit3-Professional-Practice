import "./theme.css";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import './components/Card.css';


function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="layout">
        <Sidebar></Sidebar>
        <Content></Content>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
