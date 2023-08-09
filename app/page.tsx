import { getPosts } from "@/api/posts/posts.services";
import Link from "next/link";
import Search from "./search/Search";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <Search />
      <ul>
        {posts?.map((post) => (
          <li key={post.node.slug}>
            <h3>
              <Link href={`post/${post.node.slug}`}>{post.node.title}</Link>
            </h3>
          </li>
        ))}
      </ul>
    </main>
  );
}
