import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import CatagoryItem from './CatagoryItem'

const data = [
    {
        img: 'https://images.unsplash.com/photo-1484186304838-0bf1a8cff81c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8MnwwfHdoaXRlfA%3D%3D&auto=format&fit=crop&w=700&q=60',
        title: 'mens'
    },
    {
        img: 'https://media.istockphoto.com/photos/dark-skinned-girl-looks-in-laptop-and-enjoys-online-shopping-picture-id1285315282?b=1&k=20&m=1285315282&s=170667a&w=0&h=nN-4tnh7eM0KjBNYjaKc2LuCTYs0y_M3a_5-h9mIuZ4=',
        title: 'women'
    },
    {
        img: 'https://media.istockphoto.com/photos/portrait-of-girl-showing-ar-after-vaccination-picture-id1331100963?b=1&k=20&m=1331100963&s=170667a&w=0&h=m7F5rU_TlvvtwveTsHoQXEjqTvIO7TW--NpUQ_hjNSo=',
        title: 'childrens'
    },
]
const Catagories = () => {
    return (
        <Container>
            {
                data.map((val, index) => (
                    <CatagoryItem image={val.img} title={val.title} />
                ))
            }
        </Container>
    )
}
const Container = styled.div`
${tw`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1`}
`

export default Catagories
