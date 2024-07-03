import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

async function ProfileCard() {
  const { userId } = auth();

  if (!userId) return;

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: { _count: { select: { followers: true } } },
  });

  console.log({ user });

  if (!user) return null;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src={user?.cover || "/noAvar.png"}
          className="rounded-md object-cover"
          fill
          alt=""
        />
        <Image
          src={user?.avatar || "/noAvatar.png"}
          className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10 object-cover"
          alt=""
          height={48}
          width={48}
        />
      </div>
      <div className="flex items-center flex-col gap-2  h-20">
        <span className="font-medium">
          {user.name} {user.surname}
        </span>
        <div className="flex items-center gap-2">
          <div className="relative flex ">
            <Image
              src={
                "https://images.pexels.com/photos/23638650/pexels-photo-23638650/free-photo-of-default.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              }
              className="rounded-full w-3 h-3 object-cover"
              alt=""
              height={12}
              width={12}
            />
            <Image
              src={
                "https://images.pexels.com/photos/23638650/pexels-photo-23638650/free-photo-of-default.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              }
              className="rounded-full w-3 h-3 object-cover"
              alt=""
              height={12}
              width={12}
            />
            <Image
              src={
                "https://images.pexels.com/photos/23638650/pexels-photo-23638650/free-photo-of-default.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              }
              className="rounded-full w-3 h-3 object-cover"
              alt=""
              height={12}
              width={12}
            />
          </div>
          <span className="text-xs text-gray-500 ">
            {user._count.followers} followers
          </span>
        </div>
        <button className="px-2 py-1 bg-blue-500 text-xs text-white rounded-md">
          My Profile
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
