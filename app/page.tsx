import { getPosts } from "@/api/posts/posts.services";
import Link from "next/link";

export const revalidate = 10;

export default async function Home() {
  const posts = await getPosts();
  console.table(posts?.[0].node);
  return (
    <main>
      <Link href="search">Rechercher un article</Link>
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
