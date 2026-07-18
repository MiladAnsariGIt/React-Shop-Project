
function SearchBar({city,handleChange,searchButtonClick}){

    return(
            <div>
                 <input type="text" value={city} onChange={handleChange}/>
                 <button onClick={searchButtonClick}>[Search]</button>
            </div>
    )
}

export default SearchBar