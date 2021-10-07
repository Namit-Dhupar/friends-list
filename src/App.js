import React, {useState, useEffect} from 'react';
import { v4 as uuid_v4 } from "uuid";
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AddFriend from './components/AddFriend';
import FriendList from './components/FriendList';
import FavoriteList from './components/FavoriteList';
import Pagination from './components/Pagination';
import Search from './components/Search';

function App() {
 const LOCAL_STORAGE_KEY = "friends";
 const[friends, setFriends] = useState([]);
 //Pagination
 const[currentPage, setCurrentPage] = useState(1);
 const [friendsPerPage] = useState(4); 

 //Passing props from Child to Parents
 const addFriendHandler = (friend) => {
   setFriends([...friends, {id: uuid_v4(), ...friend}]);
 }
 
 //Delete the friends by Passing props from Child to Parents
 const removeFriendHandler = (id) => {
   const newFriendsList = friends.filter((friend) => {
     return friend.id !== id;
   });
   setFriends(newFriendsList);
 }

 //Mark As Favorite by Passing props from Child to Parents
 const starFriendHandler = (id) => {
  var updatedStar;
  const prodIndex = friends.findIndex(p => p.id === id);
  const updatedFriends = friends;
  const newFavStatus = (prodIndex !== -1) ? !friends[prodIndex].isFavourite : null;
  updatedFriends[prodIndex] = {
    ...friends[prodIndex],
    isFavourite: newFavStatus
  }
  updatedStar = updatedFriends.filter((index) => index !== -1)
  setFriends(updatedStar);
 }

 //Getting from Local Storage
 useEffect(() => {
  const recievedFriends = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if (recievedFriends) setFriends(recievedFriends);
 },[]);

 //Storing Friends into the local storage
 useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(friends));
 },[friends]);

 //Get Current Page of Friends for Pagination
 const indexOfLastFriendPage = currentPage * friendsPerPage;
 const indexOfFirstFriendPage = indexOfLastFriendPage - friendsPerPage;
 const currentFriendPage = friends.slice(indexOfFirstFriendPage, indexOfLastFriendPage);

 //Change Page
const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <BrowserRouter>
      <div>
      <Header />
        <Route path = '/' exact render = {props => (
         <React.Fragment>
         <AddFriend addFriendHandler={addFriendHandler} />
         <FriendList friends={currentFriendPage} getFriendId={removeFriendHandler} favFriend={starFriendHandler}/>
         <div className="ui container">
         <Pagination friendsPerPage={friendsPerPage} totalFriends={friends.length} paginate={paginate} />         
         </div>
         </React.Fragment>
       )} />
       <Route path = '/favourites' exact render = {props => (
         <React.Fragment>
           <FavoriteList closeFriends={friends} />
         </React.Fragment>
       )} />
       <Route path = '/search' exact render = {props => (
         <React.Fragment>
           <Search friends={friends} />
         </React.Fragment>
       )} />
      </div>
      </BrowserRouter> 
  );
}

export default App;
