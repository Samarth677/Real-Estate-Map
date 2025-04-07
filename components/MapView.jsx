import React, { useState, useRef, useCallback } from 'react';
import Map, { Source, Layer } from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic3ZheXNlciIsImEiOiJjbGgwbzl5NXcwdmMzM2VwdTkya2J6cDVmIn0.VrQewCt9w1K8QPsLzuDZjg';

const MapView = () => {
  const [hoveredParcelId, setHoveredParcelId] = useState(null);
  const [selectedParcelId, setSelectedParcelId] = useState(null);
  const mapRef = useRef();

  const onClick = useCallback((event) => {
    const features = event.features;
    if (features && features.length > 0) {
      const id = features[0].properties.ID;
      setSelectedParcelId(id);
      console.log('Selected Parcel ID:', id);
    }
  }, []);

  const onHover = useCallback((event) => {
    const features = event.features;
    if (features && features.length > 0) {
      setHoveredParcelId(features[0].properties.ID);
    } else {
      setHoveredParcelId(null);
    }
  }, []);

  return (
    <Map
      mapboxAccessToken={MAPBOX_TOKEN}
      initialViewState={{
        latitude: 40.73061,
        longitude: -73.935242,
        zoom: 10,
      }}
      style={{ width: '100%', height: '600px' }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      interactiveLayerIds={['parcel-fill', 'parcel-line']}
      onClick={onClick}
      onMouseMove={onHover}
      ref={mapRef}
    >
      <Source
        id="parcel-source"
        type="vector"
        url="mapbox://svayser.ae1mculr"
      >
        {/* Fill Layer */}
        <Layer
          id="parcel-fill"
          type="fill"
          source-layer="manhattan_staten_island_parce-7ng65o"
          paint={{
            'fill-color': [
              'case',
              ['==', ['get', 'ID'], selectedParcelId], '#FF5722',
              ['==', ['get', 'ID'], hoveredParcelId], '#FFCC80',
              '#90CAF9',
            ],
            'fill-opacity': 0.6,
          }}
        />

        {/* Line Layer */}
        <Layer
          id="parcel-line"
          type="line"
          source-layer="manhattan_staten_island_parce-7ng65o"
          paint={{
            'line-color': '#000',
            'line-width': 1,
          }}
        />
      </Source>
    </Map>
  );
};

export default MapView;
