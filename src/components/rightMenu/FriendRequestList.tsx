"use client";

import { acceptFollowRequest, declineFollowRequest } from "@/lib/action";
import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type RequestWithUser = FollowRequest & { sender: User };

function FriendRequestList({ requests }: { requests: RequestWithUser[] }) {
  const [requestState, setRequestState] = useState(requests);

  const [oprimisticRequests, removeOptmisticRequest] = useOptimistic(
    requestState,
    (state, value: string) => {
      return state.filter((request) => request.id !== value);
    }
  );

  const accept = async (requestId: string, userId: string) => {
    removeOptmisticRequest(requestId);

    try {
      await acceptFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {}
  };

  const decline = async (requestId: string, userId: string) => {
    removeOptmisticRequest(requestId);

    try {
      await declineFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {}
  };

  return (
    <div>
      {oprimisticRequests.map((request) => {
        return (
          <div className="flex items-center justify-between" key={request.id}>
            <div className="flex items-center gap-4">
              <Image
                src={request.sender.avatar! || "/noAvatar.png"}
                alt=""
                height={40}
                width={40}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-semibold ">
                {request.sender.name} {request.sender.surname}{" "}
              </span>
            </div>
            <div className="flex gap-3 justify-end">
              <form action={() => accept(request.id, request.senderId)}>
                <button>
                  <Image
                    src={"/accept.png"}
                    alt=""
                    height={20}
                    width={20}
                    className="cursor-pointer"
                  />
                </button>
              </form>

              <form action={() => decline(request.id, request.senderId)}>
                <button>
                  <Image
                    src={"/reject.png"}
                    alt=""
                    height={20}
                    width={20}
                    className="cursor-pointer"
                  />
                </button>
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FriendRequestList;
