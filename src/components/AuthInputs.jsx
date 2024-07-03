import { useState } from "react";
import { styled } from "styled-components";

import Button from "./Button";
import Input from "./Input";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        {/* <p> */}
        {/* 고정 클래스와 조건부 클래스를 같이 작성하는법 */}
        {/* <Label className={`label ${passwordNotValid ? "invalid" : ""}`}>
            Email
          </Label> */}
        {/* <Label $invalid={emailNotValid}>Email</Label>{" "} */}
        {/* 스타일링 코드에만 사용하고 싶은 속성에는 $ 기호를 사용하는게 규칙 */}
        <Input
          label="Email"
          invalid={emailNotValid}
          type="email"
          // style={{
          //   backgroundColor: emailNotValid ? "red" : "#d1d5db",
          // }}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        {/* </p> */}
        {/* <p> */}
        {/* <Label $invalid={passwordNotValid}>Password</Label> */}
        <Input
          label="Password"
          invalid={passwordNotValid}
          type="password"
          // className={passwordNotValid ? "invalid" : undefined}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
        {/* </p> */}
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
