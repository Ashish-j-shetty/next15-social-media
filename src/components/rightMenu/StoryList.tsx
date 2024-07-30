"use client";

import { addStory } from "@/lib/action";
import { useUser } from "@clerk/nextjs";
import { Story, User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type StoryWithUser = Story & {
  user: User;
};

function StoryList({ stories }: { stories: StoryWithUser[] }) {
  const [storyList, setStoryList] = useState(stories);
  const [img, setImg] = useState<any>();

  const { user, isLoaded } = useUser();
  const [optimisticStories, addOptimisticStory] = useOptimistic(
    storyList,
    (prevState, newStory: StoryWithUser) => [newStory, ...prevState],
  );

  if (!user && !isLoaded) return "Loading...";
  if (!user && isLoaded) return null;

  const add = async () => {
    if (!img?.secure_url) return;

    addOptimisticStory({
      id: "test iod ",
      image: img.secure_url,
      createdAt: new Date(Date.now()),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      userId: user.id,

      user: {
        id: user.id,
        username: "Adding...",
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
      const createdStory = await addStory(img.secure_url);
      setStoryList((prev) => [createdStory!, ...prev]);
      setImg(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CldUploadWidget
        uploadPreset="funsocial"
        onSuccess={(result, { widget }) => {
          setImg(result.info);
          widget.close();
        }}
      >
        {({ open }) => {
          return (
            <div className="relative flex cursor-pointer flex-col items-center gap-2">
              <Image
                src={img?.secure_url || user?.imageUrl || "/noAvatar.png"}
                height={80}
                width={80}
                alt="storie image "
                className="h-20 w-20 rounded-full object-cover ring-2"
                onClick={() => open()}
              />
              {img ? (
                <form action={add}>
                  <button className="rounded-md bg-blue-500 px-2 py-1 text-xs text-white">
                    Post
                  </button>
                </form>
              ) : (
                <span className="font-medium">Add a Story</span>
              )}
              <div className="absolute top-1 text-6xl text-gray-200">+</div>
            </div>
          );
        }}
      </CldUploadWidget>

      {optimisticStories.map((story) => (
        <div
          className="flex cursor-pointer flex-col items-center gap-2"
          key={story.id}
        >
          <Image
            src={story.user.avatar || "/noAvatar.png"}
            height={80}
            width={80}
            alt="storie image "
            className="h-20 w-20 rounded-full ring-2"
          />
          <span className="font-medium">
            {story.user.name || story.user.username}
          </span>
        </div>
      ))}
    </>
  );
}

export default StoryList;
