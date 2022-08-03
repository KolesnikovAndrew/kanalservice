import React from "react";
import styles from "./Post.module.scss";
function Post({ post }) {
  return (
    <div className={styles.post}>
      <div className={styles.autor__info}>
        <img src={post.photo} className={styles.post__photo}></img>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <p>Autor: {post.name}</p>
          <p>Company: {post.company}</p>
        </div>
      </div>

      <p>Title: {post.title}</p>
      <p className={styles.post__body}>{post.body.slice(0, 140) + "..."}</p>
    </div>
  );
}

export default Post;
