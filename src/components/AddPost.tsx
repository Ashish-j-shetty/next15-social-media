"use client";
import { useUser } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import AddPostButton from "./AddPostButton";
import { addPost } from "@/lib/action";

function AddPost() {
  const { user, isLoaded } = useUser();

  const [desc, setDesc] = useState("");
  const [img, setImg] = useState<any>();

  if (!isLoaded) {
    return "Loading...";
  }

  return (
    <div className="flex justify-between gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
      {/* avatar */}

      <Image
        src={user?.imageUrl || "/noAvatar.png"}
        width="48"
        height="48"
        className="h-12 w-12 rounded-full object-cover"
        alt=""
      ></Image>

      {/* post */}
      <div className="flex-1">
        <form
          action={(formData) =>
            addPost({ formData, img: img?.secure_url || "" })
          }
          className="flex gap-4"
        >
          <textarea
            placeholder="What's on your mind?"
            className="flex-1 rounded-lg bg-slate-100 p-2"
            name="description"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div>
            <Image
              src="/emoji.png"
              width="20"
              height="20"
              className="h-5 w-5 cursor-pointer self-end"
              alt=""
            ></Image>

            <AddPostButton />
          </div>
        </form>
        {/* post options  */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-gray-400">
          <CldUploadWidget
            uploadPreset="funsocial"
            onSuccess={(result, { widget }) => {
              setImg(result.info);
              widget.close();
            }}
          >
            {({ open }) => {
              return (
                <div
                  className="flex cursor-pointer items-center gap-2"
                  onClick={() => open()}
                >
                  <Image src="/addImage.png" width="20" height="20" alt="" />
                  <span>Photo</span>
                </div>
              );
            }}
          </CldUploadWidget>

          <div className="flex cursor-pointer items-center gap-2">
            <Image src="/addVideo.png" width="20" height="20" alt="" />
            <span>Video</span>
          </div>
          <div className="flex cursor-pointer items-center gap-2">
            <Image src="/poll.png" width="20" height="20" alt="" />
            <span>Poll</span>
          </div>
          <div className="flex cursor-pointer items-center gap-2">
            <Image src="/addEvent.png" width="20" height="20" alt="" />
            <span>Event</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
