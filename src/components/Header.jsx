import "./Header.css";
export default function Header() {
  return (
    <header className="header">
      <h1 className="header-logo">Brand</h1>
      <nav className="header-nav">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </nav>
      <button className="header-btn">Sign up</button>
    </header>
  );
}
