import React from "react";

const FavoriteList = (props) => {
 
    const renderFavoriteList = props.closeFriends.filter(prod => prod.isFavourite === true).map((close, index) => {
        return(
            <div key={index} className="item">
            <div className="content">
                <div className="header">{close.name}</div>
                <div>is your favourite friend</div> 
            </div>
          </div>
        );
    })

    return(
        <div className="ui celled list">
        {(renderFavoriteList.length === 0) ? <h1>No Favorites</h1> : renderFavoriteList}
        </div>
    );
};

export default FavoriteList;