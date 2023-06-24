import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Painel from "./pages/Painel";
import VendasList from "./pages/VendasList";
import EventosList from "./pages/EventosList";
import TipoIngressoList from "./pages/TipoIngressoList";
import NovoEvento from "./pages/NovoEvento";
import NovoTipoIngresso from "./pages/NovoTipoIngresso";
import Pedido from "./pages/Pedido";

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
            <VendasList />
          </Route>
          <Route exact path="/eventos">
            <EventosList />
          </Route>
          <Route exact path="/eventos/novo_evento">
            <NovoEvento />
          </Route>
          <Route exact path="/eventos/tipo_ingresso">
            <TipoIngressoList />
          </Route>
          <Route exact path="/eventos/tipo_ingresso/novo_tipo_ingresso">
            <NovoTipoIngresso />
          </Route>
          <Route exact path="/vendas/pedido">
            <Pedido />
          </Route>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
