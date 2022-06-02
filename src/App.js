import { lazy, Suspense } from "react";
import Spinner from "react-spinkit";
import "./App.css";

const Editor = lazy(() => import("./containers/Editor"));
const Header = lazy(() => import("./components/Header/Header"));

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <Spinner name="ball-clip-rotate-multiple" color="steelblue" />
        }
      >
        <Editor>
          <Header />
        </Editor>
      </Suspense>
    </div>
  );
}

export default App;
