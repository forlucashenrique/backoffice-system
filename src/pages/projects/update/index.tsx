import { useParams } from "react-router-dom"
import { Form } from "../../../components/shared/form"
import { useEffect, useState } from "react";
import { Project } from "../../../types/Projects";
import api from "../../../services/api";

export const UpdateProject = () => {

    const { id } = useParams();

    const [project, setProject] = useState<Project>()


    useEffect(() => {
        const getProject = async () => {

            try {
                const response = await api.get(`projects/${id}`);
                const data = response.data
                setProject(data);
            } catch (error) {
                console.log(error);
            }

        }

        getProject();
    }, [])
    return (
        <>  
            {
                project && <Form
                    project={project}
                />
            }
        </>

    )

}