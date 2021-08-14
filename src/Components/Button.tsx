import React from 'react';
import classNames  from 'classnames'

interface ButtonProps {

    cart?: boolean,
    outline?: boolean,
    circle?: boolean,
    onClick?: any
}

export const Button:React.FC<ButtonProps> = ({cart, children,  outline, circle, onClick}) => {
    return (
        <button onClick={onClick}  className={classNames('button', {
            "button--cart" : cart,
            "button--outline" : outline,
            "button--circle": circle,
        })}>{children}</button>
    );
};

