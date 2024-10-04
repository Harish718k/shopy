import React, { Fragment, useState } from 'react';
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import './cart.css'

export default function Cart({cartItems, setCartItems}){

    const [complete, setComplete] = useState(false);
    function increaseQty(item){
        if(item.product.stock == item.itemQuantity){
            return;
        }
        const updatedItem = cartItems.map((i)=>{
            if(i.product._id == item.product._id){
                i.itemQuantity++
            }
            return i;
        })

        setCartItems(updatedItem);
    }

    function decreaseQty(item){
        if(item.itemQuantity > 1){
            const updatedItem = cartItems.map((i)=>{
                if(i.product._id == item.product._id){
                    i.itemQuantity--
                }
                return i;
            })
            setCartItems(updatedItem)
        }
    }

    function orderHandler(){
        fetch(/*process.env.REACT_APP_API_URL*/"https://shopy-b2yw.onrender.com"+'/order', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cartItems)
        })
        .then(()=> { 
            setCartItems([]);
            setComplete(true);
            toast.success("Order Placed succesfully!")
        })
    }

    function removeItem(item){
        const updatedItem = cartItems.filter((i)=>{
            if(i.product._id !== item.product._id){
                return true;
            }
        })
        setCartItems(updatedItem)
    }

    return cartItems.length > 0 ? <Fragment>
        <div className="container container-fluid">
                <h2 className="mt-5">Your Cart: <b>{cartItems.length} items</b></h2>
                
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-lg-8">
                        {cartItems.map((item)=>(
                            <Fragment>
                                <hr />
                                <div className="cart-item">
                                    <div className="row">
                                        <div className="col-4 col-lg-3">
                                            <img src={item.product.images[0].image} alt={item.product.name} height="90" width="115" />
                                        </div>

                                        <div className="col-5 col-lg-3">
                                        <Link to={"/product/"+item.product._id}>{item.product.description}</Link>
                                        </div>


                                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                            <p id="card_item_price">${item.product.price}</p>
                                            <p id="card_item_total_price">Total : ${(item.product.price*item.itemQuantity).toFixed(2)}</p>
                                        </div>

                                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                            <div className="stockCounter d-inline">
                                                <span className="btn btn-danger minus" onClick={()=>decreaseQty(item)}>-</span>
                                                <input type="number" className="form-control count d-inline" value={item.itemQuantity} readOnly />

                                                <span className="btn btn-primary plus" onClick={()=>increaseQty(item)}>+</span>
                                            </div>
                                        </div>

                                        <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                            <i id="delete_cart_item" onClick={()=>removeItem(item)} className="fa fa-trash btn btn-danger"></i>
                                        </div>

                                    </div>
                                </div>
                            </Fragment>
                        ))}
                        
                        <hr />
                    </div>

                    <div className="col-12 col-lg-3 my-4">
                        <div id="order_summary">
                            <h4>Order Summary</h4>
                            <hr />
                            <p>Subtotal:  <span className="order-summary-values">{cartItems.reduce((acc, item)=>(acc + item.itemQuantity),0)} (Units)</span></p>
                            <p>Est. total: <span className="order-summary-values">${cartItems.reduce((acc, item)=>(acc + item.product.price*item.itemQuantity),0).toFixed(2)}</span></p>

                            <hr />
                            <button id="checkout_btn" className="btn btn-primary btn-block" onClick={orderHandler}>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
    </Fragment>:(!complete ? <Fragment><h2 className='mt-5 text-center'>Your Cart is Empty</h2></Fragment> 
    :<Fragment><h2 className='mt-5 text-center fw-bold fs-1 text-decoration-underline'>Order Complete</h2>
                <p className='text-center fs-2'>your order has been placed successfully</p></Fragment>)
}
