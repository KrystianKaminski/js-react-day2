import React from 'react'

const Button = ({label}) => (
    <div>
        <button
            onClick={()=> alert('Bu')}
        >
            {label}
        </button>
    </div>
)

export default Button