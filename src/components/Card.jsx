export default function Card({image,title,text}){
    return(
        <div className="card">
            <img src={image} alt={title} className='card-image' />
            <div className='card-body'>

            <h3>{title}</h3>
            <p>{text}</p>
            </div>
        </div>
    )
}