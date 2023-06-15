import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "./components/layout/Container";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import EventPage from "./pages/EventoPage";
import CadastroClientePage from "./pages/CadastroClientePage"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/evento">
            <EventPage />
          </Route>
          <Route exact path="/cadastro">
            <CadastroClientePage />
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
