const token = localStorage.getItem('Token')

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
    })
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

//creo que hay que pasar el id del usuario
export const requestEditUser = (email,  role, id, token) => {
    //console.log(token)
    return fetch(`http://localhost:8080/users/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            "email": email,
            // "password": password,
            "role": role,
            "id": id
        })
    })
}

export const requestDeleteUser = (id) => {
    const token = localStorage.getItem('Token')
    //console.log(token)
    return fetch(`http://localhost:8080/users/${id}`, {
        method: 'DELETE',
        headers: {
           // "Content-Type": "application/json",
            "Access-Control-Request-Method": "DELETE",
            "Authorization": "Bearer " + token
        },
        body:id
    })
}
