import { useEffect, useState } from "react";

// components
import Input from "./Input";
import Posts from "./Posts";

// firebase
import { db } from "../../../../firebase";
import { collection,onSnapshot, orderBy, query } from "firebase/firestore";

// redux
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/store/userSlice"

const Feed = () => {
  const user = useSelector(selectUser)
  const [posts, setPosts] = useState([]);

  // collection ref
  const postsColRef = collection(db, "posts");

  // queries - order by timestamp
  const q = query(postsColRef,orderBy("timeStamp","desc"))


  useEffect(() => {
    // real time database
    onSnapshot( q ,(snapshot) => {
      let posts = []
        snapshot.docs.forEach((doc) => {
          posts.push({...doc.data(),id: doc.id})
        })
        setPosts(posts)
    })

  }, []);

  return (
    <section className="flex-[0.6] sm:mx-2">
      <Input  />
      {posts.map((post,i) => (
        <Posts
        key={i}
          name={user.displayName}
          description="React developer"
          message={post.message}
        />
      ))}
      
    </section>
  );
};

export default Feed;
