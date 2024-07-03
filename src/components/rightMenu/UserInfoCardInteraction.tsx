"use client";
function UserInfoCardInteraction({
  userId,
  currentUserId,
  isUserBlocked,
  isFollowing,
  isFollowRequestSent,
}: {
  userId: string;
  currentUserId?: string | null;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowRequestSent: boolean;
}) {
  return (
    <>
      <button className="bg-blue-500 w-full text-white text-sm rounded-md py-2">
        {isFollowing
          ? "Followind"
          : isFollowRequestSent
          ? "Friend Requset Sent"
          : "Follow"}
      </button>

      <span className="self-end text-xs text-red-400 cursor-pointer">
        {isUserBlocked ? "Unblock User" : "Block User"}
      </span>
    </>
  );
}

export default UserInfoCardInteraction;
