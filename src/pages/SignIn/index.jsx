import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

import logo from "../../assets/logoHeader.svg";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, loading } = useAuth();
  const navigate = useNavigate();


  function handleSignIn() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      signIn({ email, password });
      navigate("/");
    } else {
      return alert("Informe um endereço de e-mail válido!");
    }
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
        <legend>Faça login</legend>
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
          title={loading ? "Entrando" : "Entrar"} 
          onClick={handleSignIn}
          disabled={loading}
        />

        <Link to="/register">
          Criar uma conta
        </Link>
      </Form>
    </Container>
  );
}