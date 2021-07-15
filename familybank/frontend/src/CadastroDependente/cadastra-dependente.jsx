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

let idDependente;
let cdCliente;
let cpf;


const handlerIdDependente = (e) => {
  idDependente = e.target.value;
}
const handlerCdCliente = (e) => {
  cdCliente = e.target.value;
}
const handlerCpf = (e) => {
  cpf = e.target.value;
}

const send = () => {
  let dependent = {'cdCliente': cdCliente, 'cpf': cpf};
  api.put('dependent', { dependent }).then(response => {
    alert(response.data[0].message);
  });
}
export default function CadastraDependente() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="outlined-required"
          label="CD Cliente"
          variant="outlined"
          onChange={handlerCdCliente}
        />
        <TextField
          required
          id="outlined-required"
          label="CPF"
          variant="outlined"
          onChange={handlerCpf}
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
