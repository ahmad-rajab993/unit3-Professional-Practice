import Link from './link';
import './Sidebar.css'

export default function Sidebar({links, setActiveLink}) {

  return (
    <aside className="sidebar">
      <ul >
        {links.map((lnk)=>(
        <Link item ={lnk} setActiveLink={setActiveLink}/>
        ))}
       

      </ul>
     
    </aside>
  );
}
