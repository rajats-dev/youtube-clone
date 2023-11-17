import "./App.css";
import Home from "./pages/Home";
import {
  Redirect,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
    </>
  );
}

export default App;
