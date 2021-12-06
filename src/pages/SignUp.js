import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'
import { signUpAction } from '../actions/auth.actions'
import { Navigate } from 'react-router-dom'
const SignUp = () => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const initialState = {
        name: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    const [data, setdata] = useState(initialState)
    const {
        name,
        lastName,
        userName,
        email,
        password,
        confirmPassword
    } = data
    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setdata({
            ...data,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            return alert("incorrect confirm_password")
        }
        const { confirmPassword: Pas, ...others } = data
        dispatch(signUpAction(others))
    }
    if (auth.authenticate) {
        return <Navigate to='/' />
    }
    return (
        <Container>
            <DataContainer as='form' onSubmit={handleSubmit}>
                <Title>create new account</Title>
                <InputContainer>
                    <Input value={name} onChange={handleOnChange} name='name' type='text' placeholder='name' />
                    <Input value={lastName} onChange={handleOnChange} name='lastName' type='text' placeholder='last name' />
                    <Input value={userName} onChange={handleOnChange} name='userName' type='text' placeholder='username' />
                    <Input value={email} onChange={handleOnChange} name='email' type='text' placeholder='email' />
                    <Input value={password} onChange={handleOnChange} name='password' type='password' placeholder='password' />
                    <Input value={confirmPassword} onChange={handleOnChange} name='confirmPassword' type='password' placeholder='confirm password' />
                </InputContainer>
                <Privacy >By creating account, i concent my personal data to processing according to PRIVACY POLICY</Privacy>
                <Button type='submit'>sign up</Button>
                <Privacy>Already have an account? <Link to='/signin'> <span className='text-red-700 font-bold underline cursor-pointer'>Log in!</span></Link></Privacy>
            </DataContainer>
        </Container>
    )
}
const Title = styled.div`
${tw`text-3xl capitalize text-gray-500 `}
`
const Privacy = styled.p`
${tw`text-sm opacity-75 tracking-widest`}
`
const Button = styled.button`
${tw`py-3 px-5 bg-green-500 outline-none capitalize text-white`}
`
const Input = styled.input`
${tw`w-full outline-none border border-gray-400 py-3 px-3 `}
`
const InputContainer = styled.div`
${tw`grid grid-cols-2 gap-4`}
`
const DataContainer = styled.div`
${tw`sm:width[70%] sm:height[65%] lg:height[65%] lg:w-1/2 bg-white p-2 space-y-3
width[80%] height[65%]
filter drop-shadow-lg shadow-2xl
`}
`
const Container = styled.div`
${tw`h-screen w-full flex items-center justify-center background-position[left]
shadow-2xl drop-shadow-2xl 
`}
background-image:url('https://images.unsplash.com/photo-1522069394066-326005dc26b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80');
background-repeat: no-repeat;
background-size: cover;
`
export default SignUp
