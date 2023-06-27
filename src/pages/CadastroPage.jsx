import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Container from "../components/layout/Container";
import { registrarUsuarioAPI } from "../Api/Service";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

    if (!email || !password || !name) {
      alert("Preencha os campos obrigatórios!");
      return;
    }

    const Usuario = {
      nome: name,
      documento: cpf,
      username: email,
      telefone: phone,
      endereco: address,
      tipo: 1,
      password: password,
    };

    console.log(Usuario);
    registrarUsuarioAPI(Usuario)
      .then(() => {
        //redireciona a login?
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <h2>Criar Usuário</h2>
      <hr />

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            className={styles.form_group}
            controlId="formBasicName"
          >
            <Form.Label>Seu Nome:</Form.Label>
            <Form.Control
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            className={styles.form_group}
            controlId="formBasicCPF"
          >
            <Form.Label>Seu CPF:</Form.Label>
            <Form.Control
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            className={styles.form_group}
            controlId="formBasicPhone"
          >
            <Form.Label>Seu Telefone:</Form.Label>
            <Form.Control
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group controlId="formBasicAddress">
            <Form.Label>Seu Endereço:</Form.Label>
            <Form.Control
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formBasicEmail">
            <Form.Label>Seu Email:</Form.Label>
            <Form.Control
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            className={styles.form_group}
            controlId="formBasicConfirmEmail"
          >
            <Form.Label>Confirmar Email:</Form.Label>
            <Form.Control
              type="email"
              required
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Sua Senha:</Form.Label>
          <Form.Control
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Row className="mb-3">
          <div className={styles.div_button}>
            <Button className={styles.button} variant="primary" type="submit">
              Criar Usuário
            </Button>
            <Link to="/login">Já possui uma conta? Faça login</Link>
          </div>
        </Row>
      </Form>
    </>
  );
}

export default SignupPage;
