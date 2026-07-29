import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");

  function handleOtpComponent() {
    if (mobileNumber.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setShowOtpInput(true);
  }

  return (
    <div className="container">
      <h2>Login via OTP</h2>

      {showOtpInput ? (
        <OTPInput />
      ) : (
        <NumberInput
          mobileNumber={mobileNumber}
          setMobileNumber={setMobileNumber}
          handleOtpComponent={handleOtpComponent}
        />
      )}
    </div>
  );
}

function NumberInput({
  mobileNumber,
  setMobileNumber,
  handleOtpComponent,
}) {
  function handleNumberChange(e) {
    const value = e.target.value;

    // Allow only digits
    if (!/^\d*$/.test(value)) return;

    // Maximum 10 digits
    if (value.length <= 10) {
      setMobileNumber(value);
    }
  }

  return (
    <>
      <input
        type="tel"
        id="number"
        placeholder="Enter your mobile number"
        value={mobileNumber}
        onChange={handleNumberChange}
      />

      <input
        type="submit"
        value="Send OTP"
        className="submitBtn"
        onClick={handleOtpComponent}
      />
    </>
  );
}

function OTPInput() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  function handleChange(index, e) {
    const value = e.target.value;

    // Allow only one digit
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value !== "" && index < otp.length - 1) {
      inputRef.current[index + 1].focus();
    }
  }

  function handleBackspace(index, e) {
    if (
      e.key === "Backspace" &&
      otp[index] === "" &&
      index > 0
    ) {
      inputRef.current[index - 1].focus();
    }
  }

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <>
      <div className="otpContainer">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            className="otpInput"
            value={digit}
            maxLength={1}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleBackspace(index, e)}
            ref={(element) => (inputRef.current[index] = element)}
          />
        ))}
      </div>

      <input
        type="submit"
        value="Login"
        className="submitBtn"
        disabled={!isOtpComplete}
      />
    </>
  );
}

export default App;