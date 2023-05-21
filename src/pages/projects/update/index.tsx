import { useParams } from "react-router-dom"
import { Form } from "../../../components/shared/form"
import { useEffect, useState } from "react";
import { Project } from "../../../types/Projects";
import axios from "axios";

export const UpdateProject = () => {

    const { id } = useParams();

    const [project, setProject] = useState<Project>()


    useEffect(() => {
        const getProject = async () => {

            try {
                const response = await axios.get(`http://localhost:3000/projects/${id}`);
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