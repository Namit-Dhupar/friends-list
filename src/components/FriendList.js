import React from 'react';
import FriendCard from './FriendCard';

const FriendList = (props) => {
  
  const deleteFriendHandler = (id) => {
      props.getFriendId(id)
  }

  const favouriteFriendHandler = (id) =>{
      props.favFriend(id);
  }
  const renderFriendList = props.friends.map((friend) => {
      return (
          <FriendCard key={friend.id} friend={friend}
           clickHandler={deleteFriendHandler}
           favHandler={favouriteFriendHandler}  />
      );
  })

 return(

     <div className="ui celled list">
       {renderFriendList}
     </div>
 );
};

export default FriendList;