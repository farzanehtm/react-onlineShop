import Navbar from '../../components/navbar/Navbar'
import Slider from '../../components/slider/Slider'
import Boomrang from '../../components/boomrang/Boomrang'
import OneImage from '../../components/oneImage/OneImage'
import SpecialOffer from '../../components/specialOffer/SpecialOffer'
import SendingCondition from '../../components/sendingCondition/SendingCondition'
import SpecialSection from '../../components/specialSection/SpecialSection'
import MySelection from '../../components/mySelection/MySelection'
import SpecialBrands from '../../components/specialBrands/SpecialBrands'
import Footer from '../../components/footer/Footer'





const photos = [
  {
    src: "images/638366724527548089.jpg",
    alt: "عکس اول",
  },
  {
    src: "images/638364327497612412.jpg",
    alt: "عکس دوم",
  },
  {
    src: "images/638362598111984543.jpg",
    alt: "عکس سوم",
  },
];




const Home = () => {

    return (
      <>
        <Navbar />
        <Slider  />
        <Boomrang />
        <OneImage photos={photos.slice(0, 2)} />
        <SpecialOffer />
        <SendingCondition  />
        <SpecialSection />
        <MySelection />
        <SpecialBrands />
        <OneImage photos={[photos[2]]} />
        <Footer />
      </>
    )
  }
  
  export default Home