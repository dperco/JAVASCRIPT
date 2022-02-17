import { Link, NavLink, Route, Switch } from "react-router-dom";

const array = [
  { id: 1, name: "Uno" },
  { id: 2, name: "Dos" },
  { id: 3, name: "Tres" },
  { id: 4, name: "Cuatro" },
];

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function A() {
  return (
    <div>
      <h1>Componente A</h1>
    </div>
  );
}
function B() {
  return (
    <div>
      <h1>Componente B</h1>
      <ul>
        {array.map((ele) => (
          <li key={ele.id}>
            <Link to={`/b/${ele.id}`}>Ir al id: {ele.id}</Link>
          </li>
        ))}
      </ul>
      <section>
        <Route
          path="/b/:id"
          render={({ match }) => <BDetail id={match.params.id} />}
        />
      </section>
    </div>
  );
}
function BDetail(props) {
  console.log(props);
  return (
    <div>
      <h1>ID: {props.id}</h1>
      <h2>Name: {array.find((ele) => ele.id === Number(props.id)).name}</h2>
      {/* <h1>ID: {props.match.params.id}</h1>
      <h2>
        Name:{" "}
        {array.find((ele) => ele.id === Number(props.match.params.id)).name}
      </h2> */}
    </div>
  );
}

function App() {
  return (
    <div>
      <header>
        <Route path="/">
          <nav style={{ display: "flex", gap: "1rem" }}>
            <NavLink to="/" exact style={{}}>
              Home
            </NavLink>
            <NavLink to="/a">Ir a la pagina `/a`</NavLink>
            <NavLink to="/b">Ir a la pagina `/b`</NavLink>
            {/* <a href="/a"> Navegar a `/a`</a> */}
          </nav>
        </Route>
      </header>
      <main>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/a" exact>
            <A />
          </Route>
          <Route path="/b">
            <B />
          </Route>
          {/* <Route path="/b/:id" component={BDetail} /> */}
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;