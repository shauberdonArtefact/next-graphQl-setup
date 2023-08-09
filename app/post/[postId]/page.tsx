import { getPostById } from "@/api/posts/posts.services";
import { parseHtml } from "@/utils/parseHtml";

const PostContent = async ({
  params: { postId },
}: {
  params: { postId: string };
}) => {
  const content = await getPostById(postId);
  return <div>{parseHtml(content)}</div>;
};

export default PostContent;
