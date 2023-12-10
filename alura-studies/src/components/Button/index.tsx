import React from "react";
import style from './Button.module.scss';

interface IProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
}

class Button extends React.Component<IProps> {
    render() {
        const { type = "button" } = this.props
        return (
            <button type={type} className={style.button}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;