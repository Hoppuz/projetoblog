import { useParams } from "react-router";
import { database } from "../database/database";

export default function Posts() {
  const { id } = useParams();
  const filter = database.posts.filter((i) => i.id === id);
  const data = filter[0];
  return (
    <>
      <img src={data.imageUrl} />
      <h2>{data.title}</h2>
      <h2>{data.content}</h2>
    </>
  );
}
