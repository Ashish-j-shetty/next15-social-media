"use client";

import { addComment } from "@/lib/action";
import { useUser } from "@clerk/nextjs";
import { Comment, User } from "@prisma/client";
import { randomUUID } from "crypto";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type CommentWithUser = Comment & { user: User };

export const CommentList = ({
  comments,
  postId,
}: {
  comments: CommentWithUser[];
  postId: string;
}) => {
  const { user } = useUser();

  const [commentState, setCommentState] = useState(comments);
  const [desc, setDesc] = useState("");

  const [optimisticComment, addtOptimisticComment] = useOptimistic(
    commentState,
    (prevState, value: CommentWithUser) => [value, ...prevState],
  );

  const add = async () => {
    if (!user || !desc) return;

    addtOptimisticComment({
      id: "test iod ",
      description: desc,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
      userId: user.id,
      postId: postId,
      user: {
        id: user.id,
        username: "Sending Please wait",
        cover: "",
        description: "",
        avatar: user.imageUrl || "/noAvatar.png",
        name: "",
        surname: "",
        city: "",
        work: "",
        school: "",
        website: "",
        createdAt: new Date(Date.now()),
      },
    });

    try {
      const createdComment = await addComment(postId, desc);
      setCommentState((prev) => [createdComment, ...prev]);
    } catch (error) {}
  };

  return (
    <>
      {user && (
        <div className="flex items-center gap-4">
          <Image
            src={user.imageUrl || "noAvatar.png"}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
          <form
            action={add}
            className="flex w-full flex-1 items-center justify-between rounded-xl bg-slate-100 px-6 py-2 text-sm"
          >
            <input
              type="text"
              placeholder="Write a comment..."
              className="flex-1 bg-transparent p-2 outline-none"
              onChange={(e) => setDesc(e.target.value)}
            />
            <Image
              src={"/emoji.png"}
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </form>
        </div>
      )}
      {/* COMMENTS  */}
      <div>
        {/* COMMENT  */}
        {optimisticComment.map((comment) => (
          <div className="mt-6 flex justify-between gap-4" key={comment.id}>
            {/* AVATAR  */}
            <Image
              src={comment.user.avatar || "noAvatar.png"}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />
            {/* Description  */}
            <div className="flex flex-1 flex-col gap-2">
              <span className="font-medium">
                {comment.user.name}
                {comment.user.surname}
              </span>
              <p>{comment.description}</p>
              <div className="flex items-center gap-8 text-xs text-gray-500">
                <div className="mt-2 flex items-center gap-4">
                  <Image
                    src={"/like.png"}
                    alt=""
                    width={12}
                    height={12}
                    className="h-4 w-4 cursor-pointer"
                  />
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500">todo Likes</span>
                  <div>Reply</div>
                </div>
              </div>
            </div>

            {/* ICON */}
            <Image
              src={"/more.png"}
              alt=""
              width={16}
              height={16}
              className="h-4 w-4 cursor-pointer"
            ></Image>
          </div>
        ))}
      </div>
    </>
  );
};
