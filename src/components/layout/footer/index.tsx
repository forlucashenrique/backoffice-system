import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <span>&copy; made by Lucas Henrique, {new Date().getFullYear()}. </span>
        </footer>
    )
}