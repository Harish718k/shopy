import {useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard'
import './home.css'

export default function Home(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'products')
        .then(res => res.json())
        .then(res => setProducts(res.products))
    },[])
    
    return <>
        <h1 className='product-section-title'>Latest Products</h1>
        <section id='products' className='container'>
            <div className='product-container'>
                {products.map((product)=> (
                    <ProductCard product={product}/>
                ))}
            </div>
        </section>
    </>
}