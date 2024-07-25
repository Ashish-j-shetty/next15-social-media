import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import FriendRequestList from "./FriendRequestList";

async function FriendRequests() {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const friendRequests = await prisma.followRequest.findMany({
    where: {
      recieverId: userId,
    },
    include: {
      sender: true,
    },
    take: 3,
  });

  if (friendRequests.length === 0) return null;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP  */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href={"/"} className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      {/* USER  */}
      <FriendRequestList requests={friendRequests} />
    </div>
  );
}

export default FriendRequests;
