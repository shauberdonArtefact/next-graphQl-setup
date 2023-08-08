import { getPostById } from "@/api/posts/posts.services";

const PostContent = async ({
  params: { postId },
}: {
  params: { postId: string };
}) => {
  const content = await getPostById(postId);
  return <div>{content}</div>;
};

export default PostContent;
