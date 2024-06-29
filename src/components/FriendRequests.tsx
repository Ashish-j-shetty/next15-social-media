import Image from "next/image";
import Link from "next/link";

function FriendRequests() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP  */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href={"/"} className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      {/* USER  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/21945949/pexels-photo-21945949/free-photo-of-a-woman-looking-out-the-window.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            }
            alt=""
            height={40}
            width={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold ">Wayne Burton</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src={"/accept.png"}
            alt=""
            height={20}
            width={20}
            className="cursor-pointer"
          />
          <Image
            src={"/reject.png"}
            alt=""
            height={20}
            width={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/21945949/pexels-photo-21945949/free-photo-of-a-woman-looking-out-the-window.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            }
            alt=""
            height={40}
            width={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold ">Wayne Burton</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src={"/accept.png"}
            alt=""
            height={20}
            width={20}
            className="cursor-pointer"
          />
          <Image
            src={"/reject.png"}
            alt=""
            height={20}
            width={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/21945949/pexels-photo-21945949/free-photo-of-a-woman-looking-out-the-window.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            }
            alt=""
            height={40}
            width={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold ">Wayne Burton</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src={"/accept.png"}
            alt=""
            height={20}
            width={20}
            className="cursor-pointer"
          />
          <Image
            src={"/reject.png"}
            alt=""
            height={20}
            width={20}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default FriendRequests;
