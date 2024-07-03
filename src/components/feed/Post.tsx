import Image from "next/image";
import Comments from "./Comments";

function Post() {
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* USER */}
      <div className="flex  justify-between items-center ">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/26629035/pexels-photo-26629035/free-photo-of-pink-flamingo-1.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            height={40}
            width={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Demo Droid</span>
        </div>
        <Image src="/more.png" alt="" height={16} width={16} />
      </div>
      {/* Description */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/23638650/pexels-photo-23638650/free-photo-of-default.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p className="">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for lorem ipsum will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>

      {/* Interactions  */}
      <div className="flex  items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex rounded-xl items-center gap-4 bg-slate-50 p-2 ">
            <Image
              src="/like.png"
              alt=""
              height={16}
              width={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123
              <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex rounded-xl items-center gap-4 bg-slate-50 p-2 ">
            <Image
              src="/comment.png"
              alt=""
              height={16}
              width={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123
              <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div>
          <div className="flex rounded-xl items-center gap-4 bg-slate-50 p-2 ">
            <Image
              src="/share.png"
              alt=""
              height={16}
              width={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123
              <span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
}

export default Post;
