import React from "react";
import style from './Button.module.scss';

interface IProps {
    children: React.ReactNode;
}

class Button extends React.Component<IProps> {
    render() {
        return (
            <button className={style.button}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;