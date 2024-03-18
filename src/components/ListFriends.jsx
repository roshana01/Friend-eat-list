import React from "react";
import { useFriend } from "../context/ContextProvider";
import ItemFriends from "./ItemFriends";

export default function ListFriends() {
  const { newFriend } = useFriend();
  return (
    <ul>
      {newFriend.map((friend) => (
        <ItemFriends friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}
