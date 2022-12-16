
export const requestCreateOrder = (token, idUser, clientName, productArray, total, status, date, hour, time) => {
    return fetch('http://localhost:8080/orders', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            "userId": idUser,
            "client": clientName,
            "products": productArray,
            "amount":total,
            "status": status,
            "dataEntry": date,
            "hour":hour,
            "totalTime": time
        })
    })
}

export const getOrderList = (token)=>{
    return fetch('http://localhost:8080/orders',{
        headers: {"Authorization": "Bearer " + token}
    })
}

export const requestEditOrders = (token, id, status, dateProcessed)=>{
    return fetch(`http://localhost:8080/orders/${id}`,{
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "PATCH",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            "id":id,
            "status": status, 
            "dateProcessed": dateProcessed
        })
    })
}

