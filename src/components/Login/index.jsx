import { useState } from "react";

// MUI
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// firebase
import { auth } from "../../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

// redux
import { useDispatch } from "react-redux";
import { login } from "../../redux/store/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const dispatch = useDispatch();

  //   login user
  const loginUser = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(
          login({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
            displayName: userCredential.user.displayName,
            photoUrl: userCredential.user.photoURL
          })
        );
      })
      .catch((error) => {
        alert(error)
      });
  };

  // register user
  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        // update name & photo
        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: profilePicture,
        }).then(() => {
          // send data to redux store
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: profilePicture,
            })
          );
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <section className="flex items-center justify-center mt-8">
      <div className="bg-white p-8 rounded-lg shadow-lg min">
        <div>
          <h1 className="flex items-center font-bold text-5xl">
            Linked{" "}
            <span>
              <LinkedInIcon style={{ color: "#0a66c2", fontSize: "5rem" }} />
            </span>
          </h1>
        </div>

        <form className="flex flex-col gap-4 mt-2 ">
          <div className="flex flex-col">
            <label htmlFor="fullName">Full name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Your full name..."
              className="border p-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="image">
              Profile picture{" "}
              <span className="text-sm text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              id="image"
              placeholder="Enter URL..."
              className="border p-1"
              value={profilePicture}
              onChange={(e) => setProfilePicture(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Email address..."
              className="border p-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Your password..."
              className="border p-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            onClick={loginUser}
            className="bg-[#0a66c2] text-white p-2 rounded active:scale-95 hover:bg-blue-700/90"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm mt-2 ">
          Not a member?{" "}
          <span
            onClick={register}
            className="text-[#0a66c2] cursor-pointer font-semibold"
          >
            Sign up{" "}
          </span>
          now!
        </p>
      </div>
    </section>
  );
};

export default Login;
