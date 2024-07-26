import React from 'react';
import styled from "@/common/button.module.scss"

const Button = ({ className, onClick, type = "button",children }) => {
    return (
        <button type={type} className={`${className} ${styled.primary}`} onClick={onClick}>{children}</button>
    )
}

export default Button
