import React from "react";

const FriendCard = (props) =>{
    const {id, name, isFavourite} = props.friend;
    const styles = {
        containerStyle: {
          float: "right",
          color: isFavourite ? "gold" : "black"
        }
      };
    const { containerStyle } = styles;
    return(
        <div className="item">
        <div className="content" style={{float: "left"}}>
            <div className="header">{name}</div>
            <div>is your friend</div> 
        </div>
        <i className="trash alternate outline icon"
        onClick={()=> props.clickHandler(id)} style={{float: "right"}}></i>
        <i className="star alternate outline icon"
        onClick={()=> props.favHandler(id)} style={containerStyle} ></i>
      </div>
    );
};

export default FriendCard;