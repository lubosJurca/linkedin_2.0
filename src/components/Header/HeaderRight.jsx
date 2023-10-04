// MUI Icons
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";

// components
import HeaderOption from "./HeaderOption";
import Avatar from "react-avatar";

// redux
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../redux/store/userSlice";

// firebase
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";

const HeaderRight = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(logout());
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  };

  return (
    <section className="flex gap-5 items-center">
      <HeaderOption>
        <HomeIcon />
        <h3 className="hidden sm:flex">Home</h3>
      </HeaderOption>

      <HeaderOption>
        <PeopleIcon />
        <h3 className="hidden sm:flex">My network</h3>
      </HeaderOption>

      <HeaderOption>
        <WorkIcon />
        <h3 className="hidden sm:flex">Jobs</h3>
      </HeaderOption>

      <HeaderOption>
        <ChatIcon />
        <h3 className="hidden sm:flex">Messaging</h3>
      </HeaderOption>

      <HeaderOption>
        <NotificationsIcon />
        <h3 className="hidden sm:flex">Notifications</h3>
      </HeaderOption>

      {user && (
        <HeaderOption  className="cursor-pointer">
          <LogoutIcon onClick={handleLogout}  />
          <h3 onClick={handleLogout} className="hidden sm:flex">Log out</h3>
        </HeaderOption>
      )}
    </section>
  );
};

export default HeaderRight;
