import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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

let nome;
let email;
let senha;
let dataNasc;
let cpf;
let ganhosMensais;

const handlerNome = (e) => {
  nome = e.target.value;
}
const handlerEmail = (e) => {
  email = e.target.value;
}
const handlerSenha = (e) => {
  senha = e.target.value;
}
const handlerDataNasc = (e) => {
  dataNasc = e.target.value;
}
const handlerCpf = (e) => {
  cpf = e.target.value;
}
const handlerGanhosMensais = (e) => {
  ganhosMensais = e.target.value;
}


export default function CadastraClientes() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checked: true,
  });
  const handleChange = (e) => { 
    setState({ ...state, checked: e.target.checked });
  };
  
  const send = () => {
    let client = { 'nome': nome, 'email': email, 'senha': senha, 'dataNasc': dataNasc, 'cpf': cpf, 'ehClientePrincipal': state.checked, 'ganhosMensais': ganhosMensais };
    try {
      api.put('client', { client }).then(response => {
        alert('Cliente Salvo!');
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="outlined-required"
          label="Nome"
          variant="outlined"
          onChange={handlerNome}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          variant="outlined"
          onChange={handlerEmail}
        />
        <TextField
          id="outlined-password-input"
          label="Senha"
          type="password"
          variant="outlined"
          onChange={handlerSenha}
        />
        <TextField
          id="data"
          variant="outlined"
          type="date"
          onChange={handlerDataNasc}
        />
        <TextField
          required
          id="outlined-required"
          label="CPF"
          variant="outlined"
          onChange={handlerCpf}
        />
        <TextField
          required
          id="outlined-required"
          label="Ganhos Mensais"
          variant="outlined"
          onChange={handlerGanhosMensais}
        />
        <FormControlLabel
          style={{marginTop:'45px', marginLeft: '4px'}}
          control={
            <Checkbox
              checked={state.checked}
              onChange={handleChange}
              name="checked"
              color="primary"
            />
          }
          label="Cliente Principal?"
        />
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          style={{ marginTop: '3em' }}
          onClick={() => send()}>Salvar</Button>
      </div>
    </form>
  );
}
