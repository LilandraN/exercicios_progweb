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

let cartao;
let codSeguranca;
let validade;
let limiteCredito;
let cdCliente

const handlerCartao = (e) => {
  cartao = e.target.value;
}
const handlerCodSeguranca = (e) => {
  codSeguranca = e.target.value;
}
const handlerValidade = (e) => {
  validade = e.target.value;
}
const handlerLimiteCredito = (e) => {
  limiteCredito = e.target.value;
}
const handlerCdCliente = (e) => {
  cdCliente = e.target.value;
}

const send = () => {
  let account = { 'cartao': cartao, 'codSeguranca': codSeguranca, 'validade': validade, 'limiteCredito': limiteCredito, 'cdCliente': cdCliente};
  api.put('account', { account }).then(response => {
    alert(response);
  });
}
export default function CadastraContas() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="outlined-required"
          label="Cartão"
          variant="outlined"
          onChange={handlerCartao}
        />
        <TextField
          id="outlined-password-input"
          label="Cod. Segurança"
          variant="outlined"
          onChange={handlerCodSeguranca}
        />
        <TextField
          id="outlined-read-only-input"
          label="Validade"
          variant="outlined"
          onChange={handlerValidade}
        />
        <TextField
          required
          id="outlined-required"
          label="Limite Credito"
          variant="outlined"
          onChange={handlerLimiteCredito}
        />
        <TextField
          required
          id="outlined-required"
          label="CD Cliente"
          variant="outlined"
          onChange={handlerCdCliente}
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
