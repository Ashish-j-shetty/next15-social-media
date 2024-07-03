import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

function UserMediaCard({ user }: { user: User }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP  */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href={"/"} className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      {/* BOTTOM  */}
      <div className="flex gap-4 justify-betwen flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/24243724/pexels-photo-24243724/free-photo-of-a-photo-of-a-cloud-with-a-moon-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/24243724/pexels-photo-24243724/free-photo-of-a-photo-of-a-cloud-with-a-moon-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/24243724/pexels-photo-24243724/free-photo-of-a-photo-of-a-cloud-with-a-moon-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>{" "}
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/24243724/pexels-photo-24243724/free-photo-of-a-photo-of-a-cloud-with-a-moon-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>{" "}
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/24243724/pexels-photo-24243724/free-photo-of-a-photo-of-a-cloud-with-a-moon-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>{" "}
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/24243724/pexels-photo-24243724/free-photo-of-a-photo-of-a-cloud-with-a-moon-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>{" "}
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/24243724/pexels-photo-24243724/free-photo-of-a-photo-of-a-cloud-with-a-moon-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default UserMediaCard;
