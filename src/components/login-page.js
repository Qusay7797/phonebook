/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const LoginBox = () => (
  <div
    css={css`
      display: inline-block;
      width: 660px;
      height: 585px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
    `}
  ></div>
);
export default function LoginPage() {
  return (
    <div
      css={css`
        padding-top: 90px;
        height: calc(100% - 90px);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f8fffc;
      `}
    >
      <LoginBox />
    </div>
  );
}
