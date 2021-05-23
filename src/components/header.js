/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const LogText = ({ loggedIn }) => (
  <div
    css={css`
      position: absolute;
      top: 41px;
      right: 64px;
      width: 54px;
      height: 20px;
      @media only screen and (max-width: 640px) {
        right: 15px;
      }
    `}
  >
    <p
      css={css`
        font-family: Century Gothic;
        font-weight: bold;
        font-size: 18px;
        letter-spacing: 0px;
        color: #00955c;
        opacity: 1;
        margin: 0;
      `}
    >
      {loggedIn ? "Logout" : "Login"}
    </p>
  </div>
);

const HeaderMainText = () => (
  <div
    css={css`
      position: absolute;
      top: 29px;
      left: 64px;
      width: 272px;
      height: 50px;
      @media only screen and (max-width: 640px) {
        left: 15px;
      }
    `}
  >
    <p
      css={css`
        text-align: left;
        font-family: Century Gothic;
        font-weight: bold;
        font-size: 42px;
        letter-spacing: 0px;
        color: #00955c;
        opacity: 1;
        margin: 0;
      `}
    >
      Phonebook
    </p>
  </div>
);
export default function Header() {
  return (
    <div
      css={css`
        width: 100%;
        height: 90px;
        position: fixed;
        top: 0px;
        z-index: 99;
        background: #ffffff 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #4eb99029;
        border-radius: 0px 0px 6px 6px;
        opacity: 1;
      `}
    >
      <HeaderMainText />
      <LogText loggedIn={false} />
    </div>
  );
}
