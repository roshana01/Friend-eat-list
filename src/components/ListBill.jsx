import React from "react";

export default function ListBill() {
  return (
    <>
      <form action="" className="form-split-bill" >
        <h2>Split a bill with sara</h2>
        <label>💰Bill value</label>
        <input type="number" />

        <label>🧍‍♀️You expenase</label>
        <input type="number" />

        <label>💑X's expenase</label>
        <input type="number" name="" id="" disabled />

        <label>🤑How is paying the bill?</label>
        <select name="" id="">
          <option value={""}>You</option>
          <option value="friend">sara</option>
        </select>

        <button className="button">Split Bill</button>
      </form>
    </>
  );
}
