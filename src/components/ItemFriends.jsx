import React from "react";

export default function ItemFriends({ friend }) {
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
        {/* <p className="red">
          
        </p>

       

         */}

        <button className="button">Select</button>
      </li>
    </>
  );
}
