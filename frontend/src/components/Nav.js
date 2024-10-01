import './nav.css'

export default function Nav(){
    return <>
        <nav>
            <h1>Shopy</h1>
            <div className='searchField'>
                <input type='text' placeholder='Enter product name'></input>
                <div className='search-icon'>
                <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
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