import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

async function ProfileCard() {
  const { userId } = auth();

  if (!userId) return;

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: { _count: { select: { followers: true } } },
  });

  if (!user) return null;

  return (
    <div className="flex flex-col gap-6 rounded-lg bg-white p-4 text-sm shadow-md">
      <div className="relative h-20">
        <Image
          src={user?.cover || "/noCover.png"}
          className="rounded-md object-cover"
          fill
          alt=""
        />
        <Image
          src={user?.avatar || "/noAvatar.png"}
          className="absolute -bottom-6 left-0 right-0 z-10 m-auto h-12 w-12 rounded-full object-cover ring-1 ring-white"
          alt=""
          height={48}
          width={48}
        />
      </div>
      <div className="flex h-20 flex-col items-center gap-2">
        <span className="font-medium">
          {user.name} {user.surname}
        </span>
        <div className="flex items-center gap-2">
          <div className="relative flex">
            <Image
              src={
                "https://images.pexels.com/photos/23638650/pexels-photo-23638650/free-photo-of-default.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              }
              className="h-3 w-3 rounded-full object-cover"
              alt=""
              height={12}
              width={12}
            />
            <Image
              src={
                "https://images.pexels.com/photos/23638650/pexels-photo-23638650/free-photo-of-default.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              }
              className="h-3 w-3 rounded-full object-cover"
              alt=""
              height={12}
              width={12}
            />
            <Image
              src={
                "https://images.pexels.com/photos/23638650/pexels-photo-23638650/free-photo-of-default.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              }
              className="h-3 w-3 rounded-full object-cover"
              alt=""
              height={12}
              width={12}
            />
          </div>
          <span className="text-xs text-gray-500">
            {user._count.followers} followers
          </span>
        </div>
        <Link
          href={`/profile/${user.username}`}
          className="rounded-md bg-blue-500 px-2 py-1 text-xs text-white"
        >
          My Profile
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
