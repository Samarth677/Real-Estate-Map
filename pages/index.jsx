import React, { useState } from 'react';
import Layout from '../components/Layout';
import MapView from '../components/MapView';
import SearchBox from '../components/SearchBox';
import StreetViewModal from '../components/StreetViewModal'; // optional if you implemented it

export default function Home() {
  const [parcelId, setParcelId] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const handleParcelFound = (id, lat, lng) => {
    setParcelId(id);
    setCoordinates({ lat, lng });
    setModalOpen(true);
  };

  return (
    <Layout>
      <SearchBox onParcelFound={handleParcelFound} />
      <MapView selectedParcelId={parcelId} centerCoordinates={coordinates} />
      <StreetViewModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        lat={coordinates.lat}
        lng={coordinates.lng}
      />
    </Layout>
  );
}
