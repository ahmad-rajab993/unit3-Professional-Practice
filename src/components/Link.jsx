export default function Link({item,setActiveLink}){
    return (
          <li>
          <button className='sidebar-link' href="" onClick={()=> setActiveLink("Home")}>
            <span>{item.icon}</span>{item.label}
          </button>
        </li>
    )
}