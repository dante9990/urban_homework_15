import { FC } from "react";
import { PostInterface } from "../../types/post";
import Post from "../Post";
import style from "./style.module.css";

type Props = {
  title: string;
  posts: PostInterface[];
  deletePost: (id: number) => void;
  changeFavorite: (id: number) => void;
  updatePost: (id: number, obj: PostInterface) => void;
};

const Posts: FC<Props> = ({ title, posts, deletePost, changeFavorite, updatePost }) => {
  return (
    <section className={style.container}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.content}>
        {posts &&
          posts.map((post) => (
            <Post
              id={post.id}
              title={post.title}
              description={post.description}
              favorite={post.favorite}
              key={post.id}
              deletePost={deletePost}
              changeFavorite={changeFavorite}
              updatePost={updatePost}
            />
          ))}
      </div>
    </section>
  );
};

export default Posts;
