import React from 'react';

const TextInput = (props) => {
    const { type = "text" } = props;
    return <input type={type} {...props} />
}

export default TextInput;