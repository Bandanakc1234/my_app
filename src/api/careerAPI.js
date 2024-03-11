export const addCareer = (career)=> {
    return fetch(`http://localhost:8000/api/career/add_career`,{
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
    return fetch('http://localhost:8000/api/career/view_career')
    .then(res=>res.json())
    .catch(err=>console.log(err))
}