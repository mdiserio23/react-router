import { Route, Switch } from "react-router";
import { Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import ProductsDetail from "./pages/ProductsDetail";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome></Welcome>
          </Route>
          <Route path="/products" exact>
            <Products></Products>
          </Route>
          <Route path="/products/:productId">
            <ProductsDetail></ProductsDetail>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
