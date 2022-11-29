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

export const requestGetUser = () => {
    // return fetch('http://localhost:8080/users')
    return fetch('http://localhost:8080/users',{
        //method: 'GET',
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
export const requestEditUser = (email,  role,id) => {
    console.log(token)
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
    console.log(token)
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




//lina
// const fetchHandle = (event)=>{
//     event.preventDefault()
//     postLogin(email, password).then(res => {res.json()
//       console.log(res.statusText , 'estado');
//       /* if(res.statusText == "Bad Request"){
//         console.log(res);
//         //setError(true)
//         console.log(setError(res.statusText) );
//         //throw new Error(res.statusText )
//       } */
//     }).then(resJson => {
//           setUser(resJson.user)
//           console.log(resJson , 'es la respuesta');
//             if(typeof resJson == String){
//             console.log(typeof resJson);
//             setError(resJson)
//             throw new Error(resJson)
//           }
//           //unaVariable = 'chao'
//           //console.log(unaVariable)
//           setToken_role(resJson.accessToken, resJson.user.role )
//           console.log(setToken_role(resJson.accessToken, resJson.user.role ), 'guardar token y rol')
//         //   if(resJson.user.role === undefined)
//         //   /* if(typeof resJson == String) */ {
//         //     console.log(typeof resJson);
//         //     throw new Error(resJson)
//         // }
//           if(resJson.user.role === 'admin'){
//             console.log('es administrador');
//             navigate("/getUser");
//           }
//         }) .catch((error )=> {console.log(error , 'ES EL CATCH')})
//   }