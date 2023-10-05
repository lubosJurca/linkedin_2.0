import { useEffect, useState } from "react";

// components
import Input from "./Input";
import Posts from "./Posts";

// firebase
import { db } from "../../../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

// react-flip
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  // collection ref
  const postsColRef = collection(db, "posts");

  // queries - order by timestamp
  const q = query(postsColRef, orderBy("timeStamp", "desc"));

  useEffect(() => {
    // real time database
    onSnapshot(q, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
      });
      setPosts(posts);
    });
  }, []);

  return (
    <section className="flex-[0.6] sm:mx-2 mt-1">
      <Input />

      <ul>
        <FlipMove>
          {posts.map((post) => (
            <Posts
              key={post.id}
              name={post.name}
              description={post.description}
              message={post.message}
              photoUrl={post.photoUrl}
            />
          ))}
        </FlipMove>
      </ul>
    </section>
  );
};

export default Feed;
