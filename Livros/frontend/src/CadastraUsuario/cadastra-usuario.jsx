
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import api from '../services/api';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      marginTop: '3em'
    },
  },
}));

let email;
let senha;
let telefone;

const handlerEmail = (e) => {
  email = e.target.value;
}
const handlerSenha = (e) => {
  senha = e.target.value;
}
const handlerTelefone = (e) => {
  telefone = e.target.value;
}

const send = () => {
  let client = { 'email': email, 'senha': senha, 'telefone': telefone};

  api.put('client', { client }).then(response => {
    alert(response.data[0].message);
  });
}
export default function CadastraUsuario() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="outlined-required"
          label="Email"
          variant="outlined"
          onChange={handlerEmail}
        />
        <TextField
          required
          id="outlined-disabled"
          label="Senha"
          type="password"
          variant="outlined"
          onChange={handlerSenha}
        />
        <TextField
          required
          id="outlined-password-input"
          label="Telefone"
          variant="outlined"
          onChange={handlerTelefone}
        />
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          style={{marginTop:'4em'}}
          onClick={() => send()}>Salvar</Button>
      </div>
    </form>
  );
}