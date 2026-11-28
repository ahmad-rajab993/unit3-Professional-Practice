export default function Card({product}){
    return(
        <div className="card">
            <img src={product.image} alt={product.title} className='card-image' />
            <div className='card-body'>

            <h3>{product.title}</h3>
            <p>{product.discription}</p>
            </div>
        </div>
    )
}