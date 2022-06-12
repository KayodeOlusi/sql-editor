import Output from "./Output/Output";
import Screen from "./Screen/Screen";
import "./CodeEditor.css";
import shipper from "../../../data/shipper.json";
import territory from "../../../data/territory.json";
import toast from "react-hot-toast";

const CodeEditor = ({
  query,
  setQuery,
  output,
  setOutput,
  queryHistory,
  setQueryHistory,
}) => {
  const addQuery = () => {
    if (queryHistory.includes(query))
      return toast.error("Query already exists");

    toast.success("Query Saved");
    setQueryHistory([...queryHistory, query]);
  };

  const clearQuery = () => {
    toast.success("Query cleared");
    setQuery("");
  };

  const runQuery = () => {
    if (!query) return toast.error("Query is empty");

    switch (query) {
      case "Select supplierId, contactName from suppliers":
        setOutput(shipper);
        break;
      case "Select * from territories":
        setOutput(territory);
        break;
      default:
        setOutput(territory);
        break;
    }

    toast.success("Query executed");
  };

  return (
    <div className="code__editor">
      <Screen query={query} setQuery={setQuery} />
      <div className="buttons">
        <button className="run__button" onClick={runQuery}>
          Run
        </button>
        <button onClick={addQuery} className="save__button">
          Save
        </button>
        <button onClick={clearQuery} className="delete__button">
          Clear
        </button>
      </div>
      <Output output={output} query={query} />
    </div>
  );
};

export default CodeEditor;
