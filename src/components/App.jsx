import React, { useState } from "react";
import AddFormFriend from "./AddFormFriend";
import ListFriends from "./ListFriends";
import ListBill from "./ListBill";
import FrindeData from "../assets/data";
// FrindeData
export default function App() {
  const [newFriend, setNewFriend] = useState(FrindeData);

  const addNewFriendHandler = (friend) => {
    setNewFriend((fri) => [...fri, friend]);
  };

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <ListFriends newFriend={newFriend}/>
          <AddFormFriend addFrirndFun={addNewFriendHandler}/>
        </div>
        <ListBill />
      </div>
    </>
  );
}
