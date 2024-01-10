import React from "react";
import ItemFriends from "./ItemFriends";

export default function ListFriends({ newFriend }) {
  return (
    <ul>
      {newFriend.map((friend) => (
        //components items
        <ItemFriends friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}
