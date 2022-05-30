import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'

const MainLogin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const Login = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: pass,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: "Login" });
        navigate('/')
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <Section className="container-fluid">
        <Container>
          <h3>Login</h3>
          <input
            type="email"
            placeholder="Write email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Write password here"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <br />
          <br />
          <button onClick={Login}>Login</button>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 91.6vh;
`;

const Container = styled.div`
  width: 400px;
  background-color: orangered;
  border-radius: 5px;
  text-align: center;
  h3 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  input {
    width: 80%;

    margin-top: 10px;
    margin-bottom: 10px;
    border: none;
    outline: none;
    padding: 5px;
    border-radius: 5px;
  }

  button {
    color: white;
    background-color: black;
    padding: 5px 25px 5px 25px;
    border-radius: 5px;
    margin-bottom: 10px;

    border: none;
    outline: none;
  }
  @media screen and (max-width: 768px) {
    button {
    }
  }
`;

export default MainLogin;
