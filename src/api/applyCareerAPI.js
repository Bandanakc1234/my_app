import {API} from '../config'


//add career
export const applyCareer = (career)=> {
    return fetch(`${API}/apply_career`,{
        method: "POST",
        headers:{
            // "Content-Type":"application/json"
        },
        body: career
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
} 
