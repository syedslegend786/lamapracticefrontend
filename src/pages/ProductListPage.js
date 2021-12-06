import React from 'react'
import Footer from '../components/footer/Footer'
import HomeProducts from '../components/homeproducts/HomeProducts'
import NavBar from './../components/navbar/NavBar'
import Announcement from './../components/announcement/Announcement'
import styled from 'styled-components'
import tw from 'twin.macro'
const ProductListPage = () => {
    return (
        <div>
            <NavBar />
            < Announcement />
            <FilterCont>
                <div>
                    <span className='capitalize text-2xl'>Filter Products:</span>
                    <Select>
                        <Option selected disabled>Color</Option>
                        <Option>Black</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                        <Option>Blue</Option>
                    </Select>
                    <Select>
                        <Option selected disabled>Size</Option>
                        <Option>xs</Option>
                        <Option>sm</Option>
                        <Option>lg</Option>
                        <Option>xlg</Option>
                    </Select>
                </div>
                <div>
                    <span className='capitalize text-2xl'>Sort Products:</span>
                    <Select>
                        <Option>Newest</Option>
                        <Option>Price(asc)</Option>
                        <Option>Price(desc)</Option>
                    </Select>
                </div>
            </FilterCont>
            <HomeProducts />
            <Footer />
        </div>
    )
}
const Option = styled.option`
${tw`outline-none border border-black p-2 tracking-widest`}
`
const Select = styled.select`
${tw`outline-none border border-black p-2 ml-3 mr-3`}
`
const FilterCont = styled.div`
${tw`flex justify-between flex-col py-3 px-3.5
space-y-3
`}
`
export default ProductListPage
