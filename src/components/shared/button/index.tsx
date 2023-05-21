
import styles from './Button.module.css'

interface ButtonProps {
    type: "button" | "submit" | "reset";
    width?: string;
    disabled?: boolean;
    text: string;
    onClick?: () => void;
}

export const Button = ({ width, onClick, text, type, disabled}: ButtonProps) => {
    return (
        <button
            style={{
                width: width || '100%' ,
            }}
            
            className={styles.btn}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {text}
        </button>
    )

}