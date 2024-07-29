import Feed from "@/components/feed/Feed";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import RightMenu from "@/components/rightMenu/RightMenu";
import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";

const UserProfile = async ({ params }: { params: { username: string } }) => {
  const username = params.username;
  const user = await prisma.user.findFirst({
    where: {
      username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true,
        },
      },
    },
  });

  if (!user) return notFound();

  const { userId: currentUserId } = auth();

  let isBlocked;
  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockedId: currentUserId,
        blockerId: user.id,
      },
    });
    if (res) isBlocked = true;
  } else {
    isBlocked = false;
  }

  if (isBlocked) return notFound();

  return (
    <div className="flex gap-6 p-6">
      <div className="hidden w-[20%] xl:block">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center justify-center">
              <div className="relative h-64 w-full">
                <Image
                  src={user.cover || "/noCover.png"}
                  className="rounded-md object-cover"
                  fill
                  alt=""
                />
                <Image
                  src={user.avatar || "/noAvatar.png"}
                  className="absolute -bottom-16 left-0 right-0 z-10 m-auto h-32 w-32 rounded-full object-cover ring-4 ring-white"
                  alt=""
                  height={128}
                  width={128}
                />
              </div>
              <h1 className="mb-4 mt-20 text-2xl font-medium">
                {user.name} {user.surname}
              </h1>
              <div className="mb-4 flex items-center justify-center gap-12">
                <div className="flex flex-col items-center">
                  <span className="font-medium">{user._count.posts}</span>
                  <span className="text-sm">Posts</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">{user._count.followers}</span>
                  <span className="text-sm">Followers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">{user._count.followings}</span>
                  <span className="text-sm">Following</span>
                </div>
              </div>
            </div>
          </div>
          <Feed username={username} />
        </div>
      </div>
      <div className="hidden w-[30%] lg:block xl:w-[30%]">
        <RightMenu user={user} />
      </div>
    </div>
  );
};

export default UserProfile;
