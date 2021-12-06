import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../actions/auth.actions'

const NavBar = () => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logOut())
    }
    return (
        <Container>
            <Left>
                <Link to='/'>
                    <Logo>Salleh.T</Logo>
                </Link>
            </Left>
            <Right>
                <SearchCont>
                    <input type='text' placeholder='search...' />
                    <AiOutlineSearch />
                </SearchCont>
                <GiHamburgerMenu className='text-2xl sm:hidden cursor-pointer' />
                <Item>
                    {
                        auth.authenticate ?
                            <>
                                <Items className='text-green-500'>{auth.data.user.userName}</Items>
                                <Items onClick={handleLogout}>Logout</Items>
                            </>
                            :
                            <>
                                <Link to='/signin'>
                                    <Items>Signin</Items>
                                </Link>
                                <Link to='/signup'>
                                    <Items>Signup</Items>
                                </Link>
                            </>
                    }
                    <Link to='/cart'>
                        <Items className='relative'>
                            <AiOutlineShoppingCart className='text-2xl ' />
                            <span className='absolute -top-1.5 -right-1.5
                        text-xs h-4 w-4 rounded-full bg-green-600
                        text-white
                        text-center
                        '>
                                3
                            </span>
                        </Items>
                    </Link>
                </Item>
            </Right>
        </Container >
    )
}
const Item = styled.div`
${tw` items-center space-x-3
hidden
sm:flex
sm:space-x-6
`}
`
const Items = styled.div`
${tw`text-lg cursor-pointer font-semibold`}
`
const SearchCont = styled.div`
${tw`flex items-center border w-min  focus:ring-1 px-2 py-1
margin-right[12px]
`}
svg{
    ${tw`text-2xl`}
}
input{
    ${tw`outline-none`}
}
`
const Logo = styled.h1`
${tw`text-2xl font-bold tracking-widest `}
`
const Right = styled.div`
${tw`flex-1 flex items-center justify-end
sm:px-7
`}
`
const Left = styled.div`
${tw`flex-1 sm:px-7`}
`
const Container = styled.div`
${tw`flex items-center px-2 py-1
`}
`
export default NavBar
