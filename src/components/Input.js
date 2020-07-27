import React from 'react';
 
const Input = ({name, type, value, label, onChangeHandler }) => (
<div className='form'>
    <label>{label}</label>
    <input type={type} name={name} value={value} onChangeHandler={onChangeHandler}></input>
</div>)

export default Input;