import React from "react";
import Button from "./Button";

export default function ListBill({onSelect}) {
  // console.log(onSelect.name);
  return (
    <>
      <form action="" className="form-split-bill" >
        <h2>Split a bill with {onSelect.name}</h2>
        <label>💰Bill value</label>
        <input type="number" />

        <label>🧍‍♀️You expenase</label>
        <input type="number" />

        <label>💑X's expenase</label>
        <input type="number" name="" id="" disabled />

        <label>🤑How is paying the bill?</label>
        <select name="" id="">
          <option value={""}>You</option>
          <option value="friend">{onSelect.name}</option>
        </select>

        <Button className="button">Split Bill</Button>
      </form>
    </>
  );
}
