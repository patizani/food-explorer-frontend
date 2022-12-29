import { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

import logo from "../../assets/logoHeader.svg";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos");
    }

    if (password.length < 6) {
      return alert("A senha deve conter no mínimo 6 caracteres!")
    }

    setLoading(true)

    api.post("/users", {name, email, password})
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
        setLoading(false)
      })
      .catch(error => {
        if(error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar")
        }

        setLoading(false)
      })
  }

  return (
    <Container>
      <div>
        <img 
          src={logo}
          alt="Polígono azul do logo Food Explorer"
        />
        <h1>food explorer</h1>
      </div>
      <Form>
        <legend>Crie sua conta</legend>
        <Input
          type="name" 
          label="name" 
          title="Seu nome" 
          placeholder="Exemplo: Maria da Silva"
          onChange={e => setName(e.target.value)}
          required
        />
        <Input
          type="email" 
          label="email" 
          title="Email" 
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={e => setEmail(e.target.value)}
          required
        />
         <Input 
          type="password" 
          label="password" 
          title="Senha" 
          placeholder="No mínimo 6 caracteres"
          onChange={e => setPassword(e.target.value)}
          minLength="6"
          required 
        />

        <Button
          title={loading ? "Cadastrando" : "Criar conta"}
          onClick={handleSignUp}
          disabled={loading}
        />

        <Link to="/">
          Já tenho uma conta
        </Link>

      </Form>
    </Container>
  );
}