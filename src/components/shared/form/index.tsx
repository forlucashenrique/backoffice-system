
import { Input } from "../input"
import styles from './Form.module.css'
import { Formik} from "formik"
import * as Yup from 'yup';
import { InitialValuesForm } from "../../../types/InitialValuesForm"
import { Button } from "../button"
import { Project } from "../../../types/Projects";
import { useLocation } from "react-router-dom";
import { Message } from "../message";
import { useState } from "react";
import api from "../../../services/api";


interface FormProps {
    project?: Project,
}


const validateSchema = Yup.object().shape({
    project_name: Yup.string().required('O nome do projeto é obrigatório.'),
    project_image_url: Yup.string().required('A URL da imagem é obrigatória.')
})


export const Form = ({ project }: FormProps) => {

    const [showMessage, setShowMessage] = useState<boolean>(false);
    const location = useLocation();

    let message = ''

    if (location.pathname === '/projects/create') {
        message = 'Projeto criado com sucesso!'
    } else  {
        message = 'Projeto atualizado com sucesso!'
    }


    const defaultValues: InitialValuesForm = {
        
        project_name: '',
        project_image_url: ''
    }




    const onSubmit = async (values: Project, { resetForm }: { resetForm: () => void }) => {
        setShowMessage(true);
        try {
            if (project) {
                await api.put(`projects/${project.id}`, values)
            } else {
                await api.post('projects', values)
                resetForm();
            }

            
            
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                setShowMessage(false);
            }, 3000);

        }
    }

    return (
        <Formik
            initialValues={project || defaultValues}
            validationSchema={validateSchema}
            onSubmit={onSubmit}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,

            }) => (
                <>
                    <div>
                        {showMessage && <Message text={message} typeError="success"/>}
                    </div>
                    <form
                        className={styles.formWrapper}
                        onSubmit={handleSubmit}
                    >
                        <div className={styles.fieldWrapper}>
                            <label>Project Name</label>
                            <Input
                                type="text"
                                placeholder="Project name"
                                value={values.project_name}
                                onChange={handleChange}
                                name="project_name"
                                className={touched.project_name && errors.project_name ? styles.error : ''}
                            />
                            <Message text={errors.project_name} />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <label>Image URL</label>
                            <Input
                                type="text"
                                placeholder="Image URL"
                                onChange={handleChange}
                                value={values.project_image_url}
                                name="project_image_url"
                                className={errors.project_image_url ? styles.error : ''}
                                
                            />
                            <Message text={errors.project_image_url} 
                            />
                        </div>
                        <Button
                            text='Salvar'
                            type="submit"
                            width="80%"
                        />
                    </form>
                </>

            )}

        </Formik>

    )
}