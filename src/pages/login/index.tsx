import { Formik } from "formik"
import { Input } from "../../components/shared/input"
import { Message } from "../../components/shared/message"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { LoginData, login as loginService } from "../../services/authService";
import * as Yup from 'yup';

import styles from '../../components/shared/form/Form.module.css'
import { Button } from "../../components/shared/button";

const validateSchema = Yup.object().shape({
    email: Yup.string().required('O email é obrigatório.'),
    password: Yup.string().required('A senha é obrigatória.')
})

export const Login = () => {

    const navigate = useNavigate();
    const { login } = useAuth();

    const defaultValues: LoginData = {
        email: '',
        password: ''
    }

    const onSubmit = async (values: LoginData) => {

        try {
            const user = await loginService(values);
            login(user);
            navigate('/');
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100%'
            }}
        >
            <Formik
                initialValues={defaultValues}
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
                        <form
                            className={styles.formWrapper}
                            onSubmit={handleSubmit}
                        >
                            <div className={styles.fieldWrapper}>
                                <label>Email</label>
                                <Input
                                    type="email"
                                    placeholder="Digite seu email..."
                                    value={values.email}
                                    onChange={handleChange}
                                    name="email"
                                    className={touched.email && errors.email ? styles.error : ''}
                                />
                                <Message text={errors.email} />
                            </div>
                            <div className={styles.fieldWrapper}>
                                <label>Senha</label>
                                <Input
                                    type="password"
                                    placeholder="Digite sua senha..."
                                    onChange={handleChange}
                                    value={values.password}
                                    name="password"
                                    className={errors.password ? styles.error : ''}

                                />
                                <Message text={errors.password}
                                />
                            </div>
                            <Button
                                text='Login'
                                type="submit"
                                width="80%"
                            />
                        </form>
                    </>

                )}

            </Formik>

        </div>
    )
}