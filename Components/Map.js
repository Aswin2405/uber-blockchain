import mapboxGl from 'mapbox-gl'
import React,{useEffect} from 'react'
const style = {
    wrapper: `flex-1 h-full w-full`,
  }

  mapboxGl.accessToken = "pk.eyJ1IjoiYXN3aW4yNCIsImEiOiJja3lrOGFveDYxMDJqMm9xb3prMGV3Z2tkIn0.HiDX7lymGLF6VhPWN6lr4A"
function Map() {
    useEffect(() => {
        const map = new mapboxGl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-99.29011, 39.39172],
          zoom: 3,
        })
    },[])
  return (
    <div className={style.wrapper} id="map" />
  )
}

export default Map