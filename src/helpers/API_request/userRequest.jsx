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

export const requestGetUser = () => {
    return fetch('http://localhost:8080/users')
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
