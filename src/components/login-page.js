/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const LoginButton = ({ positionTop }) => (
  <div
    css={css`
      position: relative;
      top: ${positionTop}px;
      left: 64px;
      cursor: pointer;
      width: 532px;
      height: 64px;
      background: #00955c 0% 0% no-repeat padding-box;
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

const LoginInputField = ({ fieldName, inputFieldPlaceHolder, positionTop }) => (
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
      `}
    >
      {fieldName}
      <input
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

const LoginBox = () => (
  <div
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
    />
    <LoginInputField
      fieldName={"Password"}
      inputFieldPlaceHolder={"Enter Password"}
      positionTop={212}
    />
    <LoginButton positionTop={254} />
  </div>
);
export default function LoginPage() {
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
      <LoginBox />
    </div>
  );
}
