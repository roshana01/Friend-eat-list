import React from "react";
import AddFormFriend from "./AddFormFriend";
import ListFriends from "./ListFriends";
import ListBill from "./ListBill";

export default function App() {
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <ListFriends />
          <AddFormFriend />
        </div>
        <ListBill />
      </div>
    </>
  );
}
