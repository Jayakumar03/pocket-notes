import "./notesgroup.css";
import { useState } from "react";
import { Modal } from "./Modal.jsx";
import { Groups } from "./Groups";

export const NotesGroup = ({ setShowImage }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [groupDetails, setGroupDetails] = useState([]);

  function openModal(e) {
    e.preventDefault();
    setShowImage(true);
    setModalOpen(true);
  }

  return (
    <>
      <div className="container">
        <h1>Pocket Notes</h1>
        <button onClick={openModal}>Create Notes Group</button>

        <Groups groupDetails={groupDetails} />

        {modalOpen && (
          <Modal
            closeModal={() => setModalOpen(false)}
            setGroupDetails={setGroupDetails}
            groupDetails={groupDetails}
          />
        )}
      </div>
    </>
  );
};
