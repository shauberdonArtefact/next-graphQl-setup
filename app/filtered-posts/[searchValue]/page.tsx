import { searchPosts } from "@/api/posts/posts.services";
import { parseHtml } from "@/utils/parseHtml";

const filteredPosts = async ({
  params: { searchValue },
}: {
  params: { searchValue: string };
}) => {
  const posts = await searchPosts(searchValue);

  if (!posts?.length) return <p>Aucun résultats</p>;

  return (
    <div>
      <div style={{ marginBottom: "12px" }}>Résultats :</div>
      <ul>
        {posts?.map((post, i) => (
          <li key={i}>
            <h3>Title: {post.node.title}</h3>
            <p>Content: {parseHtml(post.node.content)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default filteredPosts;
