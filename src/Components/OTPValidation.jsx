import { useState, useRef } from "react";

export default function OTPValidation() {
  const OTP_digit_COUNT = 5;
  const refArr = useRef([]);
  const [inputText, setInputText] = useState(
    new Array(OTP_digit_COUNT).fill("")
  );

  const handleChange = (value, index) => {
    if (isNaN(value)) return;

    const copyArr = [...inputText];
    copyArr[index] = value.slice(-1);
    setInputText(copyArr);

    if (value && index < OTP_digit_COUNT - 1) {
      refArr.current[index + 1]?.focus();
    }
  };

  const handleRemove = (e, index) => {
    if (e.key === "ArrowLeft" && index > 0) {
      refArr.current[index - 1]?.focus();
    }

    if (e.key === "ArrowRight" && index < OTP_digit_COUNT - 1) {
      refArr.current[index + 1]?.focus();
     }
    if (e.key === "Backspace" && !inputText[index] && index > 0) {
      refArr.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData
      .getData("text")
      .slice(0, OTP_digit_COUNT);
    if (isNaN(pastedData)) return;

    const updated = pastedData.split("");
    setInputText((prev) => prev.map((_, i) => updated[i] || ""));

    refArr.current[pastedData.length - 1]?.focus();
  };
  54755;
  return (
    <div>
      <h1>OTP Validation</h1>

      {inputText.map((input, index) => (
        <input
          key={index}
          ref={(el) => (refArr.current[index] = el)}
          autoFocus={index === 0}
          type="tel"
          maxLength={1}
          value={input}
          style={{ width: "50px", margin: "5px", textAlign: "center" }}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleRemove(e, index)}
          onPaste={handlePaste}
        />
      ))}
    </div>
  );
}
