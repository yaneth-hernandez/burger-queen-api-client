//LISTAR PRODUCTOS
const token = localStorage.getItem('Token')

export const requestGetProducts = (token) => {
    return fetch('http://localhost:8080/products',{
        headers: {"Authorization": "Bearer " + token}
    })
}

export const requestCreateProduct = (token, data)=>{
    return fetch('http://localhost:8080/products',{
        method: 'POST',
        headers: {
            "Accept": "application/json, image/* ",
            "Content-Type": "multipart/form-data",
            "Authorization": "Bearer " + token
        },
        body: data
    })
}




async function uploadImgWeb (img) {

    const form = new FormData();
    form.append('image', img);
    console.log('img helpers ', typeof img);
  
    const apiKey = 'c04d608433763cbe2f5981c6f6bf2eb5'
  
    const url = `https://api.imgbb.com/1/upload?key=${apiKey}`
  
    const petition = {
        method: 'POST',
        body: form
    }
  
    const response = await fetch(url,petition) 
    console.log('response helpers ', response);
    const dataResponse = await response.json()
  
    console.log('URL IMAGEN >>>>', dataResponse.data.url )
    return dataResponse.data.url
  
  }


  //https://api.imgbb.com/
