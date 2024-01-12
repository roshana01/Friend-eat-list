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

  const selectHandler = (friend) => {
    // setSelectFriend(friend.id);
    setSelectFriend((sel) => (sel?.id === friend.id ? null : friend));
    //inja goftim ageh royeh btn click shod va select shod etelaat dost nashon dadeh mesheh vali zamani k dobar ro on btn click shod yani id i k roye state zakhireh shode ba id frind yeki bod null mesheh yani box clear mesheh
  };

  const onSplitBillhandler = (vl) => {
    setNewFriend((friend) =>
      friend.map((friend) =>
        friend.id === selectFriend.id
          ? { ...friend, balance: friend.balance + vl }
          : friend
      )
    );

    setSelectFriend(null);
  };

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <ListFriends
            newFriend={newFriend}
            onSelectFriend={selectHandler}
            stateSelect={selectFriend}
            // selectFriend={}
          />
          {showFriend && <AddFormFriend addFrirndFun={addNewFriendHandler} />}
          <Button onClick={showFrindHandler}>
            {showFriend ? "Closed" : "AddFriend"}
          </Button>
        </div>
        {selectFriend && (
          <ListBill onSelect={selectFriend} onSplitBill={onSplitBillhandler} />
        )}
      </div>
    </>
  );
}
