import { useEffect, useState } from "react";
import Posts from "../Posts";
import style from "./style.module.css";
import { PostInterface } from "../../types/post";

const Main = () => {
  const [posts, setPosts] = useState<PostInterface[]>([
    {
      id: 1,
      title: "Свободный Кожанный Ножницы",
      description:
        "Our moist-inspired Берет brings a taste of luxury to your perfumed lifestyle",
      favorite: false,
    },
    {
      id: 2,
      title: "Великолепный Стальной Автомобиль",
      description:
        "Stylish Автомобиль designed to make you stand out with digital looks",
      favorite: false,
    },
    {
      id: 3,
      title: "Интеллектуальный Деревянный Носки",
      description:
        "Experience the черный brilliance of our Плащ, perfect for flawed environments",
      favorite: false,
    },
    {
      id: 4,
      title: "Интеллектуальный Кожанный Майка",
      description:
        "Our hamster-friendly Шарф ensures cooperative comfort for your pets",
      favorite: true,
    },
    {
      id: 5,
      title: "Большой Гранитный Сабо",
      description:
        "New зеленый Кулон with ergonomic design for compassionate comfort",
      favorite: true,
    },
  ]);
  const [favorites, setFavorites] = useState<PostInterface[]>([]);

  const deletePost = (id: number) => {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  };

  const changeFavorite = (id: number) => {
    const findPost = posts.findIndex((post) => post.id === id);
    posts[findPost].favorite = !posts[findPost].favorite;
    setPosts([...posts]);
  };

  const updatePost = (id: number, obj: PostInterface) => {
    const findPost = posts.findIndex((post) => post.id === id);
    posts[findPost].title = obj.title;
    posts[findPost].description = obj.description;
    setPosts([...posts]);
  };

  useEffect(() => {
    const favoritePosts = posts.filter((post) => post.favorite === true);
    setFavorites(favoritePosts);
  }, [posts]);

  return (
    <main className={style.container}>
      <Posts
        title="Посты"
        posts={posts}
        deletePost={deletePost}
        changeFavorite={changeFavorite}
        updatePost={updatePost}
      />
      <Posts
        title="Избранное"
        posts={favorites}
        deletePost={deletePost}
        changeFavorite={changeFavorite}
        updatePost={updatePost}
      />
    </main>
  );
};

export default Main;
