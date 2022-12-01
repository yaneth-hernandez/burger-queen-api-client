//LISTAR PRODUCTOS
const token = localStorage.getItem('Token')

export const requestGetProducts = (token) => {
    // return fetch('http://localhost:8080/users')
    return fetch('http://localhost:8080/products',{
        //method: 'GET',
        headers: {"Authorization": "Bearer " + token}
    })
}

export const requestCreateProduct = ()=>{
    
}