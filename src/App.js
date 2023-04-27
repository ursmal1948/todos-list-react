import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Redirect,
  NavLink,
  Link,
} from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/zadania">
            Zadania
          </NavLink>
        </li>
        <li>
          <NavLink to="/autor">O autorze</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania/:id">
            <TaskPage/>
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania"></Redirect>
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
export default App;
