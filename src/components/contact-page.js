/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useState } from "react";

const Text = ({ text }) => (
  <div
    css={css`
      flex: 1;
      margin-left: 32px;
    `}
  >
    <p
      css={css`
        margin: 0;
        text-align: left;
        font-family: Century Gothic;
        font-size: 18px;
        letter-spacing: 0px;
        color: #00955c;
        opacity: 1;
        position: relative;
        top: 25px;
      `}
    >
      {text}
    </p>
  </div>
);
const ItemCircle = ({ text }) => {
  return (
    <div
      css={css`
        flex: 1;
        margin-left: 32px;
        display: flex;
      `}
    >
      <div
        css={css`
          border-radius: 50%;
          width: 40px;
          height: 40px;
          padding: 10px;
          background: #00955c 0% 0% no-repeat padding-box;
          color: #fff;
          text-align: center;
          font: 32px Arial, sans-serif;
        `}
      >
        {text[0]}
      </div>
      <Text text={text} />
    </div>
  );
};
const Item = ({ name, phoneNumber, email, selected, setSelected }) => {
  return (
    <div
      onClick={() => setSelected(name)}
      css={css`
        position: relative;
        height: 64px;
        display: flex;
        cursor: pointer;
        border-radius: 6px;
        margin-bottom: 14px;
        background: ${selected === name
          ? "#E5FAF2 0% 0% no-repeat padding-box"
          : "#fff"};
      `}
    >
      <ItemCircle text={name} />
      <Text text={phoneNumber} />
      <Text text={email} />
    </div>
  );
};

const ItemsContainer = () => {
  const [selected, setSelected] = useState("Qusay");

  return (
    <div
      css={css`
        margin-top: 19px;
      `}
    >
      <Item
        name={"Qusay"}
        phoneNumber={"077097853"}
        email={"qqq@qq.com"}
        selected={selected}
        setSelected={setSelected}
      />

      <Item
        name={"lol"}
        phoneNumber={"077097853"}
        email={"qqq@qq.com"}
        selected={selected}
        setSelected={setSelected}
      />

      <Item
        name={"gooos"}
        phoneNumber={"077097853"}
        email={"qqq@qq.com"}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

const ListContainer = () => (
  <div
    css={css`
      overflow: auto;
      padding: 0 32px;
      margin-left: 32px;
      flex: 4;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      opacity: 1;
    `}
  >
    <ColumnHeaders />
    <ListName listName={"Contacts"} itemsNumber={11} />
    <ItemsContainer />
  </div>
);

const ListName = ({ listName, itemsNumber }) => (
  <div
    css={css`
      margin-top: 27px;
    `}
  >
    <p
      css={css`
        text-align: left;
        font-family: Century Gothic;
        font-weight: bold;
        font-size: 18px;
        letter-spacing: 0px;
        color: #00955c;
        opacity: 0.5;
        margin-left: 32px;
      `}
    >{`${listName} (${itemsNumber})`}</p>
  </div>
);

const HeaderText = ({ text }) => (
  <div
    css={css`
      flex: 1;
      padding-left: 32px;
      position: relative;
    `}
  >
    <p
      css={css`
        margin: 0;
        text-align: left;
        font-family: Century Gothic;
        font-weight: bold;
        font-size: 18px;
        letter-spacing: 0px;
        color: #00955c;
        opacity: 1;
        position: relative;
        top: 69px;
      `}
    >
      {text}
    </p>
  </div>
);

const ColumnHeaders = () => (
  <div
    css={css`
      height: 120px;
      border-bottom: 1px solid #e0e0e0;
      opacity: 1;
      display: flex;
    `}
  >
    <HeaderText text={"Name"} />
    <HeaderText text={"Phone number"} />
    <HeaderText text={"Email address"} />
  </div>
);

const Button = ({ background, text, color }) => (
  <div
    css={css`
      background: ${background};
      position: relative;
      border-radius: 6px;
      opacity: 1;
      width: 352px;
      height: 64px;
      cursor: pointer;
      v-webkit-user-select: none; /* Chrome/Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+ */
    `}
  >
    <p
      css={css`
        text-align: center;
        font-family: Century Gothic;
        font-weight: bold;
        font-size: 18px;
        letter-spacing: 0px;
        color: ${color};
        opacity: 1;
        position: relative;
        top: 22px;
        margin: 0;
      `}
    >
      {text}
    </p>
  </div>
);

const ButtonsContainer = () => (
  <div
    css={css`
      position: relative;
      flex: 1;
    `}
  >
    <Button
      background={"#00955c 0% 0% no-repeat padding-box"}
      text={"+ Create contact"}
      color={"#fff"}
    />
    <div
      css={css`
        margin-top: 12px;
      `}
    >
      <Button
        background={"#E5FAF2 0% 0% no-repeat padding-box"}
        text={"Contacts"}
        color={"#00955C"}
      />
    </div>
  </div>
);
const Container = () => (
  <div
    css={css`
      overflow: auto;
      margin: 70px 64px 70px 64px;
      height: calc(100% - 140px);
      display: flex;
      width: 100%;
    `}
  >
    <ButtonsContainer />

    <ListContainer />
  </div>
);
export default function ContactPage() {
  return (
    <div
      css={css`
        position: relative;
        overflow: auto;
        padding-top: 90px;
        height: calc(100% - 90px);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f8fffc;
      `}
    >
      <Container />
    </div>
  );
}
