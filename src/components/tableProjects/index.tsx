import { Link } from 'react-router-dom';
import { Project } from '../../types/Projects'
import { Button } from '../shared/button'
import styles from './TableProjects.module.css'

interface TableProjectsProps {
    projects: Project[]
    handleRemove: (id: number | undefined) => void;
}


export const TableProjects = ({ projects, handleRemove }: TableProjectsProps) => {

    return (
        <table className={styles.tableWrapper}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>URL Image</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    projects.map(project => (
                        <tr
                            key={project.id}
                        >
                            <td>{project.projectName}</td>
                            <td>{project.projectImageUrl}</td>
                            <td>
                                <Link to={`/projects/update/${project.id}`}>
                                    <Button
                                        type='button'
                                        text='Editar'
                                    />
                                </Link>

                                <Button

                                    type='button'
                                    text='Excluir'
                                    onClick={() => handleRemove(project.id)}
                                />

                            </td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    )
}