import React from 'react';

import SignIN from '../../components/sign-in/sign-in'
import SignUp from '../../components/sign-up/sign-up'

import './sign-in-and-sign-out.scss'

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-out'>
        <SignIN />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;