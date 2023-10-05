
import { forwardRef } from "react";

// MUI
import { Avatar } from "@mui/material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ShareIcon from '@mui/icons-material/Share';
import InputOption from "./InputOption";

const Posts = forwardRef(({ name, description, message, photoUrl },ref) => {
    
  return (
    <li ref={ref} className="bg-white p-4 mb-2 rounded-lg">
      <div id="postHeader" className="flex mb-2  gap-2">
        <Avatar  src={photoUrl || ""}/>
        <div>
          <h2 className="font-bold text-base">{name}</h2>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
      </div>

      <div className="my-4">
        <p>{message}</p>
      </div>

      <div className="flex justify-evenly text-gray-500">
        <InputOption >
            <ThumbUpOffAltIcon />
            <h4>Like</h4>
        </InputOption>
        <InputOption >
            <ChatBubbleOutlineOutlinedIcon />
            <h4>Comment</h4>
        </InputOption>
        <InputOption >
            <ShareIcon />
            <h4>Share</h4>
        </InputOption>
        <InputOption >
            <SendOutlinedIcon />
            <h4>Send</h4>
        </InputOption>
      </div>
    </li>
  );
});

export default Posts;
