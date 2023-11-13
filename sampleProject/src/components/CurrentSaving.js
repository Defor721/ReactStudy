import { useState } from "react";

export default function CurrentSaving(props) {
  const [saving, setSaving] = useState("");

  const savingCheckHandler = (event) => {
    setSaving(event.target.value);
  };

  return (
    <p>
      <label htmlFor="current-savings">Current Savings ($)</label>
      <input type="number" id="current-savings" onChange={savingCheckHandler} />
    </p>
  );
}
