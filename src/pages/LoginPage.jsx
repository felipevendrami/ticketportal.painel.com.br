import {Link} from "react-router-dom";
import styles from "./LoginPage.module.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Container from "../components/layout/Container";

function LoginPage() {
  return (
    <Container customClass="center">
      <Form className={styles.form}>
        <h1>Login</h1>
        <Form.Group className={styles.form_group} controlId="formBasicEmail">
          <Form.Label>Seu Email:</Form.Label>
          <Form.Control type="email" placeholder="Digite o email" />
        </Form.Group>
        <Form.Group className={styles.form_group} controlId="formBasicPassword">
          <Form.Label>Sua Senha:</Form.Label>
          <Form.Control type="password" placeholder="Digite a Senha" />
        </Form.Group>
        <Button className={styles.button} variant="primary" type="submit">
          Entrar
        </Button >
        <Form.Text className="text-muted">Ainda não é cadastrado ?</Form.Text>
        <Form.Text className="text-muted">
            Faça seu{' '}
            <Link className={styles.a} to="/cadastro">Cadastro</Link>
        </Form.Text>
      </Form>
    </Container>
  );
}

export default LoginPage;
