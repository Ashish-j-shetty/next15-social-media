import Link from "next/link";
import ProfileCard from "./ProfileCard";
import Image from "next/image";
import Ad from "./Ad";

function LeftMenu({ type }: { type: "home" | "profile" }) {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm  text-gray-500 flex flex-col gap-2">
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src={"/posts.png"} height={20} width={20} alt="" />
          <span>My Posts</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src={"/activity.png"} height={20} width={20} alt="" />
          <span>Activity</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src={"/market.png"} height={20} width={20} alt="" />
          <span>Marketplace</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src={"/events.png"} height={20} width={20} alt="" />
          <span>Events</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src={"/albums.png"} height={20} width={20} alt="" />
          <span>Albums</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src={"/videos.png"} height={20} width={20} alt="" />
          <span>Videos</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src={"/news.png"} height={20} width={20} alt="" />
          <span>News</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src={"/Courses.png"} height={20} width={20} alt="" />
          <span>Courses</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src={"/lists.png"} height={20} width={20} alt="" />
          <span>Lists</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href={"/"}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src={"/settings.png"} height={20} width={20} alt="" />
          <span>Settings</span>
        </Link>
      </div>

      <Ad size="sm" />
    </div>
  );
}

export default LeftMenu;
