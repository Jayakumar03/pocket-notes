import { useState } from "react";

export const Groups = ({ groupDetails }) => {
  const [openNoteModal, setNoteModal] = useState(false);

  return (
    <>
      {groupDetails.map(({ groupName, color }) => {
        return (
          <div className="group-container">
            <button
              onClick={() => {
                setNoteModal(true);
              }}
            >
              <span className="group-logo" style={{ backgroundColor: color }}>
                <p>{groupName.slice(0, 2).toUpperCase()}</p>
              </span>
              <p className="group-name">{groupName}</p>
            </button>
            {openNoteModal ? <IndiviualNotes /> : ""}
          </div>
        );
      })}
    </>
  );
};
