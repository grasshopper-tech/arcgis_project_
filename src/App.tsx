import { ArcgisMap } from "@arcgis/map-components-react";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Point from "@arcgis/core/geometry/Point";
import Graphic from "@arcgis/core/Graphic";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol"
import './App.css'

function App() {

  return (
    <div className='map-div'>
      <ArcgisMap 
        center={[12, 52]} 
        zoom={10}
        onArcgisViewReadyChange={(event) => {
          const map: __esri.Map = event.target.map;
          const graphicsLayer = new GraphicsLayer();
          map.add(graphicsLayer);

          const point = new Point({
            longitude: 12,
            latitude: 52,
          });

          const simpleSymbol = new SimpleMarkerSymbol({
            color: "green",
          })

          const graphic = new Graphic({
            geometry: point,
            symbol: simpleSymbol
          });

          graphicsLayer.add(graphic);
        }}
        ></ArcgisMap>
    </div>
  )
}

export default App
