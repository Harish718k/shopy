export default function ProductCard(props){

    return <div className='card'>
    <div className="product-image">
        <img className='img' src={props.product.images[0].image}/>
    </div>
    <h4>Oppo reno 12 max</h4>
    <div className='rating'>
        <ul className='d-flex'>
            <li><i className='fa-solid fa-star'></i></li>
            <li><i className='fa-solid fa-star'></i></li>
            <li><i className='fa-solid fa-star'></i></li>
            <li><i className='fa-solid fa-star'></i></li>
            <li><i className='fa-solid fa-star'></i></li>
        </ul>
    </div>
    <span>$234.45</span>
    <button className='btn btn-block'>View Details</button>
</div>
}