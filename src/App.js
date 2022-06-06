import { lazy, Suspense } from "react";
import Spinner from "react-spinkit";
import "./App.css";
import SideMenu from "./components/Editor/SideMenu/SideMenu";

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
          <div>
            <SideMenu />
          </div>
        </Container>
      </Suspense>
    </div>
  );
}

export default App;
