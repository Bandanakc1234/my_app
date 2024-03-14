import {API} from '../config'


export const userRegister = (first_name, last_name, username, email, password, confirm_password, gender, age, phone_number, temporary_address, permanent_address) =>{
    let user = {first_name, last_name, username, email, password, confirm_password, gender, age, phone_number, temporary_address, permanent_address}
    return fetch (`${API}/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response =>{return response.json()})
    .catch(error => console.log(error))
}