import React from "react";
import { ContextProvider, useFriend } from "../context/ContextProvider";
import AddFormFriend from "./AddFormFriend";
import ListFriends from "./ListFriends";
import ListBill from "./ListBill";

import Button from "./Button";

// friendData
export default function App() {
  const { showFriend, selectFriend,showFriendHandler } = useFriend()

  return (
    <>
        <div className="app">
          <div className="sidebar">
            <ListFriends />

            {showFriend && <AddFormFriend />}
            <Button onClick={()=>showFriendHandler()}>{showFriend ? "Closed" : "AddFriend"}</Button>
          </div>
          {selectFriend && (
            <ListBill
              key={selectFriend?.id} //make copmonents instances new
            />
          )}
        </div>
    </>
  );
}
