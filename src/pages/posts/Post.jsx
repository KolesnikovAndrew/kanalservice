import React from "react";
import styles from "./Post.module.scss";
function Post({ post }) {
  return (
    <div className={styles.post}>
      <img src={post.photo} className={styles.post__photo}></img>
      <p>Author: {post.name}</p>
      <p>Company: {post.company}</p>
      <p>Title: {post.title}</p>
      <p className={styles.post__body}>{post.body}</p>
    </div>
  );
}

export default Post;
