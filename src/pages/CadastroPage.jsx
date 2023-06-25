import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Container from "../components/layout/Container";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [cpf, setCpf] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar se os campos obrigatórios foram preenchidos
    if (!email || !password || !name) {
      alert("Preencha os campos obrigatórios!");
      return;
    }

    // Realizar o envio dos dados para o servidor ou realizar outras operações necessárias

    console.log("Email:", email);
    console.log("Confirm Email:", confirmEmail);
    console.log("Password:", password);
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Address:", address);
    console.log("CPF:", cpf);
  };

  return (
    <Container customClass="center">
      <Form className={styles.form} onSubmit={handleSubmit}>
        <h1>Criar Usuário</h1>
        <Form.Group className={styles.form_group} controlId="formBasicEmail">
          <Form.Label>Seu Email:</Form.Label>
          <Form.Control
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className={styles.form_group} controlId="formBasicConfirmEmail">
          <Form.Label>Confirmar Email:</Form.Label>
          <Form.Control
            type="email"
            required
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className={styles.form_group} controlId="formBasicPassword">
          <Form.Label>Sua Senha:</Form.Label>
          <Form.Control
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className={styles.form_group} controlId="formBasicName">
          <Form.Label>Seu Nome:</Form.Label>
          <Form.Control
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className={styles.form_group} controlId="formBasicPhone">
          <Form.Label>Seu Telefone:</Form.Label>
          <Form.Control
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group className={styles.form_group} controlId="formBasicAddress">
          <Form.Label>Seu Endereço:</Form.Label>
          <Form.Control
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group className={styles.form_group} controlId="formBasicCPF">
          <Form.Label>Seu CPF:</Form.Label>
          <Form.Control
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </Form.Group>
        <Button className={styles.button} variant="primary" type="submit">
          Criar Usuário
        </Button>
        <div className={styles.login_link}>
          <Link to="/login">Já possui uma conta? Faça login</Link>
        </div>
      </Form>
    </Container>
  );
}

export default SignupPage;
