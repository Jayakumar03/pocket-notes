import { useState } from "react";
import { MainImage } from "./MainImage";
import { NotesGroup } from "./NotesGroup";

export const HomePage = () => {
    const [showImage, setShowImage] = useState(false)

  return (
    <>
      <NotesGroup setShowImage={setShowImage} />
      {!showImage ?  <MainImage /> : ""  }
      
    </>
  );
};
