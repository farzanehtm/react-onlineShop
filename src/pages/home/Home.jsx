import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Slider from '../../components/slider/Slider'
import Boomrang from '../../components/boomrang/Boomrang'
import OneImage from '../../components/oneImage/OneImage'
import "./home.css"
import SpesialOffer from '../../components/spesialOffer/SpesialOffer'
import SendingCondition from '../../components/sendingCondition/SendingCondition'
import SpecialAccess from '../../components/specialAccess/SpecialAccess'
import BoomrangSection from '../../components/boomrangSection/BoomrangSection'
import Magazine from '../../components/magazine/Magazine'
import SpecialBrand from '../../components/specialBrand/SpecialBrand'
import TwoImage from '../../components/twoImages/TwoImage'
import Footer from '../../components/footer/Footer'

const Home = () => {

  return (
    <>
      <Navbar  />
      <Slider  />
      <Boomrang />
      <OneImage />
      <SpesialOffer />
      <SendingCondition />
      <SpecialAccess />
      <BoomrangSection />
      <Magazine />
      <SpecialBrand />
      <TwoImage />
      <Footer />
    </>
  )
}

export default Home