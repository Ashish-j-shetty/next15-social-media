import Link from "next/link";
import {
  ClerkLoading,
  ClerkLoaded,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import MobileMenu from "./MobileMenu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href={"/"} className="font-bold text-xl text-blue-600">
          FUNSOCIAL
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        {/* Links */}
        <div className="flex gap-6 text-gray-600">
          <Link href={"/"} className="flex gap-2 items-center">
            <Image src={"/home.png"} alt="Homepage" width={16} height={16} />
            <span>Homepage</span>
          </Link>
          <Link href={"/"} className="flex gap-2 items-center">
            <Image src={"/friends.png"} alt="Friends" width={16} height={16} />
            <span>Friends</span>
          </Link>
          <Link href={"/"} className="flex gap-2 items-center">
            <Image src={"/stories.png"} alt="Stories" width={16} height={16} />
            <span>Stories</span>
          </Link>

          <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
            <input
              type="text"
              placeholder="search..."
              className="bg-transparent outline-none"
            />
            <Image src={"/search.png"} height={14} width={14} alt="" />
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8  justify-end">
        <ClerkLoading>
          <div
            className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-primary opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src={"/people.png"} alt="" width={24} height={24} />
            </div>
            <div className="cursor-pointer">
              <Image src={"/messages.png"} alt="" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image src={"/notifications.png"} alt="" width={20} height={20} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2">
              <Image src={"/login.png"} alt="" width={20} height={20} />
              <Link href={"/sign-in"}>Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
