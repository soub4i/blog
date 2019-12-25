// @flow strict
import React from "react";
import { withPrefix, Link } from "gatsby";
import styles from "./Author.module.scss";

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex: ?boolean
};

const Author = ({ author, isIndex }: Props) => (
  <div className={styles["author"]}>
    <Link to="/">
      <img
        src="https://avatars0.githubusercontent.com/u/11523791?s=460&v=4"
        className={styles["author__photo"]}
        width="75"
        height="75"
        alt={author.name}
      />
    </Link>

    {isIndex === true ? (
      <h1 className={styles["author__title"]}>
        <Link className={styles["author__title-link"]} to="/">
          {author.name}
        </Link>
      </h1>
    ) : (
      <h2 className={styles["author__title"]}>
        <Link className={styles["author__title-link"]} to="/">
          {author.name}
        </Link>
      </h2>
    )}
    <p className={styles["author__subtitle"]}>{author.bio}</p>
  </div>
);

export default Author;
