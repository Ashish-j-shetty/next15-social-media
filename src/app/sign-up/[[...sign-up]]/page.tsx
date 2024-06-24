import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-[calc(100vh-96px)] flex justify-center items-center">
      <SignUp />
    </div>
  );
}
