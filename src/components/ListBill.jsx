import React, { useState } from "react";
import Button from "./Button";

export default function ListBill({ onSelect ,onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const billHandlerSubmit = (e) => {
    e.preventDefault();
    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  return (
    <>
      <form action="" className="form-split-bill" onSubmit={billHandlerSubmit}>
        <h2>Split a bill with {onSelect.name}</h2>
        <label>💰Bill value</label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />

        <label>🧍‍♀️You expenase</label>
        <input
          type="number"
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(Number(e.target.value)) > bill
              ? paidByUser
              : Number(e.target.value)
          }
        />

        <label>💑X's expenase</label>
        <input type="number" name="" id="" disabled value={paidByFriend} />

        <label>🤑How is paying the bill?</label>
        <select
          name=""
          id=""
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value={whoIsPaying}>You</option>
          <option value="friend">{onSelect.name}</option>
        </select>

        <Button className="button">Split Bill</Button>
      </form>
    </>
  );
}
