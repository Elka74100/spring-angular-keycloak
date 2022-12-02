import React from 'react';
import KeycloakService from '../../services/keycloakService';

export function Home() {

    return (
        <>
            <button onClick={() => KeycloakService.doLogin()}>Login</button>
            <button onClick={() => KeycloakService.doLogout()}>Logout</button>
        </>
    )
}