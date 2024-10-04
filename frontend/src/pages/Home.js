import {useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard'
import './home.css'
import { useSearchParams } from 'react-router-dom';

export default function Home(){
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(()=>{
        fetch(/*process.env.REACT_APP_API_URL*/"https://shopy-b2yw.onrender.com"+'/products?'+searchParams)
        .then(res => res.json())
        .then(res => setProducts(res.products))
    },[searchParams])
    
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