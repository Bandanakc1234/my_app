export const addProject = (project)=> {
    return fetch(`http://localhost:8000/api/project/add_project`,{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
            // Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(project)
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
} 

export const view_project = () => {
    return fetch('http://localhost:8000/api/project/view_project')
    .then(res=>res.json())
    .catch(err=>console.log(err))
}