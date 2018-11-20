import React from 'react'

const DisplayParam = (props) => (
    <div>
        {props.match.params.uid}
    </div>
)

export default DisplayParam