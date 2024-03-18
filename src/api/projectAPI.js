import { API } from "@/config"

export const addProject = (project) => {
    return fetch(`${API}/project/add_project`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(project)
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const view_project = () => {
    return fetch(`${API}/project/view_project`)
        .then(res => res.json())
        .catch(err => console.log(err))
}