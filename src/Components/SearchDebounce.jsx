import { useEffect, useState } from "react";
import "./index.css";
export default function SearchDebounce() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});
  const fetchData = async () => {
    if (cache[inputValue]) {
      console.log("cache data", cache[inputValue]);
      setResult(cache[inputValue]);
      return;
    }
    const data = await fetch(
      `https://dummyjson.com/recipes/search?q=${inputValue}`
    );
    const json = await data.json();
    setResult(json?.recipes);
    setCache((prev) => ({ ...prev, [inputValue]: json?.recipes }));
  };
  useEffect(() => {
    fetchData();
  }, [inputValue]);
  return (
    <div className="container">
      seach the product
      <input
        type="text"
        className="SearchInput"
        placeholder="Search the product"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
      />
      {showResults && (
        <div className="ShowResult">
          {result.map((r) => (
            <span className="result" key={r.id}>
              {r.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
