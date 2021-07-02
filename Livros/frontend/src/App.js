import './App.css';
import React,{useState} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LivrosTable from './ListaLivro/lista-livro';
import ModalCadastroLivros from './CadastraLivro/modal-cadastro'
import ModalCadastroUsuario from './CadastraUsuario/modal-cadastro'
import Login from './Login/login'

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/livros">
            <LivrosTable />
            <ModalCadastroLivros />
            <ModalCadastroUsuario />
          </Route>
          <Redirect exact from="/" to="livros" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
