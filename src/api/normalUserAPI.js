import {API} from '../config'


//send message
export const sendEmail = (user)=> {
    return fetch(`${API}/submit_normaluserdetails`,{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify({email:user})
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
} 


export const sendMessage = (user)=> {
    return fetch(`${API}/submit_normaluserdetails`,{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
} 
