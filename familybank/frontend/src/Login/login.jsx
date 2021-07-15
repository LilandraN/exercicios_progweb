import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import { grey } from '@material-ui/core/colors';
import api from '../services/api';
import './login.css';

let email;
let senha;

const handlerEmail = (e) => {
  email = e.target.value;
}
const handlerPassword = (e) => {
  senha = e.target.value;
}

const jwt = require('jsonwebtoken');

export default function Login({ setToken, setEmail }) {
  const theme = createMuiTheme({
    palette: {
      primary: grey,
    },
  });
  const preventDefault = (event) => {
    event.preventDefault();
    setToken("event");
  }
  const login = () => {
    let client = { 'email': email, 'senha': senha };
    api.post('client', { client }).then(response => {
      if (response.data[0] != undefined) {
        const id = response.data[0].email;
        const token = jwt.sign({ id }, "gfchvjb6578vh678u8ihyt6", {
          expiresIn: 300 // expires in 5min
        });
        setEmail(response.data[0].email);
        setToken(token);
      } else {
        alert("Email ou senha invalido!")
        setToken(null);
      }
    });
  }

  return (
    <div className='login'>
      <h2>Acesse sua conta</h2>
      <ThemeProvider theme={theme}>
        <TextField
          required
          id="outlined-required"
          label="Usuário"
          onChange={handlerEmail}
          className="text-field"
        />
        <TextField
          required
          id="outlined-disabled"
          label="Senha"
          type="password"
          onChange={handlerPassword}
          className="text-field"
        />
      </ThemeProvider>
      <Button
        type='submit'
        variant="outlined"
        style={{ marginTop: '4em' }}
        onClick={() => login()}>Entrar</Button>
      <Link style={{marginTop: "2em"}} onClick={preventDefault}>
        Não possui conta? Cadastre-se!
      </Link>
    </div>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
};