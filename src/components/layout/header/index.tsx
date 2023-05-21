import { useLocation } from 'react-router-dom';
import styles from './Header.module.css'
import { useAuth } from '../../../contexts/AuthContext';
import { Button } from '../../shared/button';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const { authenticated, user } = useAuth();

    const router = useLocation();
    const navigate = useNavigate();

    let title = ''

    switch (router.pathname) {
        case '/projects/list':
            title = 'Projetos';
            break;
        case '/projects/create':
            title = 'Criar Projeto';
            break;
        case '/':
            title = 'Home';
            break;
        default:
            title = 'Atualizar Projeto';
    }


    return (

        <header className={styles.headerWrapper}>
            <span>{title}</span>

            <div className={styles.avatarWrapper}>
                {
                    authenticated ? (
                        <>
                            <span>{user?.name}</span>
                            <img src="/avatar1.png" alt="" />
                            <Button 
                            text='Logout'
                            type='button'
                            onClick={() => navigate('/login')}
                        />
                        </>
                    ) : (
                        <Button 
                            text='Login'
                            type='button'
                            onClick={() => navigate('/login')}
                        />
                    )
                }

            </div>
        </header>
    )

}