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

//login
export const userLogin = ({email, password}) =>{
    console.log(email, password)
    return fetch(`${API}/user/login`,{
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email, password})
    })
    .then(response =>{return response.json()})
    .catch(error => console.log(error))
}

// authenticate to keep sigined in
export const authenticate = (logininfo) => {
    localStorage.setItem('token', logininfo.token)
} 

//to check if logged in 
// export const isAuthenticated = () =>{
//     return localStorage.getItem('jwt') ? JSON.parse(localStorage.getItem('jwt')) : false
// }