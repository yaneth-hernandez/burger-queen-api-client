//LISTAR PRODUCTOS
const token = localStorage.getItem('Token')

export const requestGetProducts = (token) => {
    return fetch('http://localhost:8080/products',{
        headers: {"Authorization": "Bearer " + token}
    })
}



 export const postImage = (img) => {
    const apiKey = '439686b154b99d1b91858118eb9ddefb'
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

  export const requestCreateProduct = (token, name, type, price, img)=>{
    return fetch('http://localhost:8080/products',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            "name": name,
            "type": type,
            "price": price,
            "image": img
        })
    })
}


  //https://api.imgbb.com/

  
// async function uploadImgWeb (img) {

//     const form = new FormData();
//     form.append('image', img);
//     console.log('img helpers ', typeof img);
  
    
  
//     const petition = {
//         method: 'POST',
//         body: form
//     }
  
//     const response = await fetch(url,petition) 
//     console.log('response helpers ', response);
//     const dataResponse = await response.json()
  
//     console.log('URL IMAGEN >>>>', dataResponse.data.url )
//     return dataResponse.data.url
  
//   }