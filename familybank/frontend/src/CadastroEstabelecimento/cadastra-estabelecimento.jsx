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

let idLugares;
let cnpj;
let nome;
let endereco;
let cdTipo;

const handlerIdLugares = (e) => {
  idLugares = e.target.value;
}
const handlerCnpj = (e) => {
  cnpj = e.target.value;
}
const handlerNome = (e) => {
  nome = e.target.value;
}
const handlerEndereco = (e) => {
  endereco = e.target.value;
}
const handlerCdTipo = (e) => {
  cdTipo = e.target.value;
}

const send = () => {
  let place = { 'idLugares': idLugares, 'cnpj': cnpj, 'nome': nome, 'endereco': endereco, 'cdTipo': cdTipo};
  api.put('place', { place }).then(response => {
    alert(response);
  });
}
export default function CadastraEstabelecimento() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>

        <TextField
          required
          id="outlined-required"
          label="CNPJ"
          variant="outlined"
          onChange={handlerCnpj}
        />
        <TextField
          required
          id="outlined-required"
          label="Nome"
          variant="outlined"
          onChange={handlerNome}
        />
        <TextField
          id="outlined-password-input"
          label="Endereco"
          variant="outlined"
          onChange={handlerEndereco}
        />
        <TextField
          id="outlined-read-only-input"
          label="CD Tipo"
          variant="outlined"
          onChange={handlerCdTipo}
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
