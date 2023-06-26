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
      <Switch>
        <Container>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/logon">
            <CadastroPage />
          </Route>
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
          <Route exact path= "/eventos/tipo_ingress/alterar_tipo_ingresso">
            <TipoIngressoEditar />
          </Route>
          <Route exact path="/vendas/pedido">
            <Pedido />
          </Route>
          <Route exact path="/eventos/:id">
            <EventoDetails />
          </Route>
          <Route exact path="/eventos/:id/editar">
            <EventoEditar />
          </Route>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;

