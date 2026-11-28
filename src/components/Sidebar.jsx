import Link from './Link';
import './Sidebar.css'

export default function Sidebar({links, setActiveLink, activeLink}) {

  return (
    <aside className="sidebar">
      <ul >
        {links.map((lnk)=>(
        <Link 
        
        key={lnk.id} item ={lnk} setActiveLink={setActiveLink} activeLink={lnk.id==activeLink}/>
        ))}
       

      </ul>
     
    </aside>
  );
}
