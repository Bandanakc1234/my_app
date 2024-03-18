import {API} from '../config'


export const userRegister = (user) =>{
    console.log(user)
    return fetch (`${API}/user/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response =>{return response.json()})
    .catch(error => console.log(error))
}

//user email confirmation or verify email
export const emailConfirmation = (token) => {
    return fetch(`${API}/user/verifyEmail/${token}`)
    .then(response =>{return response.json()})
    .catch(error => console.log(error))
}

export const userLogin = (user) =>{
    console.log(user)
    return fetch(`${API}/user/login`,{
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response =>{return response.json()})
    .catch(error => console.log(error))
}