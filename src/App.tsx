import './App.css'
import Posts from './component/List'
import { useState } from "react";

function App() {

  const options: Array<{ value: string; label: string }> = [
    { value: "all", label: "all" },
    { value: "false", label: "false" },
    { value: "true", label: "true" },
  ];

  const [filter, setFilter] = useState<string>("all");


  return (
    <>
      <div className="container">
        <div>
          <h1 className="text-center my-4">Task App</h1>
          {isLoading && <span>Loading....</span>}
          {posts && (
            <>
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

export default App