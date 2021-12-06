import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'
import tw from 'twin.macro'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const NewScroll = () => {
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
            <Carousel showThumbs={false} emulateTouch infiniteLoop autoPlay autoFocus showArrows={true} dynamicHeight={false}>
                {
                    data.map((val, index) => {
                        return (
                            <Item>
                                <ImageCont>
                                    <img className='object-cover h-full w-full' src={val.img} alt='' />
                                </ImageCont>
                                <DescCont>
                                    <h1 className='text-2xl font-bold'>{val.title}</h1>
                                    <p>{
                                        val.description.length > 150
                                            ?
                                            `${val.description.slice(0, 150)}...`
                                            :
                                            val.description
                                    }</p>
                                    <button className='capitalize border-2 border-black
                                    font-bold py-2 px-4 mt-4
                                    '>buy now</button>
                                </DescCont>
                            </Item>
                        )
                    })
                }
            </Carousel>
        </Container>
    )
}

const DescCont = styled.div`
${tw`flex-1 `}
`
const ImageCont = styled.div`
${tw`flex-1 `}
`
const Item = styled.div`
${tw`h-full w-full flex justify-center items-center`}
`
const Container = styled.div`
${tw` w-full md:w-4/5 lg:w-1/2 m-auto`}
`
{/* <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
            </Carousel> */}
export default NewScroll
