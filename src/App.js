import { Route } from "react-router";
import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>
        <Route path="/products">
          <Products></Products>
        </Route>
      </main>
    </>
  );
}

export default App;
