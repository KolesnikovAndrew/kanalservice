import React, { useEffect } from "react";
import styles from "./Posts.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { loadUserAsync } from "./../../store/reducers/thunks";
import Post from "./Post";

function Posts() {
  const dispatch = useDispatch();

  const { isLoading, posts } = useSelector((state) => state);
  posts.length === 0 && dispatch(loadUserAsync());

  return (
    <div className={styles.posts}>
      {isLoading && <div>...Loading</div>}
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
}

export default Posts;
