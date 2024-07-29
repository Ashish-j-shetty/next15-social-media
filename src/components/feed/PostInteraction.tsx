"use client";

import { swtichLike } from "@/lib/action";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useOptimistic, useState } from "react";

function PostInteraction({
  postId,
  likes,
  commentNumbers,
}: {
  postId: string;
  likes: string[];
  commentNumbers: number;
}) {
  const { isLoaded, userId } = useAuth();
  const [likeState, setLikeState] = useState({
    likeCount: likes.length,
    isLiked: userId ? likes.includes(userId) : false,
  });

  const [optimisticLike, switchOptimisticLike] = useOptimistic(
    likeState,
    (state, value) => {
      return {
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
        isLiked: !state.isLiked,
      };
    },
  );

  const likeAction = async () => {
    switchOptimisticLike("");

    try {
      await swtichLike(postId);
      setLikeState((state) => ({
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
        isLiked: !state.isLiked,
      }));
    } catch (error) {}
  };

  return (
    <div className="my-4 flex items-center justify-between text-sm">
      <div className="flex gap-8">
        <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-2">
          <form action={likeAction}>
            <button>
              <Image
                src={optimisticLike.isLiked ? "/liked.png" : "/like.png"}
                alt=""
                height={16}
                width={16}
                className="cursor-pointer"
              />
            </button>
          </form>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            {optimisticLike.likeCount}
            <span className="hidden md:inline"> Likes</span>
          </span>
        </div>
        <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-2">
          <Image
            src="/comment.png"
            alt=""
            height={16}
            width={16}
            className="cursor-pointer"
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            {commentNumbers}
            <span className="hidden md:inline"> Comments</span>
          </span>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-2">
          <Image
            src="/share.png"
            alt=""
            height={16}
            width={16}
            className="cursor-pointer"
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            <span className="hidden md:inline">Share</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default PostInteraction;
