import Image from "next/image";

function Comments() {
  return (
    <div>
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src={
            "https://images.pexels.com/photos/25912562/pexels-photo-25912562/free-photo-of-male-model-posing-on-the-brooklyn-bridge-during-a-foggy-weather.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          }
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 bg-slate-100 rounded-xl text-sm px-6 py-2 w-full flex  items-center justify-between">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none p-2 flex-1"
          />
          <Image
            src={"/emoji.png"}
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* COMMENTS  */}
      <div>
        {/* COMMENT  */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR  */}
          <Image
            src={
              "https://images.pexels.com/photos/25912562/pexels-photo-25912562/free-photo-of-male-model-posing-on-the-brooklyn-bridge-during-a-foggy-weather.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            }
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          {/* Description  */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Denice Richi</span>
            <p>
              This is a sample description and this is jsut for illustartion.
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500">
              <div className="flex items-center gap-4 mt-2">
                <Image
                  src={"/like.png"}
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer w-4 h-4"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
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
            className="cursor-pointer w-4 h-4"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Comments;
