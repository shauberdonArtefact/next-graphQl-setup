import { getPosts } from "@/api/posts/posts.services";

export default async function Home() {
  const data = await getPosts();
  console.log(data);
  return <main></main>;
}