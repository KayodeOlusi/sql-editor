import { Suspense, lazy, useState } from "react";
import { Toaster } from "react-hot-toast";
import Spinner from "react-spinkit";
import "./App.css";

const Container = lazy(() => import("./container/Container"));
const Header = lazy(() => import("./components/Header/Header"));
const Sidebar = lazy(() => import("./components/Editor/Sidebar/Sidebar"));
const CodeEditor = lazy(() =>
  import("./components/Editor/CodeEditor/CodeEditor")
);

function App() {
  const [query, setQuery] = useState("Select * from territories");
  const [output, setOutput] = useState([]);
  const savedQuery = [
    "Select * from territories",
    "Select supplierId, contactName from suppliers",
  ];
  const [queryHistory, setQueryHistory] = useState([]);

  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="spinner">
            <Spinner name="ball-clip-rotate-multiple" color="steelblue" />
          </div>
        }
      >
        <Container>
          <Header />
          <div className="app__editor">
            <Sidebar
              savedQuery={savedQuery}
              query={query}
              queryHistory={queryHistory}
              setQuery={setQuery}
            />
            <CodeEditor
              query={query}
              setQuery={setQuery}
              savedQuery={savedQuery}
              output={output}
              setOutput={setOutput}
              setQueryHistory={setQueryHistory}
              queryHistory={queryHistory}
            />
          </div>
          <Toaster />
        </Container>
      </Suspense>
    </div>
  );
}

export default App;
