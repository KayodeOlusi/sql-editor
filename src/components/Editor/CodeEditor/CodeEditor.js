import { useState } from "react";
import Output from "./Output/Output";
import Screen from "./Screen/Screen";

const CodeEditor = ({ query, setQuery, savedQuery, output }) => {
  return (
    <div className="code__editor">
      <Screen query={query} setQuery={setQuery} />
      <Output output={output} />
    </div>
  );
};

export default CodeEditor;
