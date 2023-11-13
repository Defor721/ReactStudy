import { useState } from "react";

export default function YearlySaving() {
  const [year, setYear] = useState("");

  const yearCheckHandler = (event) => {
    setYear(event.target.value);
  };

  return (
    <p>
      <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
      <input
        type="number"
        id="yearly-contribution"
        onChange={yearCheckHandler}
      />
    </p>
  );
}
