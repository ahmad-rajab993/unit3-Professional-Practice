import './Sidebar.css'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul >
        <li>
          <a className='sidebar-link' href="">
            <span>🏠</span>Home
          </a>
        </li>
        <li>
          <a className='sidebar-link' href="">
            <span>🚞</span>Products
          </a>
        </li>
        <li>
          <a className='sidebar-link' href="">
            <span>🍉</span>About 
          </a>
        </li>
      </ul>
      {/* <h1>shagsagfsfa</h1> */}
    </aside>
  );
}
