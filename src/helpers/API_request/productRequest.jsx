
export const requestGetProducts = (token) => {
    return fetch('http://localhost:8080/products', {
        headers: { "Authorization": "Bearer " + token }
    })
}

export const onChangeImg = async (e, setFunction) => {
    const uploadedFile = await e.target.files[0]
  
    const reader = new FileReader();
    reader.readAsDataURL(uploadedFile);
    reader.onload =   () =>  setFunction(reader.result);
  
    return uploadedFile
  
  }
  

  //https://api.imgbb.com/
  export async function uploadImgWeb (img) {
  
    const form = new FormData();
    form.append('image', img);
    
    const apiKey = '814c98ee13029169428cdf5448143d90'
  
    const url = `https://api.imgbb.com/1/upload?key=${apiKey}`
  
    const petition = {
        method: 'POST',
        body: form
    }
  
    const response = await fetch(url,petition) 
    const dataResponse = await response.json()
  
    return dataResponse.data.url
  
  }






export const requestCreateProduct = (token, name, price, img, type) => {
    return fetch('http://localhost:8080/products', {
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

export const requestEditProducts = (token, id, name, price, img, type) => {
    return fetch(`http://localhost:8080/products/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "PATCH",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            "id": id,
            "name": name,
            "price": price,
            "image": img,
            "type": type
        })
    })
}





export const requestDeleteProduct = (id, token) => {
    return fetch(`http://localhost:8080/products/${id}`, {
        method: 'DELETE',
        headers: {
            // "Content-Type": "application/json",
            "Access-Control-Request-Method": "DELETE",
            "Authorization": "Bearer " + token
        },
        body: id
    })
}
