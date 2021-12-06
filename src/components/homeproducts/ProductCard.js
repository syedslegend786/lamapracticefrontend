import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'
import { FaRegHeart } from 'react-icons/fa'
const ProductCard = ({ image }) => {
    return (
        <Container>
            <DetailCont>
                <IconCont>
                    <AiOutlineSearch />
                </IconCont>
                <IconCont>
                    <AiOutlineShoppingCart />
                </IconCont>
                <IconCont>
                    <FaRegHeart />
                </IconCont>
            </DetailCont>
            <img src={image} alt='' className='h-full w-full object-cover' />
        </Container>
    )
}
const IconCont = styled.div`
${tw` w-max p-3 bg-white rounded-full cursor-pointer transition-all duration-300 ease-in-out 
`}
svg{
    ${tw`text-2xl`}
}
&:hover{
    transform: scale(1.1);
}
`
const DetailCont = styled.div`
${tw`opacity-0 space-x-2 absolute top-0 left-0 right-0 bottom-0 flex hover:opacity-100  items-center justify-center transition-all duration-300 ease-in-out 
bg-gray-500 bg-opacity-60 
`}
`
const Container = styled.div`
${tw`relative h-48 w-full`}
`

export default ProductCard
