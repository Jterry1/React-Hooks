import React, { useState } from 'react';

const Form =  ( props )  => {
    const [ form, setForm ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const onChangeHandler = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(form);
    }
    return(
        <div>
            <form style={{textAlign:'center'}} onSubmit={onSubmitHandler}>
                <label>First Name</label>
                <input type="text" name='firstName' onChange={onChangeHandler}/>
                <br/>        
                <label>Last Name</label>
                <input type="text" name='lastName' onChange={onChangeHandler}/>
                <br/>        
                <label>Email</label>
                <input type="email" name='email' onChange={onChangeHandler}/>
                <br/>        
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                <br/>        
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                <br/>   
                <input type="submit"/>
                <h4>Your form data</h4>
                <p>{form.firstName}</p>
                <p>{form.lastName}</p>
                <p>{form.email}</p>
                <p>{form.password}</p>
                <p>{form.confirmPassword}</p>
            </form>
        </div>
    );
}

export default Form;