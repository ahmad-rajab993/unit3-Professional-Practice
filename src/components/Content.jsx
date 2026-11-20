import Card from "./Card";
import headphones from '../assets/headphones.svg';
import './Content.css'
export default function Content(){
    return(
        <main className="content">
            <h2>Our Products</h2>
            <p className="content-subtitle">you can choose from our products down</p>
            <div className="content-cards">
            <Card image={headphones} title="Smart headphones" text="this is headphones">

            </Card>
            <Card image={headphones} title="Smart headphones" text="this is headphones">

            </Card>
            <Card image={headphones} title="Smart headphones" text="this is headphones">

            </Card>
            </div>
        </main>
    )
}