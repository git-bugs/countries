import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Main } from "./pages/Main/Main";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
