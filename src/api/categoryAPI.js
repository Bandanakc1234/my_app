import {API} from "../config"

export const addCategory = (category_title, token) =>{
    return fetch (`${API}/category/add_category`,{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(category)
    })
    .then(res =>res.json())
    .catch(err=>console.log(err))
}


export const view_category = () =>{
    return fetch(`${API}/category/view_category`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}