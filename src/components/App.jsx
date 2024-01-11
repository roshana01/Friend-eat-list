import React, { useState } from "react";
import AddFormFriend from "./AddFormFriend";
import ListFriends from "./ListFriends";
import ListBill from "./ListBill";
import FrindeData from "../assets/data";
import Button from "./Button";

// FrindeData
export default function App() {
  const [newFriend, setNewFriend] = useState(FrindeData);
  const [showFriend, setShowFriend] = useState(false);
  const [selectFriend, setSelectFriend] = useState(null);

  const showFrindHandler = () => {
    setShowFriend((show) => !show);
  };

  const addNewFriendHandler = (friend) => {
    setNewFriend((fri) => [...fri, friend]);
    setShowFriend(false);
  };

  const selelctHandler = (friend) => {
    setSelectFriend((cur) => (cur?.id === friend.id ? null : friend));
  };

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <ListFriends
            newFriend={newFriend}
            selectFunc={selelctHandler}
            onSelect={selectFriend}
          />
          {showFriend && <AddFormFriend addFrirndFun={addNewFriendHandler} />}
          <Button onClick={showFrindHandler}>
            {showFriend ? "Closed" : "AddFriend"}
          </Button>
        </div>
        {selectFriend && <ListBill />}
      </div>
    </>
  );
}
