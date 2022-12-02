import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './features/home/Home';
import { setToken } from './features/home/tokenSlice';
import KeycloakService from './services/keycloakService';
import { useAppDispatch } from './app/hooks';

function App() {
  const dispatch = useAppDispatch();
  const [isAuthentified, setIsAuthentified] = useState(false)

  useEffect(() => {
    KeycloakService._kc.onAuthSuccess = () => {
        dispatch(setToken(KeycloakService.getToken()))
        setIsAuthentified(true)
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => KeycloakService.doLogin()}>Login</button>
        <button onClick={() => KeycloakService.doLogout()}>Logout</button>
        { isAuthentified && <Home/>}
      </header>
    </div>
  );
}

export default App;
