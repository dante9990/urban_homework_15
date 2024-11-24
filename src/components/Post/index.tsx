import { FC, useState } from "react";
import Button from "../Button";
import Menu from "../Menu";
import style from "./style.module.css";
import UpdatePost from "../UpdatePost";
import { PostInterface } from "../../types/post";

type Props = {
  id: number;
  title: string;
  description: string;
  favorite: boolean;
  deletePost: (id: number) => void;
  changeFavorite: (id: number) => void;
  updatePost: (id: number, obj: PostInterface) => void;
};

const Post: FC<Props> = ({
  id,
  title,
  description,
  favorite,
  deletePost,
  changeFavorite,
  updatePost,
}) => {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const handleDelete = () => {
    deletePost(id);
    setIsVisibleMenu(false);
  };

  const handleChange = () => {
    changeFavorite(id);
    setIsVisibleMenu(false);
  };

  const openForm = () => {
    setIsVisibleForm(!isVisibleForm);
    setIsVisibleMenu(false);
  };

  return (
    <>
      <article className={style.container}>
        <div className={style.headerPost}>
          <h3 className={style.title}>{title}</h3>{" "}
          <Button isVisible={isVisibleMenu} setIsVisible={setIsVisibleMenu} />
          {isVisibleMenu && (
            <Menu
              favorite={favorite}
              handleDelete={handleDelete}
              handleChange={handleChange}
              openForm={openForm}
            />
          )}
        </div>
        <p className={style.text}>{description}</p>
        <div
          className={`${style.favorite} ${favorite ? style.full : ""}`}
        ></div>
        {isVisibleForm && (
          <UpdatePost
            id={id}
            title={title}
            description={description}
            favorite={favorite}
            updatePost={updatePost}
            openForm={openForm}
          />
        )}
      </article>
    </>
  );
};

export default Post;
