import prisma from "@/lib/db";
import { CommentList } from "./CommentList";

async function Comments({ postId }: { postId: string }) {
  const comments = await prisma.comment.findMany({
    where: {
      postId: postId,
    },
    include: {
      user: true,
    },
  });

  return (
    <div>
      {/* WRITE */}
      <CommentList comments={comments} postId={postId} />
    </div>
  );
}

export default Comments;
