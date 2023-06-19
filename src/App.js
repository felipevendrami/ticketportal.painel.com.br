import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Painel from "./pages/Painel";
import Vendas from "./pages/Vendas";
import Eventos from "./pages/Eventos";
import TipoTickets from "./pages/TipoTickets";
import NovoEvento from "./pages/NovoEvento";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container>
          <Route exact path="/">
            <Painel />
          </Route>
          <Route exact path="/vendas">
            <Vendas />
          </Route>
          <Route exact path="/eventos">
            <Eventos />
          </Route>
          <Route exact path="/eventos/novo_evento">
            <NovoEvento />
          </Route>
          <Route exact path="/eventos/tipo_ticket">
            <TipoTickets />
          </Route>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
