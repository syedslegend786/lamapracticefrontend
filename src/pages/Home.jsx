import React from 'react'
import Announcement from '../components/announcement/Announcement'
import Catagories from '../components/catagoriesHome/Catagories'
import Footer from '../components/footer/Footer'
import HomeProducts from '../components/homeproducts/HomeProducts'
import MyCrousel from '../components/mycrousel/MyCrousel'
import NewScroll from '../components/mycrousel/NewScroll'
import NavBar from '../components/navbar/NavBar'

const Home = () => {
    return (
        <div>
            <Announcement />
            <NavBar />
            {/* <MyCrousel /> */}
            <NewScroll />
            <Catagories />
            <HomeProducts />
            <Footer />
        </div>
    )
}

export default Home
