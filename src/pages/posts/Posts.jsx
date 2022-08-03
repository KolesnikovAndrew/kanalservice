import React, { useEffect } from "react";
import styles from "./Posts.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { loadUserAsync } from "./../../store/reducers/thunks";
import Post from "./Post";
import { randomNumber } from "./../../components/utils/randomNumber";

function Posts() {
  const dispatch = useDispatch();

  const { isLoading, posts } = useSelector((state) => state);

  if (posts.length === 0) {
    for (let i = 1; i < randomNumber(5, 15); i++) {
      dispatch(loadUserAsync(i));
    }
  }

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
