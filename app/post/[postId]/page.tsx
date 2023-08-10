import { getPostById } from "@/api/posts/posts.services";
import { parseHtml } from "@/utils/parseHtml";

export const revalidate = 0;
export const dynamic = "force-dynamic";

const PostContent = async ({
  params: { postId },
}: {
  params: { postId: string };
}) => {
  const content = await getPostById(postId);
  return <div>{parseHtml(content)}</div>;
};

export default PostContent;
