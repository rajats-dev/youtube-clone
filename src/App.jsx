import "./App.css";
import Home from "./pages/Home";
import {
  Redirect,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Home />
      </Route>
    </>
  );
}

export default App;
