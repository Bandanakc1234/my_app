import {API} from '../config'

export const addCareer = (career)=> {
    return fetch(`${API}/career/add_career`,{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
            // Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(career)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
} 

export const view_career = () => {
    return fetch(`${API}/career/view_career`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}