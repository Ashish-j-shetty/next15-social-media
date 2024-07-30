"use client";

import { useFormStatus } from "react-dom";

function AddPostButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="mt-2 rounded-md bg-blue-500 p-2 text-white disabled:cursor-not-allowed disabled:bg-blue-300"
      disabled={pending}
    >
      {pending ? "Sending" : "Send"}
    </button>
  );
}

export default AddPostButton;
