import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import ProductCard from './ProductCard'
const data = [
    {
        image: 'https://media.istockphoto.com/photos/mens-long-sleeve-white-tshirt-with-front-and-back-views-isolated-on-picture-id1168895928?b=1&k=20&m=1168895928&s=170667a&w=0&h=TjolO3Gz4Nhx-fj9se9K2vY3oep9VB4VK0cU27Vdu3Q=',
    },
    {
        image: 'https://media.istockphoto.com/photos/colorful-tie-die-tshirt-on-wooden-background-fashion-summer-picture-id1322677667?b=1&k=20&m=1322677667&s=170667a&w=0&h=Il6CSIUIKB5BKQd8obxBY9BQ1ijzfcR4Q1iK_8sbkWU=',
    },
    {
        image: 'https://media.istockphoto.com/photos/blank-black-polo-shirt-mock-up-different-views-picture-id1292427571?b=1&k=20&m=1292427571&s=170667a&w=0&h=iSB4BMMMWivvjq-1Pc72_DMNEEgfVuZJnZwMStrpVvw=',
    },
    {
        image: 'https://media.istockphoto.com/photos/colorful-tie-die-tshirt-on-wooden-background-fashion-summer-picture-id1322677667?b=1&k=20&m=1322677667&s=170667a&w=0&h=Il6CSIUIKB5BKQd8obxBY9BQ1ijzfcR4Q1iK_8sbkWU=',
    },
    {
        image: 'https://media.istockphoto.com/photos/beautiful-womans-dress-lies-on-the-floor-picture-id1296111355?b=1&k=20&m=1296111355&s=170667a&w=0&h=8i8MWIGRyIw9QXZPYHJz2ON0I9HCFOWDmhYd8e_kO-4=',
    },
]
const HomeProducts = () => {
    return (
        <Container>
            {
                data.map((val, index) => (
                    <ProductCard image={val.image} key={index} />
                ))
            }
        </Container>
    )
}
const Container = styled.div`
${tw`mt-4 mb-4 grid grid-cols-2 gap-2  
sm:grid-cols-3 lg:grid-cols-4
`}

`

export default HomeProducts
