import { IPost, PostsListInterface } from "../interfaces";
import Post from "./Post";

const Posts = (props: PostsListInterface) => {
  const { data } = props;

  return (
    <div>
      {data &&
        data.map((item: IPost) => (
          <div key={item._id}>
            <Post post={item} />
          </div>
        ))}
    </div>
  );
};

export default Posts;
