import React from "react";
import Button from "./Button";

export default function ItemFriends({ friend, selectFunc, onSelect }) {
  const isSelectFriends = onSelect?.id === friend?.id;
  
  return (
    <>
      <li className="select">
        <img src={friend.avatar} alt="friend" className="img" />
        <h3>{friend.name}🍒🍓</h3>

        {friend.balance < 0 ? (
          <p className="red">
            You own {friend.name} {Math.abs(friend.balance)}$
          </p>
        ) : friend.balance > 1 ? (
          <p className="green">
            {friend.name} owes you {friend.balance}$
          </p>
        ) : (
          <p>You and {friend.name} even</p>
        )}
        <Button className="button" onClick={() =>selectFunc(friend)}>
          {isSelectFriends ? "Closed" : "Select"}
        </Button>
        {/* frinds at selected */}
      </li>
    </>
  );
}
