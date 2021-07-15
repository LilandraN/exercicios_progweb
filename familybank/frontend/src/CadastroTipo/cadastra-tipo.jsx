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

let idTipo;
let nome;

const handleridTipo = (e) => {
  idTipo = e.target.value;
}
const handlerNome = (e) => {
  nome = e.target.value;
}

const send = () => {
  let type = { 'idTipo': idTipo, 'nome': nome};
  api.put('type', { type }).then(response => {
    alert(response);
  });
}
export default function CadastraTipos() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="outlined-required"
          label="ID Tipo"
          variant="outlined"
          onChange={handleridTipo}
        />
        <TextField
          required
          id="outlined-required"
          label="Nome"
          variant="outlined"
          onChange={handlerNome}
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
