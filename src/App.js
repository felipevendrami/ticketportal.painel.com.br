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
import LoginPage from "./pages/LoginPage";
import EventoDetails from "./pages/EventoDetails";
import EventoEditar from "./pages/EventoEditar";
import CadastroPage from "./pages/CadastroPage";
import TipoIngressoEditar from "./pages/TipoIngressoEditar";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logon" component={CadastroPage} />
          <Route exact path="/" component={Painel} />
          <Route exact path="/vendas" component={VendasList} />
          <Route exact path="/eventos" component={EventosList} />
          <Route exact path="/eventos/novo_evento" component={NovoEvento} />
          <Route
            exact
            path="/eventos/tipo_ingresso/:eventoid"
            component={TipoIngressoList}
          />
          <Route
            exact
            path="/eventos/tipo_ingresso/novo_tipo_ingresso"
            component={NovoTipoIngresso}
          />
          <Route
            exact
            path="/eventos/tipo_ingresso/alterar_tipo_ingresso"
            component={TipoIngressoEditar}
          />
          <Route exact path="/vendas/pedido/:id" component={Pedido} />
          <Route exact path="/eventos/:id" component={EventoDetails} />
          <Route exact path="/eventos/:id/editar" component={EventoEditar} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
