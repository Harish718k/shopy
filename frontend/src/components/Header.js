import { Link } from 'react-router-dom'
import './header.css'
import Search from './Search'

export default function Header({cartItems}){
    return <>
        <nav>
            <Link to="/"><h1>Shopy</h1></Link>
            <Search />
            <Link to={"/cart"} style={{textDecoration: "none"}}>
            <div className='cart'>
                <h3>Cart</h3>
                <div className='cart-count'>
                    <i className='fa-solid fa-shopping-cart'></i>
                    <span>{cartItems.length}</span>
                </div>
            </div>
            </Link>  
        </nav>
    </>
}