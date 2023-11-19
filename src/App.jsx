import "./App.css";
import Home from "./pages/Home";
import {
  Redirect,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/watch/:id">
        <Watch />
      </Route>
    </>
  );
}

export default App;
