import React, {createContext, useContext, useState } from "react";
import friendData from "../assets/data";

//1: add createContext()
export const FriendContext = createContext({});

//2: add logic in the function
function ContextProvider({ children }) {
  const [newFriend, setNewFriend] = useState(friendData);
  const [showFriend, setShowFriend] = useState(false);
  const [selectFriend, setSelectFriend] = useState(null);
 

  const showFriendHandler = () => {
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

  const onSplitBillHandel = (vl) => {
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
    <FriendContext.Provider
      value={{
        newFriend,
        showFriend,
        selectFriend,
        setSelectFriend,
        showFriendHandler,
        addNewFriendHandler,
        selectHandler,
        onSplitBillHandel,
      }}
    >
      {children}
    </FriendContext.Provider>
  );
}

const useFriend = () => {
  return useContext(FriendContext);
};
export { ContextProvider, useFriend };
