import React, { useState } from "react";
import  {useFriend } from "../context/ContextProvider";
import Button from "./Button";

export default function AddFormFriend() {
  const { addNewFriendHandler } = useFriend();

  //satate in input take data
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("./public/image/avatar (3).png");
  //function onsubmit in the form
  const onSubmitHandler = (e) => {
    if (!name || !avatar) return;
    e.preventDefault();

    const newDataFriend = {
      name,
      avatar,
      balance: 3,
      id: crypto.randomUUID(),
    };

    addNewFriendHandler(newDataFriend);
    setName("");
  };

  return (
    <>
      <form className="form-add-friend" onSubmit={onSubmitHandler}>
        <label>💑Friend Name</label>
        <input
          type="text"
          name=""
          id=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>🌌Image URL </label>
        <input
          type="text"
          name=""
          id=""
          placeholder=""
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />

        <Button>Add</Button>
      </form>
    </>
  );
}
