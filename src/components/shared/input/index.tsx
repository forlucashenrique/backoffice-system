import React from "react";

interface InputProps {
    type: string;
    placeholder?: string;
    value: string;
    name: string;
    className?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            name={props.name}
            onChange={props.onChange}
        >
        </input>
    )
}