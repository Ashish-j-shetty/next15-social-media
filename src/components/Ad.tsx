import Image from "next/image";

function Ad({ size }: { size: "sm" | "md" | "lg" }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* Top  */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponcered Ads</span>
        <Image src={"/more.png"} alt="" height={16} width={16} />
      </div>

      {/* Bottom  */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          {/* to use fill the parent should be relative */}
          <Image
            src={
              "https://images.pexels.com/photos/9450682/pexels-photo-9450682.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            }
            alt=""
            fill
            className="reounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/9450682/pexels-photo-9450682.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            }
            alt=""
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium">Big temp lounge</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "It is a long established fact that a reader will be distracted by the readable"
            : size === "md"
            ? "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
            : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Ad;
