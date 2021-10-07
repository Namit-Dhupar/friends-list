import React from "react";

const Pagination = ({friendsPerPage, totalFriends, paginate}) => {
    const pageNumbers = [];
   
    for(let i = 1 ; i <= Math.ceil(totalFriends/friendsPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            {pageNumbers.length > 0 ? 
            <ul className="ui pagination menu" style={{padding: "0"}}>
            {pageNumbers.map(number =>(
                // eslint-disable-next-line
                <a onClick={()=> paginate(number)}
                 key={number} className="item">
                    {number}
                </a>
            ))}
        </ul> : <div></div>
        }
            
        </nav>
    )

}

export default Pagination;