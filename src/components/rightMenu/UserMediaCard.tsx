import prisma from "@/lib/db";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

async function UserMediaCard({ user }: { user: User }) {
  const postsWithMedia = await prisma.post.findMany({
    where: {
      userId: user.id,
      image: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
      {/* TOP  */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href={"/"} className="text-xs text-blue-500">
          See All
        </Link>
      </div>
      {/* BOTTOM  */}
      <div className="justify-betwen flex flex-wrap gap-4">
        {postsWithMedia.length
          ? postsWithMedia.map((post) => {
              return (
                <div className="relative h-24 w-1/5" key={post.id}>
                  <Image
                    src={post.image!}
                    fill
                    className="rounded-md object-cover"
                    alt=""
                  />
                </div>
              );
            })
          : "No media found!"}
      </div>
    </div>
  );
}

export default UserMediaCard;
