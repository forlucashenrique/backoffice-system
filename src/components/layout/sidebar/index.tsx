
import styles from './Sidebar.module.css';
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { Button } from '../../shared/button';

export const Sidebar = () => {

    return (
        <div className={styles.sidebarWrapper}>
            <header className={styles.sidebarHeader}>
                <Link to='/'>
                    <span>Dashboard</span>
                </Link>
            </header>
            <nav className={styles.navigation}>

                <ul>
                    <li>
                        <Link

                            to='/projects/create'
                        >
                            <Button
                                type='button'
                                text='Cadastrar Projeto'
                            />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/projects/list'
                        >
                            <Button
                                type='button'
                                text='Listar Projetos'
                            />
                        </Link>
                    </li>

                </ul>

            </nav>
            <footer className={styles.sidebarFooter}>
                <span>Follow me</span>
                <div>
                    <IconBrandGithub size={32} />
                    <IconBrandInstagram size={32} />
                    <IconBrandLinkedin size={32} />
                </div>
            </footer>
        </div>
    )
}