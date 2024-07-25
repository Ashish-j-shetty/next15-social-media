"use client";
import { switchBlock, switchFollow } from "@/lib/action";
import { useOptimistic, useState } from "react";
function UserInfoCardInteraction({
  userId,
  isUserBlocked,
  isFollowing,
  isFollowRequestSent,
}: {
  userId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowRequestSent: boolean;
}) {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followingRequestSent: isFollowRequestSent,
  });

  const follow = async () => {
    switchOptimisticState("follow");
    try {
      await switchFollow(userId);
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followingRequestSent:
          !prev.following && !prev.followingRequestSent ? true : false,
      }));
    } catch (error) {}
  };

  const [optimisticState, switchOptimisticState] = useOptimistic(
    userState,
    (prev, value: "follow" | "block") =>
      value === "follow"
        ? {
            ...prev,
            following: prev.following && false,
            followingRequestSent:
              !prev.following && !prev.followingRequestSent ? true : false,
          }
        : {
            ...prev,
            blocked: !prev.blocked,
          }
  );

  const block = async () => {
    switchOptimisticState("block");
    try {
      await switchBlock(userId);
      setUserState((prev) => ({
        ...prev,
        blocked: !prev.blocked,
      }));
    } catch (error) {}
  };
  return (
    <>
      <form action={follow}>
        <button className="bg-blue-500 w-full text-white text-sm rounded-md py-2">
          {optimisticState.following
            ? "Following"
            : optimisticState.followingRequestSent
            ? "Friend Requset Sent"
            : "Follow"}
        </button>
      </form>

      <form action={block} className="self-end">
        <button>
          <span className="text-xs text-red-400 cursor-pointer">
            {optimisticState.blocked ? "Unblock User" : "Block User"}
          </span>
        </button>
      </form>
    </>
  );
}

export default UserInfoCardInteraction;
