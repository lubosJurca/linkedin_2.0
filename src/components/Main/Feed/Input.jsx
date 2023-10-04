import { useRef } from "react";

// MUI Icons
import CreateIcon from "@mui/icons-material/Create";
import PhotoIcon from "@mui/icons-material/Photo";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

// components
import InputOption from "./InputOption";


// firebase
import { db } from "../../../../firebase";
import { collection,addDoc, serverTimestamp } from "firebase/firestore";


const Input = () => {
  const inputRef = useRef()
  const postsColRef = collection(db,"posts")

  const sendPost = async(e) => {
    e.preventDefault();

    

    addDoc(postsColRef,{
      name: "Lubos Jurca",
      description: "Testing",
      message: inputRef.current.value ,
      photoUrl: "",
      timeStamp: serverTimestamp()
    });

    inputRef.current.value = ""
  };

 

  return (
    <div className="bg-white p-5 mb-2">
      <div className="flex bg-white p-2 border rounded-3xl">
        <CreateIcon style={{ color: "grey" }} />
        <form className="flex flex-1 ">
          <input type="text" className="flex-1" ref={inputRef} />
          <button type="submit" className="hidden" onClick={sendPost}>
            Send
          </button>
        </form>
      </div>

      <div className="flex justify-evenly mt-3">
        <InputOption>
          <PhotoIcon style={{ color: "#70B5F9" }} />
          <h4>Photo</h4>
        </InputOption>
        <InputOption>
          <VideoLibraryIcon style={{ color: "#E7A33E" }} />
          <h4>Video</h4>
        </InputOption>
        <InputOption>
          <CalendarMonthIcon style={{ color: "#C0CBCD" }} />
          <h4>Event</h4>
        </InputOption>
        <InputOption>
          <CalendarViewDayIcon style={{ color: "#7FC15E" }} />
          <h4>Write article</h4>
        </InputOption>
      </div>
    </div>
  );
};

export default Input;
