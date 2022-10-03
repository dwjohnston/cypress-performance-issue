import React, { useEffect, useState } from 'react';

export type UsersPageProps = {
};


type User = {
    id: string;
    name: string;
    username: string;
    email: string;
    address: any;

    phone: string;
    website: string;
    company: any;
}

export const UsersPage = (props: UsersPageProps) => {
    const { } = props;

    const [users, setUsers] = useState([] as Array<User>);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(v => v.json()).then((data) => {
            setUsers(data);
        });
    }, []);

    return (
        <div >
            {users.map((v) => {
                return <div key ={v.id} className ="user-panel">
                    <span>{v.id}</span>
                    <span>{v.name}</span>
                    <span data-testid="username">{v.username}</span>
                    <span>{v.email}</span>
                </div>
            })}
        </div>
    );
};
