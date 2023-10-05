// react avatar
import Avatar from "react-avatar";

// images
import bgPicture2 from "../../../assets/images/bgPicture2.jpg";

// redux
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/store/userSlice";



const Sidebar = () => {
  const user = useSelector(selectUser)

  const recentItem = (hashtag) => {
    return (
      <p className="text-gray-500">
        <span>#</span>
        {hashtag}
      </p>
    );
  };

  return (
    <section className="flex-[0.2] sticky sm:top-20 z-40 text-center h-fit  ">
      <div className="border pb-2 border-b-2 bg-white mb-2">
        <img src={bgPicture2} className="h-[3.5rem] w-full object-cover" />
        <Avatar src={user?.photoUrl} name={user?.displayName} round="50%" size="50" className="-mt-3 object-cover" />
        <h2 className="font-bold underline">{user.displayName}</h2>
        <h4 className="text-gray-500 text-sm">{user.email}</h4>
      </div>

      <div className=" text-gray-500 flex flex-col items-center w-full p-2 mb-2 bg-white sm:justify-between">
        <div className="flex justify-center w-full gap-5 sm:justify-between">
          <p>Who viewed you</p>
          <p className="text-[#0a66c2]">2,543</p>
        </div>
        <div className="flex justify-center w-full sm:justify-between gap-5 ">
          <p>View on post</p>
          <p className="text-[#0a66c2]">2,577</p>
        </div>
      </div>

      <div className="bg-white p-2 mb-4">
        <p className="pb-2 sm:text-left underline">Recent</p>
        <div className="flex flex-wrap gap-2 sm:gap-1 justify-center">
          {recentItem("react")}
          {recentItem("responsive")}
          {recentItem("clone")}
          {recentItem("fun")}
          {recentItem("learning")}
          {recentItem("redux")}
          {recentItem("firebase")}
          {recentItem("avatar")}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
