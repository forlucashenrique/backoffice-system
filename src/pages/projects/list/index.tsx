import { useEffect, useState } from "react"
import { TableProjects } from "../../../components/tableProjects"
import { Project } from "../../../types/Projects"

import api from "../../../services/api"

export const ListProjects = () => {

    const [projects, setProjects] = useState<Project[]>([])


    const removeProject = async (id: number | undefined) => {

        try {
            await api.delete(`projects/${id}`)
            setProjects(projects.filter(project => project.id !== id))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        const getProjects = async () => {
            const response = await api.get('projects')
           
            setProjects(response.data.results)
        }

        getProjects();;

    }, [])

    return (
        <>
            {
                projects.length > 0 ? (
                    <TableProjects
                        projects={projects}
                        handleRemove={removeProject}
                        
                    />
                ) : (
                    <p>Não há projetos cadastrados</p>
                )

            }

        </>
    )
}