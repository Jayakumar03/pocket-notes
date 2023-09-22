export const Groups = ({ groupDetails }) => {
  return (
    <>
      {groupDetails.map(({ groupName, color }) => {
        return (
          

          
          <div className="group-container">
            <button>
            <span className="group-logo" style={{ backgroundColor: color }}>
              <p>{groupName.slice(0, 2).toUpperCase()}</p>
            </span>
            <p className="group-name">{groupName}</p>
            </button>
          </div>
        );
      })}
    </>
  );
};
