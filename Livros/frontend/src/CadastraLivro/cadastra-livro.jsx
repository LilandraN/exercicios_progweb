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
let id;
let nome;
let editora;
let isbn;

const handlerId = (e) => {
  id = e.target.value;
}
const handlerNome = (e) => {
  nome = e.target.value;
}
const handlerEditora = (e) => {
  editora = e.target.value;
}
const handlerISBN = (e) => {
  isbn = e.target.value;
}
const send = () => {
  let book = { 'id': id, 'nome': nome, 'editora': editora, 'isbn': isbn };
  console.log(book.id);
  api.put('book', { book }).then(response => {
    alert(response);
  });
}
export default function CadastraLivro() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="outlined-required"
          label="Id"
          variant="outlined"
          onChange={handlerId}
        />
        <TextField
          required
          id="outlined-disabled"
          label="Nome"
          variant="outlined"
          onChange={handlerNome}
        />
        <TextField
          required
          id="outlined-password-input"
          label="Editora"
          variant="outlined"
          onChange={handlerEditora}
        />
        <TextField
          id="outlined-read-only-input"
          label="ISBN"
          variant="outlined"
          onChange={handlerISBN}
        />
        <Button
          type='submit'
          variant="contained"
          startIcon={<SaveIcon />}
          style={{marginTop:'4em'}}
          onClick={() => send()}>Salvar</Button>
      </div>
    </form>
  );
}
