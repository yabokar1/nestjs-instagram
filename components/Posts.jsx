import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "codewithsahand",
      userImg:
        "https://static.skillshare.com/uploads/users/350301760/user-image-large.jpg?753816048",
      img: "https://images.unsplash.com/photo-1682686580452-37f1892ee5e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
      caption: "Nice picture",
    },
    {
      id: "2",
      username: "ghavidelsahana",
      userImg:
        "https://static.skillshare.com/uploads/users/350301760/user-image-large.jpg?753816048",
      img: "https://images.unsplash.com/photo-1710438399422-2fca27686bcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
      caption: "New picture from my city",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
