import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login/login'
import SiderDemo from './Menu/menu'
import CadastraClientes from './CadastroCliente/cadastra-cliente';
import './App.css';

function App() {
  const [token, setToken] = useState();
  const [email, setEmail] = useState();

  if (!token) {
    return <Login setToken={setToken} setEmail={setEmail} />
  }
  if(token === "event"){
    return <CadastraClientes />;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/familybank">
            <SiderDemo email={email} token={token} setToken={setToken}/>
          </Route>
          <Redirect to="familybank" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
