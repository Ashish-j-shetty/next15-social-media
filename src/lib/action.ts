"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./db";
import z, { object } from "zod";

/**
 * Toggles the follow status between the current authenticated user and another user.
 *
 * This function handles three main scenarios:
 * 1. If the current user is already following the target user, it will unfollow them.
 * 2. If the current user is not following the target user, it checks if there is a pending follow request:
 *    - If a follow request exists, it cancels the follow request.
 *    - If no follow request exists, it creates a new follow request.
 *
 * @param {string} userId - The ID of the user to follow or unfollow.
 * @throws Will throw an error if the user is not authenticated.
 * @throws Will throw an error if any database operation fails.
 *
 */
export const switchFollow = async (userId: string) => {
  const { userId: currentUserId } = auth();
  if (!currentUserId) {
    throw new Error("User not authenticated");
  }

  try {
    const followingInfo = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });
    // unfollow logic.
    if (followingInfo) {
      await prisma.follower.delete({
        where: {
          id: followingInfo.id,
        },
      });
    } else {
      //cancelling the follow request
      const existingFollowRequest = await prisma.followRequest.findFirst({
        where: {
          recieverId: userId,
          senderId: currentUserId,
        },
      });

      if (existingFollowRequest) {
        await prisma.followRequest.delete({
          where: {
            id: existingFollowRequest.id,
          },
        });
      } else {
        await prisma.followRequest.create({
          data: {
            senderId: currentUserId,
            recieverId: userId,
          },
        });
      }
    }
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
};

export const switchBlock = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    throw new Error("User not authenticated");
  }

  try {
    const blockedInfo = await prisma.block.findFirst({
      where: {
        blockedId: currentUserId,
        blockerId: userId,
      },
    });

    if (blockedInfo) {
      await prisma.block.delete({
        where: {
          id: blockedInfo.id,
        },
      });
    } else {
      await prisma.block.create({
        data: {
          blockedId: currentUserId,
          blockerId: userId,
        },
      });
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const acceptFollowRequest = async (userId: string) => {
  const { userId: currentUserId } = auth();
  if (!currentUserId) {
    throw new Error("User not authenticated");
  }

  try {
    const existingFollowRequest = await prisma.followRequest.findFirst({
      where: {
        recieverId: currentUserId,
        senderId: userId,
      },
    });

    if (existingFollowRequest) {
      console.log({ existingFollowRequest });
      await prisma.followRequest.delete({
        where: {
          id: existingFollowRequest.id,
        },
      });
    }

    await prisma.follower.create({
      data: {
        followerId: userId,
        followingId: currentUserId,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong..!");
  }
};

export const declineFollowRequest = async (userId: string) => {
  const { userId: currentUserId } = auth();
  if (!currentUserId) {
    throw new Error("User not authenticated");
  }

  try {
    const existingFollowRequest = await prisma.followRequest.findFirst({
      where: {
        recieverId: currentUserId,
        senderId: userId,
      },
    });

    if (existingFollowRequest) {
      await prisma.followRequest.delete({
        where: {
          id: existingFollowRequest.id,
        },
      });
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong..!");
  }
};

export const updateProfile = async (
  prevState: { success: boolean; error: boolean },
  payload: { formdata: FormData; coverImageUrl: string },
) => {
  const { formdata, coverImageUrl } = payload;
  const fields = Object.fromEntries(formdata);

  const filterdFields = Object.fromEntries(
    Object.entries(fields).filter(([_, value]) => value !== ""),
  );

  const Profile = z.object({
    cover: z.string().optional(),
    name: z.string().max(60).optional(),
    surname: z.string().max(60).optional(),
    description: z.string().max(60).optional(),
    city: z.string().max(60).optional(),
    work: z.string().max(60).optional(),
    school: z.string().max(60).optional(),
    website: z.string().max(60).optional(),
  });

  const validatedFields = Profile.safeParse({
    ...filterdFields,
    cover: coverImageUrl,
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return { success: false, error: true };
  }

  const { userId } = auth();

  if (!userId) {
    return { success: false, error: true };
  }

  try {
    await prisma.user.update({
      data: validatedFields.data,
      where: {
        id: userId,
      },
    });
    return { success: true, error: false };
  } catch (error) {
    console.log("something went wrong !");
    return { success: false, error: true };
  }
};
