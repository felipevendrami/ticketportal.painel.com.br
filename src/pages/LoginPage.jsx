import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Container from "../components/layout/Container";

function LoginPage() {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const credentials = {
      username,
      password
    };


    console.log("username:", username);
    console.log("Password:", password);

    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data);

        // Redirecionar para a página principal 
      })
      .catch((error) => {
        console.error("Erro ao efetuar login:", error);
      });
  };

  return (
      <Form className={styles.form} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Form.Group className={styles.form_group} controlId="formBasicEmail">
          <Form.Label>Seu Email:</Form.Label>
          <Form.Control
            type="username"
            required
            value={username}
            onChange={(e) => setEmail(e.target.value)}
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
        <Button className={styles.button} variant="primary" type="submit">
          Entrar
        </Button>
      </Form>
  );
}

export default LoginPage;
