import Card from "./Card";
import headphones from "../assets/headphones.svg";
import backpack from "../assets/backpack.svg";
import watch from "../assets/watch.svg";


import "./Content.css";
export default function Products() {
 
const products = [
    {
      discription: "this is headphones",
      title: "headphones",
      image: headphones,
    },
    { title: "backpack", discription: "this is backpack", image: backpack },
    { title: "watch", discription: "this is watch", image: watch },
  ];
  return (
    <main className="content">
      <h2>Our Products</h2>
      <p className="content-subtitle">you can choose from our products down</p>
      <div className="content-cards">
        {products.map((product) => (
          <Card
           product={product}
          ></Card>
        ))}
      </div>
    </main>
  );
}
