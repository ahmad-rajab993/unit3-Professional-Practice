import Card from "./Card";


import "./Content.css";
export default function Content({products}) {
 

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
