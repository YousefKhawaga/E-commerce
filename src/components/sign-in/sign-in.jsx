import React, { useState } from 'react'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import { auth, signInWithGoogle } from '../../firebase/firebas.utils'
import './sign-in.scss'

const SignIn = () => {

    const [userCredintials, setCredentials] = useState({ email: '', password: '' });

    const { email, password } = userCredintials;

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setCredentials({
                email: '',
                password: ''
            });
        } catch (error) {
            console.log(error)
        }
    };

    const handleChange = e => {
        const { value, name } = e.target;

        setCredentials({ ...userCredintials, [name]: value })
    }


    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sing in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    handleChange={handleChange}
                    label="Email"
                    required />

                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    label="Password"
                    required />
                <div className="buttons">
                    <CustomButton type="submit"> Sign In</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn> Sign In  With Google  </CustomButton>
                </div>
            </form>
        </div>
    )
}


export default SignIn;