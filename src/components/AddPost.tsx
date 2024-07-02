import Image from "next/image";

function AddPost() {
  return (
    <div className="p-4 rounded-lg flex shadow-md  gap-4 justify-between text-sm bg-white">
      {/* avatar */}

      <Image
        src="https://images.pexels.com/photos/25745076/pexels-photo-25745076/free-photo-of-side-view-of-a-young-woman-in-a-white-shirt-and-black-trousers-standing-on-a-dirt-road-in-the-countryside.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        width="48"
        height="48"
        className="w-12 h-12 object-cover rounded-full"
        alt=""
      ></Image>

      {/* post */}
      <div className="flex-1">
        <form action={""} className="flex  gap-4">
          <textarea
            placeholder="What's on your mind?"
            className="bg-slate-100 rounded-lg flex-1 p-2"
            name="description"
          ></textarea>
          <Image
            src="/emoji.png"
            width="20"
            height="20"
            className="w-5 h-5 cursor-pointer self-end"
            alt=""
          ></Image>

          <button>Send</button>
        </form>
        {/* post options  */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addImage.png" width="20" height="20" alt="" />
            <span>Photo</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" width="20" height="20" alt="" />
            <span>Video</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" width="20" height="20" alt="" />
            <span>Poll</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addEvent.png" width="20" height="20" alt="" />
            <span>Event</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
