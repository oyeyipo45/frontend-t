import "./App.css";
import Posts from "./component/List";
import { useState } from "react";
import { useGetPostsQuery } from "./redux/api";
import PostInput from "./component/Input";

function App() {
  const options: Array<{ value: string; label: string }> = [
    { value: "all", label: "all" },
    { value: "false", label: "false" },
    { value: "true", label: "true" },
  ];

  const [filter, setFilter] = useState<string>("all");

  const { data: posts, isLoading } = useGetPostsQuery(filter, { refetchOnMountOrArgChange: true });

  return (
    <>
      <div className="container">
        <div>
          <h1 className="text-center my-4">Task App</h1>
          {isLoading && <span>Loading....</span>}
          {posts && (
            <>
              <PostInput />
              <div className="filter">
                <p>Filter Posts</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <Posts data={posts.data} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
