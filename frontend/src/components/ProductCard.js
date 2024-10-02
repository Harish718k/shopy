import { Link } from 'react-router-dom'

export default function ProductCard(props){
    

    return <div className='card'>
    <div className="product-image">
        <img className='img' src={props.product.images[0].image}/>
    </div>
    <Link to={"/product/"+props.product._id} style={{textDecoration: "none"}}><h4>{props.product.name}</h4></Link>
    <div className='rating mt-auto'>
        <div className="rating-outer">
            <div className="rating-inner" style={{width: `${props.product.ratings/5*100}%`}}></div>
        </div>
    </div>
    <span>${props.product.price}</span>   
    <Link to={"/product/"+props.product._id}><button className='btn btn-block' id='viewBtn'>View Product</button></Link>

</div>
}