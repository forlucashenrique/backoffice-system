import styles from './Message.module.css'

interface MessageProps {
    text: string | undefined,
    typeError?: string,

}

export function Message({ text, typeError }: MessageProps) {

    return (
        <span className={typeError === 'success' ? styles.sucess : styles.error }>
            {text}
        </span>
    )
}