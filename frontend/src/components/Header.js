import { Link } from 'react-router-dom'
import './header.css'
import Search from './Search'

export default function Header(){
    return <>
        <nav>
            <Link to="/"><h1>Shopy</h1></Link>
            <Search />
            <div className='cart'>
                <h3>Cart</h3>
                <div className='cart-count'>
                    <i className='fa-solid fa-shopping-cart'></i>
                    <span>2</span>
                </div>
            </div>
        </nav>
    </>
}