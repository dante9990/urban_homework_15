import { ChangeEvent, FC, FormEvent, useState } from "react";
import style from "./style.module.css";
import { PostInterface } from "../../types/post";

type Props = {
  id: number;
  title: string;
  description: string;
  favorite: boolean;
  updatePost: (id: number, obj: PostInterface) => void;
  openForm: () => void;
};

const UpdatePost: FC<Props> = ({
  id,
  title,
  description,
  favorite,
  updatePost,
  openForm
}) => {
  const [values, setValues] = useState({
    id: id,
    title: title,
    description: description,
    favorite: favorite,
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const fieldName = event.target.name;
    setValues({ ...values, [fieldName]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updatePost(id, values);
    openForm()
  };

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
      className={style.container}
    >
      <input
        type="text"
        name="title"
        id="title"
        value={values.title}
        onChange={(event) => {
          handleChange(event);
        }}
      />
      <textarea
        name="description"
        id="description"
        value={values.description}
        onChange={(event) => {
          handleChange(event);
        }}
      ></textarea>
      <button type="submit" className={style.btn}>
        Изменить
      </button>
    </form>
  );
};

export default UpdatePost;
