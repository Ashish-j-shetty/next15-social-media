import Image from "next/image";
import Comments from "./Comments";
import { Like, Post as PrismaPost, User } from "@prisma/client";
import PostInteraction from "./PostInteraction";
import { Suspense } from "react";
import PostInfo from "./PostInfo";
import { auth } from "@clerk/nextjs/server";

type PostType = PrismaPost & { user: User } & {
  likes: [{ userId: string }];
} & {
  _count: { comments: number };
};

function Post({ post }: { post: PostType }) {
  const { userId } = auth();

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
        {userId === post.user.id && <PostInfo postId={post.id} />}
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

      <Suspense fallback="Loading">
        <PostInteraction
          postId={post.id}
          commentNumbers={post._count.comments}
          likes={post.likes.map((like) => like.userId)}
        />
      </Suspense>

      <Comments postId={post.id} />
    </div>
  );
}

export default Post;
