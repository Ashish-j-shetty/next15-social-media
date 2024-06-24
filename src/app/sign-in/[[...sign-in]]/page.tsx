import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-[calc(100vh-96px)] flex justify-center items-center">
      <SignIn />
    </div>
  );
}
