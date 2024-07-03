import Post from "./Post";

function Feed() {
  return (
    <div className="p-4 rounded-lg flex shadow-md gap-12 flex-col text-sm bg-white">
      <Post />
      <Post />
      <Post /> <Post /> <Post /> <Post /> <Post /> <Post />
    </div>
  );
}

export default Feed;
