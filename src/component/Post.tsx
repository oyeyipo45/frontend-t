import { PostItemInterface } from "../interfaces";
import { useUpdatePostMutation } from '../redux/api';

const Post = (props: PostItemInterface) => {
  const { post } = props;
  const { title, _id, isCompleted } = post

  const [updatePost] = useUpdatePostMutation();
  
  const toggleCompleted = async () => {
    const data = {
      title,
      _id,
      isCompleted : true,
    };

    await updatePost(data).unwrap();
  };
  
  return (
    <li className="post">
      <h5>{title}</h5>
      <input type="checkbox" checked={isCompleted ? true : false} onChange={toggleCompleted} />
    </li>
  );
};

export default Post;

