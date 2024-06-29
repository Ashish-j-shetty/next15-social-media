import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";

const UserProfile = () => {
  return (
    <div className="flex gap-6 p-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%] ">
        <div className="flex flex-col gap-6">
          <div className=" flex flex-col gap-6">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-64 relative">
                <Image
                  src={
                    "https://images.pexels.com/photos/25004848/pexels-photo-25004848/free-photo-of-sunset-sea-friends.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  }
                  className="rounded-md object-cover"
                  fill
                  alt=""
                />
                <Image
                  src={
                    "https://images.pexels.com/photos/21945949/pexels-photo-21945949/free-photo-of-a-woman-looking-out-the-window.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  }
                  className=" w-32 h-32 absolute rounded-full left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10 object-cover"
                  alt=""
                  height={128}
                  width={128}
                />
              </div>
              <h1 className="mt-20 mb-4 text-2xl font-medium">Ashish Shetty</h1>
              <div className="flex items-center justify-center mb-4 gap-12 ">
                <div className="flex flex-col  items-center">
                  <span className="font-medium">124</span>
                  <span className="text-sm">Posts</span>
                </div>
                <div className="flex flex-col items-center ">
                  <span className="font-medium">1.4k</span>
                  <span className="text-sm">Followers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">1.5k</span>
                  <span className="text-sm">Following</span>
                </div>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%] xl:w-[30%]">
        <RightMenu userId="test" />
      </div>
    </div>
  );
};

export default UserProfile;
