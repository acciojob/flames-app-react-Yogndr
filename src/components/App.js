import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const flamesMap = {
    1: "Friends",
    2: "Love",
    3: "Affection",
    4: "Marriage",
    5: "Enemy",
    0: "Siblings"
  };

  const removeCommonChars = (str1, str2) => {
    let arr1 = str1.split("");
    let arr2 = str2.split("");

    arr1.forEach((char, i) => {
      const matchIndex = arr2.indexOf(char);
      if (matchIndex !== -1) {
        arr1[i] = ""; 
        arr2[matchIndex] = ""; 
      }
    });

    const remaining1 = arr1.filter((c) => c !== "").join("");
    const remaining2 = arr2.filter((c) => c !== "").join("");
    return [remaining1, remaining2];
  };

  const handleCalculate = () => {
    if (name1.trim() === "" || name2.trim() === "") {
      setResult("Please Enter valid input");
      return;
    }

    const [rem1, rem2] = removeCommonChars(name1, name2);
    const totalLength = rem1.length + rem2.length;

    const modValue = totalLength % 6;
    setResult(flamesMap[modValue]);
  };

  const handleClear = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div id="main">
      <input
        data-testid="input1"
        name="name1"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
      />
      <input
        data-testid="input2"
        name="name2"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />
      <button
        data-testid="calculate_relationship"
        name="calculate_relationship"
        onClick={handleCalculate}
      >
        Calculate Relationship Future
      </button>
      <button
        data-testid="clear"
        name="clear"
        onClick={handleClear}
      >
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );

}

export default App;


export default App;
