import React from "react";
import { useFriend } from "../context/ContextProvider";
import Button from "./Button";

export default function ItemFriends({ friend }) {
  const { selectHandler, selectFriend } = useFriend();
  const { avatar, name, balance } = friend;
  const isSelect = selectFriend?.id === friend.id;

  return (
    <>
      <li className={isSelect ? "selected" : ""}>
        <img src={avatar} alt="friend" className="img" />
        <h3>{name}🍒🍓</h3>

        {balance < 0 ? (
          <p className="red">
            You own {name} {Math.abs(balance)}$
          </p>
        ) : friend.balance > 1 ? (
          <p className="green">
            {friend.name} owes you {balance}$
          </p>
        ) : (
          <p>You and {name} even</p>
        )}
        <Button className="button" onClick={() => selectHandler(friend)}>
          {isSelect ? "Clear" : "Select"}
        </Button>
        {/* friends at selected */}
      </li>
    </>
  );
}
