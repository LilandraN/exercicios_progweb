import React from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
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


export default function Login({ setToken }) {
  const history = useHistory();

  const login = () => {
    let client = { 'email': email, 'senha': senha };
    api.post('client', { client }).then(response => {
      if (response.data[0] != undefined) {
        setToken(response.data[0].email);
      } else {
        alert("Email ou senha invalido!")
        setToken(null);
      }
    });
  }

  return (
    <div className='login'>
      <h2>Login</h2>
      <TextField
        required
        id="outlined-required"
        label="Usuário"
        onChange={handlerEmail}
      />
      <TextField
        required
        id="outlined-disabled"
        label="Senha"
        type="password"
        onChange={handlerPassword}
      />
      <Button
        type='submit'
        variant="outlined"
        style={{ marginTop: '4em' }}
        onClick={() => login()}>Entrar</Button>
    </div>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
};