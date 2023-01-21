export const requestLogin = (email,password) => {
    
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    });

 }



export const requestGetUser = (token) => {
     return fetch('http://localhost:8080/users',{
       headers: {"Authorization": "Bearer " + token}
    })
}


export const requestCreateUser = (email, password, role) => {
    return fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
            "role": role
        })
    })
}

export const requestEditUser = (email,  role, id, token) => {
    return fetch(`http://localhost:8080/users/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "PATCH",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            "email": email,
            "role": role,
            "id": id
        })
    })
}

export const requestDeleteUser = (id, token) => {
    
    return fetch(`http://localhost:8080/users/${id}`, {
        method: 'DELETE',
        headers: {
            "Access-Control-Request-Method": "DELETE",
            "Authorization": "Bearer " + token
        },
        body:id
    })
}
