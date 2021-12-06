import React from 'react'
import styled from 'styled-components'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import tw from 'twin.macro'
const MyCrousel = () => {
    const data = [
        {
            img: 'https://images.unsplash.com/photo-1626071466175-79ab723e9fdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=459&q=80',
            title: 'Hi Neck black version',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab alias excepturi ex minima perferendis nesciunt possimus deleniti, est ipsa corrupti dolorum et velit ducimus, cupiditate sapiente id, reprehenderit laudantium officia?'
        },
        {
            img: 'https://images.unsplash.com/photo-1557153730-57fbae1cfae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb24lMjBtb2RlbHxlbnwwfDF8MHx3aGl0ZXw%3D&auto=format&fit=crop&w=400&q=60',
            title: 'Hi Neck black version',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab alias excepturi ex minima perferendis nesciunt possimus deleniti, est ipsa corrupti dolorum et velit ducimus, cupiditate sapiente id, reprehenderit laudantium officia?'
        },
        {
            img: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8MXwwfHdoaXRlfA%3D%3D&auto=format&fit=crop&w=400&q=60',
            title: 'Hi Neck black version',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab alias excepturi ex minima perferendis nesciunt possimus deleniti, est ipsa corrupti dolorum et velit ducimus, cupiditate sapiente id, reprehenderit laudantium officia?'
        },
    ]
    return (
        <Container>
            <Arrow left><AiOutlineArrowLeft /></Arrow>
            <SlideWrapper>
                {
                    data.map((val, index) => (
                        <Slide>
                            <ImageCont>
                                <img src={val.img} key={index} className='w-full h-full object-contain' />
                            </ImageCont>
                            <DescriptionCont>
                                <DescHeading>
                                    {val.title}
                                </DescHeading>
                                <DescDescription>
                                    {val.description}
                                </DescDescription>
                                <button className='border-2 border-black py-3 px-5
                                hover:bg-yellow-200
                                '>BUY NOW</button>
                            </DescriptionCont>
                        </Slide>
                    ))
                }
            </SlideWrapper>
            <Arrow right><AiOutlineArrowRight /></Arrow>
        </Container>
    )
}

const DescDescription = styled.p`
    ${tw` text-sm tracking-widest text-center`}
`
const DescHeading = styled.h1`
    ${tw`text-2xl font-bold tracking-widest text-center`}
`
const DescriptionCont = styled.div`
${tw`px-5 flex-1 height[80%] flex flex-col items-center justify-center`}
`
const ImageCont = styled.div`
${tw` height[80%]  flex-1`}
`
const Slide = styled.div`
    ${tw`flex-shrink-0 h-screen w-screen  flex  justify-center `}
`
const SlideWrapper = styled.div`
${tw`h-full w-full overflow-hidden flex`}
transform: translateX(-600px);
`
const Arrow = styled.div`
${tw`bg-transparent opacity-40 border border-black hover:bg-yellow-500 hover:border-0 hover:opacity-100 hover:text-white absolute w-10 h-10 text-center rounded-full flex items-center  content-center cursor-pointer transition-colors duration-300 ease-in-out`}
svg{
    ${tw`w-7 ml-1`}
}
${props => props.left ? tw`left-0 border-opacity-20  sm:top[50%] top[40%]` : tw`right-0 border-opacity-20  sm:top[50%] top[40%]`}
`
const Container = styled.div`
${tw`relative h-screen w-screen max-w-full `}
`
export default MyCrousel
