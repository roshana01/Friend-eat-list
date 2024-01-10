import React from "react";

export default function ItemFriends() {
  return (
    <>
      <li className="select">
        <img src="./public/image/avatar (1).png" alt="friend" className="img" />
        <h3>deli🥑</h3>
        <p className="red">You own -7$</p>
        {/* <p className="red">
          You own {friends.name} {Math.abs(friends.balance)}$
        </p>

        <p className="green">
          {friends.name} owes you {friends.balance}$
        </p>

        <p>You and {friends.name} even</p> */}

        <button className="button">Select</button>
      </li>
      <li className="select">
        <img src="./public/image/avatar (2).png" alt="friend" className="img" />
        <h3>milad🥑</h3>
        <p className="green">You own 23$</p>

        {/* <p className="red">
          You own {friends.name} {Math.abs(friends.balance)}$
        </p>

        <p className="green">
          {friends.name} owes you {friends.balance}$
        </p>

        <p>You and {friends.name} even</p> */}

        <button className="button">Select</button>
      </li>
      <li className="select">
        <img src="./public/image/avatar (3).png" alt="friend" className="img" />
        <h3>asra🥑</h3>
        <p className="">You own 12$</p>

        {/* <p className="red">
          You own {friends.name} {Math.abs(friends.balance)}$
        </p>

        <p className="green">
          {friends.name} owes you {friends.balance}$
        </p>

        <p>You and {friends.name} even</p> */}

        <button className="button">Select</button>
      </li>
    </>
  );
}
