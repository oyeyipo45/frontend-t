import { useState } from "react";
import { useCreatePostMutation } from "../redux/api";

const PostInput = () => {
  const [inputVal, SetInputVal] = useState("");
  const handleChange = (e: any) => {
    SetInputVal(e.target.value);
  };

  const [createPost] = useCreatePostMutation();

  const createPostHandler = async () => {
    if (!inputVal) {
      alert("Please enter a post");
    } else {
      await createPost({ title: inputVal, isCompleted: false }).unwrap();
      SetInputVal("");
    }
  };

  return (
    <div className="postInput">
      <input value={inputVal} type="text" placeholder="Add Posts" onChange={handleChange} />
      <button id="push" type="submit" onClick={createPostHandler}>
        Add Post
      </button>
    </div>
  );
};

export default PostInput;
