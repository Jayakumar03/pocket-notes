import "./notesgroup.css";
import { useState } from "react";
import { Modal } from "./Modal.jsx";
import { Groups } from "./Groups";

export const NotesGroup = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [groupDetails, setGroupDetails] = useState([]);

  function openModal(e) {
    e.preventDefault();
    setModalOpen(true);
  }

  return (
    <>
      <div className="container">
        {modalOpen && (
          <Modal
            closeModal={() => setModalOpen(false)}
            setGroupDetails={setGroupDetails}
            groupDetails={groupDetails}
          />
        )}

        
        <h1>Pocket Notes</h1>
        <button onClick={openModal}>Create Notes Group</button>

        <Groups groupDetails={groupDetails} />
      </div>
    </>
  );
};
