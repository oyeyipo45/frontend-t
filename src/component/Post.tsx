import { PostItemInterface } from "../interfaces";

const Post = (props: PostItemInterface) => {
  const { post } = props;
  const { title, _id, isCompleted } = post

  const toggleCompleted = async () => {
    
  };
  
  return (
    <li className="post">
      <h5>{title}</h5>
      <input type="checkbox" checked={isCompleted ? true : false} onChange={toggleCompleted} />
    </li>
  );
};

export default Post;

