import { useEffect, useState } from "react";
import { Table } from "../Table/Table";
import { ItemTable } from "../ItemTable/ItemTable";

export const UserList = ({ isOpen }) => {
    const [dataUser, setDataUser] = useState([])
    const token = localStorage.getItem('Token')

    useEffect(() => {
        fetch('http://localhost:8080/users', {
            headers: { "Authorization": "Bearer " + token }
        })
            .then(res => res.json())
            .then((res) => {
                setDataUser(res.map(user => {
                    return {
                        email: user.email,
                        id: user.id,
                        password: user.password,
                        role: user.role,
                    }
                }));
            })
            .catch((error) => {
                console.error(error)
            })
    }, []);

    return (
        <Table>
            {
                dataUser.map(user => (
                    <ItemTable
                        key={user.id}
                        id={user.id}
                        email={user.email}
                        password={user.password}
                        role={user.role}
                        isOpen={isOpen}
                    />
                ))
            }
        </Table>
    )
}