import { useState } from "react";

export default function EvenOrOdd() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const handleChecker = () => {
    let num = Number(number);
    if (number === "") {
      setResult("please provide me any Number");
    }
    if (isNaN(num)) {
      setResult("Invalid number given ");
    }

    if (num % 2 === 0) {
      setResult(` ${num} is even `);
    } else {
      setResult(`${num} is odd`);
    }
  };
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <div>
        <h2>Even or Odd Checker</h2>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter the number"
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button style={{ padding: "8px 12px" }} onClick={handleChecker}>
          Check
        </button>
      </div>
      <p>{result && <span> {result}</span>}</p>
    </div>
  );
}
