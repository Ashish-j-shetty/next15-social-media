import Image from "next/image";
import Comments from "./Comments";
import { Like, Post as PrismaPost, User } from "@prisma/client";
import PostInteraction from "./PostInteraction";

type PostType = PrismaPost & { user: User } & {
  likes: [{ userId: string }];
} & {
  _count: { comments: number };
};

function Post({ post }: { post: PostType }) {
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={post.user.avatar || "/noAvatar.png"}
            alt=""
            height={40}
            width={40}
            className="h-10 w-10 rounded-full"
          />
          <span className="font-medium">
            {post.user.name} {post.user.surname}
          </span>
        </div>
        <Image src="/more.png" alt="" height={16} width={16} />
      </div>
      {/* Description */}
      <div className="flex flex-col gap-4">
        {post.image && (
          <div className="relative min-h-96 w-full">
            <Image
              src={post.image}
              alt=""
              fill
              className="rounded-md object-cover"
            />
          </div>
        )}
        <p className="">{post.description}</p>
      </div>

      {/* Interactions  */}

      <PostInteraction
        postId={post.id}
        commentNumbers={post._count.comments}
        likes={post.likes.map((like) => like.userId)}
      />

      <Comments postId={post.id} />
    </div>
  );
}

export default Post;
