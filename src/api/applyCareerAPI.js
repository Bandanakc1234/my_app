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

//view appliedcareer
export const getAppliedCareer = (token) => {
    return fetch(`${API}/view_appliedcareer`,{
        method:"GET",
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
