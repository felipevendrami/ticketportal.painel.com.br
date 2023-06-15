import {Link} from "react-router-dom";
import styles from "./CadastroClientePage.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "../components/layout/Container";

function CadastroClientePage() {
  return (
    <Container customClass="center">
      <Form className={styles.form}>
        <h1>Cadastre-se</h1>
        <Form.Group className={styles.form_group} controlId="formBasicName">
          <Form.Label>Nome Completo:</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className={styles.form_group} controlId="formBasicCPF">
          <Form.Label>CPF:</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className={styles.form_group} controlId="formBasicPhone">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className={styles.form_group} controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>
        <Form.Group className={styles.form_group} controlId="formBasicPassword">
          <Form.Label>Senha:</Form.Label>
          <Form.Control type="password"/>
        </Form.Group>
        <Form.Group className={styles.form_group} controlId="formBasicPasswordConfirm">
          <Form.Label>Confirmar Senha:</Form.Label>
          <Form.Control type="password"/>
        </Form.Group>
        <Button className={styles.button} variant="primary" type="submit">
          Confirmar
        </Button >
        <Form.Text className="text-muted">Já possui cadastro ?</Form.Text>
        <Form.Text className="text-muted">
            Faça seu{' '}
            <Link className={styles.a} to="/login">Login</Link>
        </Form.Text>
      </Form>
    </Container>
  );
}

export default CadastroClientePage;
