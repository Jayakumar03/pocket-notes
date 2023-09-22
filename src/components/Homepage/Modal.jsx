import { useState } from "react";
import "./modal.css";

export const Modal = ({ closeModal, setGroupDetails, groupDetails }) => {
  const [groupName, setGroupName] = useState("");
  const [groupColor, setGroupColor] = useState("");

  function inputChangeHandler(e) {
    e.preventDefault();
    setGroupName(e.target.value);
  }

  function colorUpdater(e) {
    e.preventDefault();
    let color = e.target.getAttribute("id");
    setGroupColor(color);
  }

  function UpdateMainStateHandler(e) {
    e.preventDefault();
    console.log(groupName, groupColor);

    setGroupDetails([
      ...groupDetails,
      {
        groupName: groupName ? groupName : "Example group",
        color: groupColor ? groupColor : "purple",
      },
    ]);

    closeModal();
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={closeModal} id="cancel-Btn">
          X
        </button>
        <div className="title">
          <h2>Create a new notes group</h2>
        </div>
        <div className="body">
          <div className="input-container">
            <h3>Group Name</h3>
            <input
              type="text"
              placeholder="Group Name"
              value={groupName}
              onChange={inputChangeHandler}
            ></input>
          </div>

          <div className="input-container">
            <h3>Choose colour</h3>
            <button className="colors" id="red" onClick={colorUpdater}></button>
            <button
              className="colors"
              id="blue"
              onClick={colorUpdater}
            ></button>
            <button
              className="colors"
              id="green"
              onClick={colorUpdater}
            ></button>
            <button
              className="colors"
              id="purple"
              onClick={colorUpdater}
            ></button>
            <button
              className="colors"
              id="brown"
              onClick={colorUpdater}
            ></button>
            <button
              className="colors"
              id="saddlebrown"
              onClick={colorUpdater}
            ></button>
          </div>
        </div>
        <div className="footer">
          <button onClick={UpdateMainStateHandler} id="create-Btn">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
