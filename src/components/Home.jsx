import User from './User'
import Swiper from "./Swiper"
import Newarrival from './Newarrival'

function Home() {
  window.scrollTo(0, 0);
  return (
    <>
      <Swiper/>
      <User/>
      <Newarrival/>
    </>
  )
}

export default Home
