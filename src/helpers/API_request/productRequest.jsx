//LISTAR PRODUCTOS
const token = localStorage.getItem('Token')

export const requestGetProducts = (token) => {
    return fetch('http://localhost:8080/products',{
        headers: {"Authorization": "Bearer " + token}
    })
}


  //https://api.imgbb.com/
 export const postImage = (img) => {
    const apiKey = '814c98ee13029169428cdf5448143d90'
    const url = `https://api.imgbb.com/1/upload?key=${apiKey}`

    const form = new FormData();
    form.append('image', img);

    return fetch(url,{
        method: 'POST',
        headers: {
        },
        body: form
    })
  }

  export const requestCreateProduct = (token, name, price,img, type)=>{
    return fetch('http://localhost:8080/products',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            "name": name, 
            "price": price, 
            "image": img,
            "type": type
        })
    })
}

export const requestEditProducts = (token, id, name, price,img, type)=>{
    return fetch(`http://localhost:8080/products/${id}`,{
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "PATCH",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            "id":id,
            "name": name, 
            "price": price, 
            "image": img,
            "type": type
        })
    })
}




  
  export const requestDeleteProduct=(id)=>{
    return fetch(`http://localhost:8080/products/${id}`, {
        method: 'DELETE',
        headers: {
           // "Content-Type": "application/json",
            "Access-Control-Request-Method": "DELETE",
            "Authorization": "Bearer " + token
        },
        body:id
    })
  }
  