/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useEffect, useState } from "react";
// import { auth } from "../firebase";
const LoginButton = ({
  positionTop,
  loggedIn,
  setLoggedIn,
  email,
  password,
}) => {
  const [colored, setColored] = useState(false);
  // const login = async () => {
  //   try {
  //     await auth.signInWithEmailAndPassword(email, password);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  useEffect(() => {
    window.addEventListener("click", function (e) {
      if (
        document.getElementById("login-box") &&
        document.getElementById("login-box").contains(e.target)
      ) {
        return;
      } else {
        setColored(true);
        setTimeout(() => {
          setColored(false);
        }, 750);
      }
    });
  }, []);

  return (
    <div
      onClick={() => {
        // login();
        !loggedIn && setLoggedIn(true);
      }}
      css={css`
        position: relative;
        top: ${positionTop}px;
        left: 64px;
        cursor: pointer;
        width: 532px;
        height: 64px;
        background: ${colored
          ? "#008e95 0% 0% no-repeat padding-box"
          : "#00955c 0% 0% no-repeat padding-box"};
        border-radius: 6px;
        opacity: 1;
        -webkit-user-select: none; /* Chrome/Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+ */
        @media only screen and (max-width: 640px) {
          width: auto;
          max-width: 400px;
          left: 0;
          margin: 0 5px;
        }
      `}
    >
      <p
        css={css`
          text-align: center;
          font: normal normal bold 20px/64px Century Gothic;
          letter-spacing: 0px;
          color: #ffffff;
          opacity: 1;
          margin: 0;
        `}
      >
        Login
      </p>
    </div>
  );
};

const LoginInputField = ({
  fieldName,
  inputFieldPlaceHolder,
  positionTop,
  valueSetter,
}) => (
  <div
    css={css`
      position: relative;
      top: ${positionTop}px;
    `}
  >
    <label
      css={css`
        text-align: center;
        font: Century Gothic;
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 0px;
        color: #00955c;
        opacity: 1;
        display: inline-block;
        text-align: left;
        v-webkit-user-select: none; /* Chrome/Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+ */
      `}
    >
      {fieldName}
      <input
        onChange={(v) => valueSetter(v.target.value)}
        css={css`
          margin-top: 19px;
          display: block;
          width: 532px;
          height: 64px;
          background: #ffffff 0% 0% no-repeat padding-box;
          border: 1px solid #00955c;
          border-radius: 6px;
          opacity: 1;
          text-align: left;
          font: Century Gothic;
          font-size: 18px;
          font-weight: bold;
          letter-spacing: 0px;
          color: #00955c;
          opacity: 0.5;
          padding: 0 20px;
          @media only screen and (max-width: 640px) {
            width: auto;
          }
        `}
        placeholder={inputFieldPlaceHolder}
      />
    </label>
  </div>
);

const LoginHeader = () => (
  <div
    css={css`
      position: absolute;
      top: 64px;
      width: 100%;
      height: 49px;
      text-align: center;
    `}
  >
    <p
      css={css`
        text-align: center;
        font-family: Century Gothic;
        font-weight: bold;
        font-size: 35px;
        letter-spacing: 0px;
        color: #00955c;
        opacity: 1;
        margin: 0;
      `}
    >
      Welcome to Phonebook!
    </p>
  </div>
);

const LoginBox = ({ loggedIn, setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      id={"login-box"}
      css={css`
        position: relative;
        display: inline-block;
        width: 660px;
        overflow: auto;
        height: 585px;
        background: #ffffff 0% 0% no-repeat padding-box;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
      `}
    >
      <LoginHeader />
      <LoginInputField
        fieldName={"Email address"}
        inputFieldPlaceHolder={"Enter Email address"}
        positionTop={182}
        valueSetter={setEmail}
      />
      <LoginInputField
        fieldName={"Password"}
        inputFieldPlaceHolder={"Enter Password"}
        positionTop={212}
        valueSetter={setPassword}
      />
      <LoginButton
        positionTop={254}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        email={email}
        password={password}
      />
    </div>
  );
};
export default function LoginPage({ loggedIn, setLoggedIn }) {
  return (
    <div
      css={css`
        position: relative;
        padding-top: 90px;
        overflow: auto;
        height: calc(100% - 90px);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f8fffc;
      `}
    >
      <LoginBox loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </div>
  );
}
