import { useEffect } from "react";

// firebase 
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

// redux
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./redux/store/userSlice";

// css
import "./App.css";

// components
import Header from "./components/Header";
import Feed from "./components/Main/Feed";
import Sidebar from "./components/Main/Sidebar";
import Widgets from "./components/Main/Widgets";
import Login from "./components/Login";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if(userAuth){
        dispatch(login({
              email: userAuth.email,
              uid: userAuth.uid,
              displayName: userAuth.displayName,
              photoUrl: userAuth.photoURL,
        }))
      } else {
        dispatch(logout())
      }
    })
  },[])

  return (
    <div className="max-w-screen-xl mx-auto ">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <main className="flex flex-col md:flex-row mt-1">
          <Sidebar />
          <Feed />
          <Widgets />
        </main>
      )}
    </div>
  );
}

export default App;
