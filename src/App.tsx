import { ArcgisMap } from '@arcgis/map-components-react'
import './App.css'

function App() {

  return (
    <div className='map-div'>
      <ArcgisMap center={[12, 52]} zoom={10}></ArcgisMap>
    </div>
  )
}

export default App
