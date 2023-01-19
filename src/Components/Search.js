import React from 'react'


function Search({func}) {

    return (
        <>
        <div className="topPartNavBar">
            <input
            id="searchInput"
            type="text"
            placeholder='Search...' 
            onChange={func}
            />
        </div>
        </>
    )


}

export default Search;