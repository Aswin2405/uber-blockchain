import Head from 'next/head'
import Confirm from '../Components/Confirm'
import LocationSelector from '../Components/LocationSelector'
import Map from '../Components/Map'
import NavBar from '../Components/NavBar'

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  rideRequestContainer: `h-full w-[400px] ml-[1rem] py-[3rem] absolute top-0 left-0 flex flex-col justify-end z-20`,
  rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll`,
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Uber</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className={style.wrapper}>
  <NavBar />
  <div className={style.main}>
<Map />
  </div>
  <div className={style.rideRequestContainer}>
    <div className={style.rideRequest}>
<LocationSelector />
<Confirm />
    </div>
  </div>
</div>
</>
  )
}
