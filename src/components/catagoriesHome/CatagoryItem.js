import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const CatagoryItem = ({ title, image }) => {
    return (
        <Container>
            <Headin>
            <h1 className='text-white text-8xl font-bold
            drop-shadow-2xl filter
            '>{title}</h1>
            <button className='border-2 bg-white py-3 px-6
            font-bold text-black
            '>shop now</button>
            </Headin>
            <img className='h-full w-full object-cover' alt='' src={image} />
        </Container>
    )
}
const Headin = styled.div`
${tw`absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center
flex-col
`}
`
const Container = styled.div`
${tw`relative h-96 w-full`}
`
export default CatagoryItem
