import { useState, useEffect } from 'react';
import './productDetail.css';
import { useParams } from 'react-router-dom';
import {toast} from 'react-toastify';

export default function ProductDetail({cartItems, setCartItems}){
    const [product, setProduct] = useState(null);
    const [itemQuantity, setItemQuantity] = useState(1);
    const {id} = useParams();
    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'/product/'+id)
        .then(res => res.json())
        .then(res => setProduct(res.product))
    },[])

    function addToCart(){
        const itemExist = cartItems.find((item)=>item.product._id == product._id)
        if(!itemExist){
            const newItem = {product, itemQuantity};
            setCartItems((cartItems) => [...cartItems, newItem]);
            toast.success("Item added successfully!")
            console.log(cartItems)
        } else{
            toast.warn("Item already exist in cart!")
        }
    }

    function increaseQty(){
        if(product.stock == itemQuantity){
            return;
        }
        setItemQuantity((state)=> state+1)
    }

    function decreaseQty(){
        if(itemQuantity > 1){
            setItemQuantity((state)=> state-1)
        }
    }
    
    return product && <div className="container container-fluid">
                <div className="row f-flex justify-content-around">
                    <div className="col-12 col-lg-5 img-fluid" id="product_image">
                        <img src={product.images[0].image} alt="sdf" height="500" width="500" />
                    </div>

                    <div className="col-12 col-lg-5 mt-5" id='product-details'>
                        <h3>{product.name}</h3>
                        <p id="product_id">Product # {product._id}</p>
                        <hr />
                        <div className="rating-outer">
                            <div className="rating-inner" style={{width: `${product.ratings/5*100}%`}}></div>
                        </div>
                        <hr />
                        <p id="product_price">${product.price}</p>
                        <div className="stockCounter d-flex gap-3">
                            <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>
                            <input id='total-product' type="number" className="form-control count d-inline" value={itemQuantity} readOnly />
                            <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                            <button type="button" onClick={addToCart} disabled={product.stock == 0} id="cart_btn" className="btn btn-primary d-inline ml-4">Add to Cart</button>
                        </div>
                        <hr />
                        <p>Status: <span id="stock_status" className={product.stock>0?"text-success": "text-danger"}>{product.stock>0?"In Stock":"Out of Stock"}</span></p>
                        <hr />
                        <h4 className="mt-2 fw-bold text-decoration-underline">Description:</h4>
                        <p>{product.description}</p>
                        <hr />
                        <p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p>
                        <div className="rating w-50"></div>
                    </div>

                </div>

            </div>
}