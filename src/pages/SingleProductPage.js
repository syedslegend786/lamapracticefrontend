import React from 'react'
import Navbar from './../components/navbar/NavBar'
import Announcement from './../components/announcement/Announcement'
import Footer from './../components/footer/Footer'
import styled from 'styled-components'
import tw from 'twin.macro'
const SingleProductPage = () => {
    return (
        <div>
            <Navbar />
            <Announcement />
            <Container>
                <ImageContainer>
                    <img
                        src='https://media.istockphoto.com/photos/beautiful-womans-dress-lies-on-the-floor-picture-id1296111355?b=1&k=20&m=1296111355&s=170667a&w=0&h=8i8MWIGRyIw9QXZPYHJz2ON0I9HCFOWDmhYd8e_kO-4='
                        alt=''
                    />
                </ImageContainer>
                <InfoContainer>
                    <h1 className='text-5xl tracking-widest'>This is product Heading</h1>
                    <p className='text-xl tracking-widest'>Salleh.T is the fentastic online shoppping plateform that only look to provide 100% to its costomers.We are always looking forward to make our customers happy.</p>
                    <p className='text-5xl tracking-widest'>$20</p>
                    <div className='flex justify-between'>
                        <div className='flex items-center space-x-3'>
                            <span className='tracking-widest text-2xl'>colors</span>
                            <div className='flex items-center space-x-2'>
                                <Colors />
                                <Colors />
                                <Colors />
                                <Colors />
                            </div>
                        </div>
                        <div className='space-x-3'>
                            <span className='text-2xl'>size:</span>
                            <select className='border border-black p-2'>
                                <option>xs</option>
                                <option>sm</option>
                                <option selected>md</option>
                                <option>lg</option>
                                <option>lg</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='space-x-3'>
                            <span className='text-5xl cursor-pointer'>-</span>
                            <span className='text-3xl border border-blue-600 rounded px-3.5'>1</span>
                            <span className='text-5xl cursor-pointer'>+</span>
                        </div>
                        <button className=' hover:bg-green-500 hover:text-white hover:border-opacity-0 capitalize outline-none border border-black py-2 px-3.5'>add to cart</button>
                    </div>
                </InfoContainer>
            </Container>
            <Footer />
        </div>
    )
}
const Colors = styled.span`
${tw`mt-auto w-5 h-5 bg-indigo-600 rounded-full  cursor-pointer`}
`
const InfoContainer = styled.div`
${tw`flex flex-col justify-center  space-y-5`}
`
const ImageContainer = styled.div`
${tw`w-full h-full`}
img{
    ${tw`w-full h-full object-cover`}
}
`
const Container = styled.div`
${tw`grid xl:grid-cols-2  xl:height[85vh] m-5 space-x-3 space-y-5 mb-28`}
`
export default SingleProductPage
