import React, { useState } from 'react';
import KeycloakService from '../../services/keycloakService';
import { useGetFoosQuery } from './homeApiSlice';

export function Home() {
    const [username] = useState(KeycloakService.getUsername())
    const {data} = useGetFoosQuery(undefined)

    return (
        <>
            <div>{username}</div>
            <div>
                {data?.map(foo => 
                    <div key={foo.id}>{foo.name}</div>
                )}
            </div>
        </>
    )
}