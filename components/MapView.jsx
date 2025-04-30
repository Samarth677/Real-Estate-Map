import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic3ZheXNlciIsImEiOiJjbGgwbzl5NXcwdmMzM2VwdTkya2J6cDVmIn0.VrQewCt9w1K8QPsLzuDZjg';

export default function MapView() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div style={{ height: '600px', width: '100%' }}>
      <Map
        initialViewState={{
          latitude: 40.73061,
          longitude: -73.935242,
          zoom: 10,
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={-73.935242} latitude={40.73061} anchor="bottom">
          📍
        </Marker>

        {showPopup && (
          <Popup
            longitude={-73.935242}
            latitude={40.73061}
            anchor="top"
            onClose={() => setShowPopup(false)}
          >
            <div>Hello from New York!</div>
          </Popup>
        )}
      </Map>
    </div>
  );
}
