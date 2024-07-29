import { auth } from "@clerk/nextjs/server";
import Post from "./Post";
import prisma from "@/lib/db";

async function Feed({ username }: { username?: string }) {
  const { userId } = auth();

  let posts: any[] = [];

  if (username) {
    // if the user lands in his profile page , show only his posts .
    posts = await prisma.post.findMany({
      where: {
        user: {
          username,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  if (!username && userId) {
    // if the user is in general feed , then find posts from people they folllow.

    const following = await prisma.follower.findMany({
      where: {
        followerId: userId,
      },
      select: {
        followingId: true,
      },
    });

    const followingIds = following.map((f) => f.followingId);
    console.log({ followingIds });

    posts = await prisma.post.findMany({
      where: {
        userId: {
          in: followingIds,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  return (
    <div className="flex flex-col gap-12 rounded-lg bg-white p-4 text-sm shadow-md">
      {posts.length
        ? posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        : "No posts found!"}
    </div>
  );
}

export default Feed;
