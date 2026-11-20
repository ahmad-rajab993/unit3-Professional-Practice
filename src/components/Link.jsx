export default function Link({item}){
    return (
          <li>
          <a className='sidebar-link' href="">
            <span>{item.icon}</span>{item.label}
          </a>
        </li>
    )
}