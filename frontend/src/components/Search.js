import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Search(){
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();
    const searchHandler = ()=>{
        navigate('/search?keyword='+keyword)
    }

    return <div className='searchField'>
                <input id="search-input"
                type='text' 
                placeholder='Enter product name' 
                onChange={(e)=> setKeyword(e.target.value)}
                onBlur={searchHandler}
                ></input>
                <div className='search-icon' onClick={searchHandler}>
                <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
}