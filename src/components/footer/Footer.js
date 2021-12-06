import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { MdLocationOn } from 'react-icons/md'
import { HiPhone } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'
import { IoMdSend } from 'react-icons/io'

const data = [
    { title: 'home' },
    { title: 'men fasion' },
    { title: 'women fasion' },
    { title: 'cart' },
    { title: 'whishlist' },
    { title: 'checkouts' },
    { title: 'account detail' },
]
const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <h1 className=' text-6xl font-bold
            drop-shadow-2xl filter text-center mt-4 sm:text-8xl
            '>Newsletter</h1>
                <p className='text-2xl text-center tracking-widest my-4'>Be able to get all notifications about our lattest products via email!</p>
                <EmailContainer>
                    <input type='text' className='flex-1 outline-none
            border-2
            ' placeholder='Type you email' />
                    <button><IoMdSend /></button>
                </EmailContainer>
            </div>
            <Container>
                <Left>
                    <Logo>Salleh.T</Logo>
                    <p>Salleh.T is the fentastic online shoppping plateform that only look to provide 100% to
                        its costomers.We are always looking forward to make our customers happy.
                    </p>
                </Left>
                <Center>
                    <Title>Links</Title>
                    <LinkCont>
                        {data.map((val, index) => (
                            <LinksTo key={index}>{val.title}</LinksTo>
                        ))}
                    </LinkCont>
                </Center>
                <Right>
                    <Title>Contacts</Title>
                    <ContantsCont>
                        <Contact>
                            <MdLocationOn />
                            <p>Faisalabad, chanab chock, Pakistan</p>
                        </Contact>
                        <Contact>
                            <HiPhone />
                            <p>+923410411465, +923181731763</p>
                        </Contact>
                        <Contact>
                            <AiOutlineMail />
                            <p>syedslegend786 @gmail.com</p>
                        </Contact>
                    </ContantsCont>
                </Right>
            </Container>
        </FooterContainer>
    )
}
const EmailContainer = styled.div`
${tw`w-1/2 flex m-auto `}
input{
    ${tw`py-2 px-2`}
}
svg{
    ${tw`text-white  text-2xl`}
}
button{
    ${tw`bg-green-500 px-4`}
}
`
const FooterContainer = styled.div`
${tw` h-screen w-full flex flex-col justify-evenly`}
`
const Contact = styled.div`
${tw`flex items-center space-x-3`}
`
const ContantsCont = styled.div`
${tw`space-y-2`}
`
const LinksTo = styled.div`
${tw`w-1/2 capitalize cursor-pointer`}
`
const LinkCont = styled.div`
${tw`flex flex-wrap`}
`
const Logo = styled.h1`
${tw`text-2xl font-bold tracking-widest mb-3`}
`
const Title = styled.h1`
${tw`text-xl font-semibold tracking-widest mb-3`}
`

const Left = styled.div`
${tw`flex-1`}
`
const Center = styled.div`
${tw`flex-1`}
`
const Right = styled.div`
${tw`flex-1`}
`
const Container = styled.div`
${tw`flex flex-col  px-6 space-x-3 mt-10 
space-y-3 md:flex-row sm:flex-row
`}
`
export default Footer
