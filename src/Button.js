import React from 'react'

const Button = ({label,onClickHandler}) => (
    <div>
        <button
            onClick={onClickHandler}
        >
            {label}
        </button>
    </div>
)

export default Button