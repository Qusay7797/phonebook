/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useState } from "react";
import Modal from "react-modal";
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

const itemsToDisplay = [
  { name: "Qusay", phoneNumber: "0787097853", email: "qusay@qus.com" },
  { name: "boyah", phoneNumber: "0787097853", email: "qusay@qus.com" },
  { name: "loauy", phoneNumber: "0787097853", email: "qusay@qus.com" },
  { name: "wayaya", phoneNumber: "0787097853", email: "qusay@qus.com" },
];

const InputField = ({ inputFieldPlaceHolder, valueSetter, smallWidth }) => {
  return (
    <div>
      <input
        onChange={(v) => valueSetter(v.target.value)}
        css={css`
          margin-top: 19px;
          display: block;
          width: ${smallWidth ? "225px" : "512px"};
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
    </div>
  );
};

const ModalButton = ({ background, text, color, border }) => (
  <div
    css={css`
      background: ${background};
      position: relative;
      border-radius: 6px;
      opacity: 1;
      width: 554px;
      height: 64px;
      margin-top: 20px;
      cursor: pointer;
      border: ${border};
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
const CreateContact = ({ modalIsOpen, closeModal, setItems, items }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const createContact = () => {
    const name = `${firstName} ${lastName}`;
    const item = { name: name, phoneNumber: phoneNumber, email: email };

    setItems([...items, item]);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Create Contact"
      ariaHideApp={false}
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
        {firstName[0]}
      </div>
      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            flex: 1;
          `}
        >
          <InputField
            inputFieldPlaceHolder={"First Name"}
            smallWidth
            valueSetter={setFirstName}
          />
        </div>
        <div
          css={css`
            flex: 1;
            margin-left: 19px;
          `}
        >
          <InputField
            inputFieldPlaceHolder={"Last Name"}
            smallWidth
            valueSetter={setLastName}
          />
        </div>
      </div>
      <InputField
        inputFieldPlaceHolder={"Phone number"}
        valueSetter={setPhoneNumber}
      />
      <InputField
        inputFieldPlaceHolder={"Email address"}
        valueSetter={setEmail}
      />
      <div onClick={() => createContact()}>
        <ModalButton
          background={"#00955C 0% 0% no-repeat padding-box"}
          text={"Create"}
          color={"#fff"}
          border={"1px solid #00955C"}
        />
      </div>

      <div onClick={() => closeModal()}>
        <ModalButton
          background={"#fff 0% 0% no-repeat padding-box"}
          text={"Cancel"}
          color={"#7E7E7E"}
          border={"1px solid #BFBFBF"}
        />
      </div>
    </Modal>
  );
};

const ItemsContainer = ({ items }) => {
  const [selected, setSelected] = useState("Qusay");

  return (
    <div
      css={css`
        margin-top: 19px;
      `}
    >
      {items.map(({ name, phoneNumber, email }) => (
        <Item
          key={name}
          name={name}
          phoneNumber={phoneNumber}
          email={email}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};

const ListContainer = ({ items }) => (
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
    <ListName listName={"Contacts"} itemsNumber={items.length} />
    <ItemsContainer items={items} />
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

const ButtonsContainer = ({ setItems, items }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div
      css={css`
        position: relative;
        flex: 1;
      `}
    >
      <div onClick={() => openModal()}>
        <Button
          background={"#00955c 0% 0% no-repeat padding-box"}
          text={"+ Create contact"}
          color={"#fff"}
        />
      </div>

      <CreateContact
        items={items}
        setItems={setItems}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
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
};
const Container = () => {
  const [items, setItems] = useState(itemsToDisplay);

  return (
    <div
      css={css`
        overflow: auto;
        margin: 70px 64px 70px 64px;
        height: calc(100% - 140px);
        display: flex;
        width: 100%;
      `}
    >
      <ButtonsContainer items={items} setItems={setItems} />

      <ListContainer items={items} />
    </div>
  );
};
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
