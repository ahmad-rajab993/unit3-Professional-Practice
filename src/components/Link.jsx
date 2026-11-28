export default function Link({item,setActiveLink,activeLink }){
    return (
          <li>
          <button className={`sidebar-link ${activeLink ? "active-link" : ""}`} href="" onClick={()=> setActiveLink(item.id)}>
            <span>{item.icon}</span>{item.label}
          </button>
        </li>
    )
}



