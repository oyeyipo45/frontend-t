import "./App.css";

interface Filterprops {
  filter: string;
  setFilter: () => void;
}
function FilterTasks(props: Filterprops) {
  const { filter, setFilter } = props;
  const options: Array<{ value: string; label: string }> = [
    { value: "all", label: "all" },
    { value: "false", label: "false" },
    { value: "true", label: "true" },
  ];

  return (
    <>
      <select value={filter} onChange={(e) => setFilter()}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default FilterTasks;
