import Link from './link';
import './Sidebar.css'

export default function Sidebar({links}) {

  return (
    <aside className="sidebar">
      <ul >
        {links.map((lnk)=>(
        <Link item ={lnk}/>
        ))}
       

      </ul>
     
    </aside>
  );
}
