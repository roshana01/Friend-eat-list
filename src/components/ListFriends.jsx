import React from "react";
import ItemFriends from "./ItemFriends";

export default function ListFriends({ newFriend, onSelectFriend,stateSelect }) {
  return (
    <ul>
      {newFriend.map((friend) => (
        //components items
        <ItemFriends
          friend={friend}
          key={friend.id}
          onSelectFriend={onSelectFriend}
          stateSelect={stateSelect}
        />
      ))}
    </ul>
  );
}
