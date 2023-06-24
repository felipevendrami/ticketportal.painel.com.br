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
          <Form.Control type="email" required/>
        </Form.Group>
        <Form.Group className={styles.form_group} controlId="formBasicPassword">
          <Form.Label>Sua Senha:</Form.Label>
          <Form.Control type="password" required/>
        </Form.Group>
        <Button className={styles.button} variant="primary" type="submit">
          Entrar
        </Button >
      </Form>
    </Container>
  );
}

export default LoginPage;
