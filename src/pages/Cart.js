import React from 'react'
import Navbar from './../components/navbar/NavBar'
import Announcement from './../components/announcement/Announcement'
import Footer from './../components/footer/Footer'
import styled from 'styled-components'
import tw from 'twin.macro'
const Cart = () => {
    return (
        <div className='space-y-5'>
            <Navbar />
            <Announcement />
            <Container>
                <Title>your bag</Title>
                <Top>
                    <Left>
                        <Button outlined>continue shopping</Button>
                    </Left>
                    <Center>
                        <BagDetail>shopping bag(2)</BagDetail>
                        <BagDetail>your whishlist(0)</BagDetail>
                    </Center>
                    <Right>
                        <Button black>checkout now</Button>
                    </Right>
                </Top>
                <Bottom>
                    <Products>
                        <Product>
                            <Info>
                                <ImageContainer>
                                    <img src='https://media.istockphoto.com/photos/colorful-tie-die-tshirt-on-wooden-background-fashion-summer-picture-id1322677667?b=1&k=20&m=1322677667&s=170667a&w=0&h=Il6CSIUIKB5BKQd8obxBY9BQ1ijzfcR4Q1iK_8sbkWU=' alt='' />
                                </ImageContainer>
                                <InfoContainer>
                                    <h1 className='space-x-2 tracking-widest'><span className='font-bold'>Product:</span><span>This the product</span></h1>
                                    <h1 className='space-x-2 tracking-widest'><span className='font-bold'>ID:</span><span>90128093-213</span></h1>
                                    <Colors />
                                    <h1 className='space-x-2 tracking-widest'><span className='font-bold'>size:</span><span>sm</span></h1>
                                </InfoContainer>
                            </Info>
                            <Price>
                                <div className='space-x-3 space-y-3 w-max m-auto'>
                                    <span className='text-5xl  cursor-pointer'>-</span>
                                    <span className='text-3xl border border-blue-600 rounded px-3.5'>1</span>
                                    <span className='text-5xl cursor-pointer'>+</span>
                                    <h1 className='text-5xl font-extralight tracking-widest text-center'>$350</h1>
                                </div>
                            </Price>
                        </Product>
                        <Product>
                            <Info>
                                <ImageContainer>
                                    <img src='https://media.istockphoto.com/photos/colorful-tie-die-tshirt-on-wooden-background-fashion-summer-picture-id1322677667?b=1&k=20&m=1322677667&s=170667a&w=0&h=Il6CSIUIKB5BKQd8obxBY9BQ1ijzfcR4Q1iK_8sbkWU=' alt='' />
                                </ImageContainer>
                                <InfoContainer>
                                    <h1 className='space-x-2 tracking-widest'><span className='font-bold'>Product:</span><span>This the product</span></h1>
                                    <h1 className='space-x-2 tracking-widest'><span className='font-bold'>ID:</span><span>90128093-213</span></h1>
                                    <Colors />
                                    <h1 className='space-x-2 tracking-widest'><span className='font-bold'>size:</span><span>sm</span></h1>
                                </InfoContainer>
                            </Info>
                            <Price>
                                <div className='space-x-3 space-y-3 w-max m-auto'>
                                    <span className='text-5xl  cursor-pointer'>-</span>
                                    <span className='text-3xl border border-blue-600 rounded px-3.5'>1</span>
                                    <span className='text-5xl cursor-pointer'>+</span>
                                    <h1 className='text-5xl font-extralight tracking-widest text-center'>$350</h1>
                                </div>
                            </Price>
                        </Product>
                    </Products>
                    <Summary>
                        <SummaryCont>
                            <h1 className='text-2xl tracking-widest'>Order Summary</h1>
                            <SummaryItems>Subtotal <span className='font-bold'>$80</span></SummaryItems>
                            <SummaryItems>emtimated shipping <span className='font-bold'>$5</span></SummaryItems>
                            <SummaryItems>shipping discount <span className='font-bold'>-$5</span></SummaryItems>
                            <SummaryItems>total <span className='font-bold'>$80</span> </SummaryItems>
                            <Button black>checkout</Button>
                        </SummaryCont>
                    </Summary>
                </Bottom>
            </Container>
            <Footer />
        </div>
    )
}
const SummaryItems = styled.h1`
${tw`text-lg tracking-widest capitalize`}
`
const SummaryCont = styled.h1`
${tw`space-y-4 border w-max m-auto p-4 rounded-2xl border-black`}
`

const Product = styled.div`
${tw`flex  flex-col lg:flex-row`}
`
const InfoContainer = styled.span`
${tw`flex-1 flex flex-col justify-between
`}
`
const ImageContainer = styled.span`
${tw`flex-1 `}
img{
    ${tw`h-full w-full object-cover`}
}
`
const Colors = styled.span`
${tw` w-5 h-5 bg-indigo-600 rounded-full  cursor-pointer`}
`
const Price = styled.div`
${tw`flex-1`}
`
const Info = styled.div`
${tw`flex-1 flex  space-x-3`}
`
const Summary = styled.div`
${tw`flex[.3] height[max-content] `}
`
const Products = styled.div`
${tw`flex[.7] space-y-4 mx-3`}
`
const Bottom = styled.div`
${tw`flex flex-col  space-y-7 xl:flex-row`}
`
const BagDetail = styled.h1`
${tw`underline tracking-widest `}
`
const Button = styled.button`
${tw`outline-none border border-black tracking-widest py-3 px-4 w-full `}
${props => props.black && tw`text-white bg-black`}
`
const Right = styled.div`
${tw`flex-1`}
`
const Center = styled.div`
${tw`flex-1 hidden sm:flex items-center justify-between space-x-3`}
`
const Left = styled.div`
${tw`flex-1`}
`
const Top = styled.div`
${tw`flex items-center mx-3 space-x-3`}
`
const Title = styled.h1`
${tw`text-5xl tracking-widest capitalize font-extralight text-center`}
`
const Container = styled.div`
${tw`space-y-4`}
`
export default Cart
