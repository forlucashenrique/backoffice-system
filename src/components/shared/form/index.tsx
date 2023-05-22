
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
    projectName: Yup.string().required('O nome do projeto é obrigatório.'),
    projectImageUrl: Yup.string().required('A URL da imagem é obrigatória.')
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
        
        projectName: '',
        projectImageUrl: ''
    }




    const onSubmit = async (values: Project, { resetForm }: { resetForm: () => void }) => {
        setShowMessage(true);
        try {
            if (project) {
                await api.patch(`projects/${project.id}`, values)
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
                                value={values.projectName}
                                onChange={handleChange}
                                name="projectName"
                                className={touched.projectName && errors.projectName ? styles.error : ''}
                            />
                            <Message text={errors.projectName} />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <label>Image URL</label>
                            <Input
                                type="text"
                                placeholder="Image URL"
                                onChange={handleChange}
                                value={values.projectImageUrl}
                                name="projectImageUrl"
                                className={errors.projectImageUrl ? styles.error : ''}
                                
                            />
                            <Message text={errors.projectImageUrl} 
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