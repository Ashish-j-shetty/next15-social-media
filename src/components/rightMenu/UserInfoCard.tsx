import prisma from "@/lib/db";
import { formatDateToLocal } from "@/lib/formatters";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import UserInfoCardInteraction from "./UserInfoCardInteraction";
import UpdateUser from "./UpdateUser";

async function UserInfoCard({ user }: { user: User }) {
  let isBlocked = false;
  let isFollowing = false;
  let isFollowRequestSent = false;

  const { userId: currentUserId } = auth();
  const userId = user.id;

  if (currentUserId) {
    const blockedResponse = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: userId,
      },
    });

    if (blockedResponse) {
      isBlocked = true;
    }
  }
  if (currentUserId) {
    const followerResponse = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });

    if (followerResponse) {
      isFollowing = true;
    }
  }

  if (currentUserId) {
    const followRequestResponse = await prisma.followRequest.findFirst({
      where: {
        recieverId: userId,
        senderId: currentUserId,
      },
    });

    if (followRequestResponse) {
      isFollowing = true;
    }
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP  */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        {currentUserId === userId ? (
          <UpdateUser user={user} />
        ) : (
          <Link href={"/"} className="text-blue-500 text-xs">
            See All
          </Link>
        )}
      </div>

      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">
            {user.name} {user.surname}
          </span>
          <span className="text-sm">@{user.username}</span>
        </div>
        {user.description && <p>{user.description}</p>}
        {user.city && (
          <div className="flex items-center gap-2 ">
            <Image src="/map.png" alt="" height="16" width="16" />
            <span>
              Living in <b>{user.city}</b>
            </span>
          </div>
        )}
        {user.school && (
          <div className="flex items-center gap-2 ">
            <Image src="/school.png" alt="" height="16" width="16" />
            <span>
              Went to <b>{user.school}</b>
            </span>
          </div>
        )}
        {user.work && (
          <div className="flex items-center gap-2 ">
            <Image src="/work.png" alt="" height="16" width="16" />
            <span>
              Works at <b>{user.work}</b>
            </span>
          </div>
        )}
        <div className="flex items-center justify-between ">
          {user.website && (
            <div className="flex items-center gap-1 ">
              <Image src="/link.png" alt="" height="16" width="16" />
              <Link href={user.website} className="text-blue-500 font-medium">
                {user.website}
              </Link>
            </div>
          )}

          <div className="flex items-center gap-1">
            <Image src="/date.png" alt="" height="16" width="16" />
            <span>Joined {formatDateToLocal(user.createdAt)}</span>
          </div>
        </div>

        {currentUserId && currentUserId !== userId && (
          <UserInfoCardInteraction
            userId={userId}
            isUserBlocked={isBlocked}
            isFollowing={isFollowing}
            isFollowRequestSent={isFollowRequestSent}
          />
        )}
      </div>
    </div>
  );
}

export default UserInfoCard;
