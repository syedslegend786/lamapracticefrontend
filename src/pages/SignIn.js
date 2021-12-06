import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'
import { loginAction } from '../actions/auth.actions'
import { Navigate } from 'react-router-dom'
const SignIn = () => {
    const dispatch = useDispatch()
    const { auth } = useSelector(state => state)
    const initialState = {
        email: '',
        password: '',
    }
    const [data, setdata] = useState(initialState)
    const { email, password } = data;
    const handleChanges = (e) => {
        const { value, name } = e.target
        setdata({
            ...data,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginAction(data))
    }
    if (auth.authenticate) {
        return <Navigate to='/' />
    }
    return (
        <Container>
            <DataContainer as='form' onSubmit={handleSubmit}>
                <Title>sign in</Title>
                <InputContainer>
                    <Input required name='email' value={email} onChange={handleChanges} type='email' placeholder='email' />
                    <Input required name='password' value={password} onChange={handleChanges} type='password' placeholder='password' />
                </InputContainer>
                <Button type='submit'>login</Button>
                <Privacy>new here? <Link to='/signup'> <span className='text-red-700 font-bold underline cursor-pointer'>Create new account!</span></Link></Privacy>
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
${tw`grid  gap-4`}
`
const DataContainer = styled.div`
${tw`lg:width[40%] lg:height[50%] bg-white p-2 space-y-5
height[50%] width[70%] sm:height[50%] sm:width[60%]
`}
`
const Container = styled.div`
${tw`h-screen w-full flex items-center justify-center lg:background-position[bottom left]`}
background-image:url('https://images.unsplash.com/photo-1494765803320-93c95366f4b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGFsJTIwZ2lybHxlbnwwfDB8MHxibGFja3w%3D&auto=format&fit=crop&w=500&q=60');
background-repeat: no-repeat;
background-position:left;
background-size: cover;
`
export default SignIn
