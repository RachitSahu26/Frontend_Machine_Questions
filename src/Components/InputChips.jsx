import { useState } from "react";

export default function ChipsInput() {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState([]);

  const handlerAddChip = (e) => {
    if (e.key === "Enter") {
      setChips((prev) => [...prev, inputText]);
      setInputText("");
    }
  };

  const handleDeleteChip = (index) => {
    const copychips = [...chips];
    copychips.splice(index, 1);
    setChips(copychips);
  };

  return (
    <div className="App">
      <h1>chips Input</h1>
      <input
        type="text"
        placeholder="Enter the chips"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => handlerAddChip(e)}
      />
      {chips.map((chip, index) => (
        <div
          style={{
            width: "100px",
            borderRadius: "5px",
            background: "grey",
            padding: "5px",
            margin: "5px",
          }}
        >
          {chip}
          <button
            style={{ margin: "20px", padding: "5px" }}
            onClick={() => handleDeleteChip(index)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
