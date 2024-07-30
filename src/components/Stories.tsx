import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import StoryList from "./rightMenu/StoryList";

async function Stories() {
  const { userId: currentUserId } = auth();

  // const following = await prisma.follower.findMany({
  //   where: {
  //     followerId: userId,
  //   },
  //   select: {
  //     followingId: true,
  //   },
  // });

  if (!currentUserId) {
    return null;
  }

  const stories = await prisma.story.findMany({
    where: {
      expiresAt: {
        gt: new Date(),
      },
      //chekc the schema , same as feed but using pure  relation's here in the its nested.
      OR: [
        {
          user: {
            followers: {
              some: {
                followerId: currentUserId,
              },
            },
          },
        },
        {
          userId: currentUserId,
        },
      ],
    },
    include: {
      user: true,
    },
  });

  return (
    <div className="scrollbar-hide overflow-scroll rounded-lg bg-white p-4 text-xs shadow-md">
      <div className="flex w-max gap-8">
        <StoryList stories={stories} />
      </div>
    </div>
  );
}

export default Stories;
