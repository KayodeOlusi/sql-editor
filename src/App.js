import { lazy, Suspense } from "react";
import Spinner from "react-spinkit";
import "./App.css";

const Container = lazy(() => import("./containers/Container"));
const Header = lazy(() => import("./components/Header/Header"));

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <Spinner name="ball-clip-rotate-multiple" color="steelblue" />
        }
      >
        <Container>
          <Header />
        </Container>
      </Suspense>
    </div>
  );
}

export default App;
