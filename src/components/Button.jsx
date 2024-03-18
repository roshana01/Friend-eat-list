import React from "react";


export default function Button({ children, onClick }) {
  // const { showFriendHandler , showFriend} = useFriend();
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
