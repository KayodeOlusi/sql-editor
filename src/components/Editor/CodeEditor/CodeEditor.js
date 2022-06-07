import Output from "./Output/Output";
import Screen from "./Screen/Screen";

const CodeEditor = ({
  query,
  setQuery,
  queryHistory,
  savedQuery,
  setQueryHistory,
  output,
}) => {
  const addQuery = () => {
    if (queryHistory.includes(query)) return;
    setQueryHistory([...queryHistory, query]);
  };

  const clearQuery = () => {};

  return (
    <div className="code__editor">
      <Screen query={query} setQuery={setQuery} />
      <div className="buttons">
        <button className="run__button">Run</button>
        <button onClick={addQuery} className="save__button">
          Save
        </button>
        <button onClick={clearQuery} className="delete__button">
          Clear
        </button>
      </div>
      <Output output={output} />
    </div>
  );
};

export default CodeEditor;
