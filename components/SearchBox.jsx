import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { TextField, Button, CircularProgress, Snackbar } from '@mui/material';

const GOOGLE_API_KEY = 'AIzaSyDF7mJAvS372T0kIjZNw5dhRbzmO76XPCw'; // 🔁 Replace with yours

export default function SearchBox({ onParcelFound }) {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = deg => (deg * Math.PI) / 180;
    const R = 6371; // Earth radius in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError('');

      // 1. Geocode the address
      const geoRes = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: search,
          key: GOOGLE_API_KEY,
        },
      });

      const location = geoRes.data.results[0].geometry.location;
      const lat = location.lat;
      const lng = location.lng;

      // 2. Get parcel list from GraphQL
      const graphQLQuery = {
        query: `
          query {
            attomTaxAssessors {
              items {
                PropertyAddressFull
                PropertyLatitude
                PropertyLongitude
                parcel_id
              }
            }
          }
        `,
      };

      const parcelRes = await axios.post(
        'https://graphql.eng.meridiancapital.com/graphql',
        graphQLQuery,
        { headers: { 'Content-Type': 'application/json' } }
      );

      const parcels = parcelRes.data.data.attomTaxAssessors.items;

      // 3. Find closest match
      const closest = parcels.reduce((prev, curr) => {
        const d1 = getDistance(lat, lng, parseFloat(prev.PropertyLatitude), parseFloat(prev.PropertyLongitude));
        const d2 = getDistance(lat, lng, parseFloat(curr.PropertyLatitude), parseFloat(curr.PropertyLongitude));
        return d1 < d2 ? prev : curr;
      });

      onParcelFound(closest.parcel_id, parseFloat(closest.PropertyLatitude), parseFloat(closest.PropertyLongitude));
    } catch (err) {
      console.error(err);
      setError('Address not found or API error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TextField
        fullWidth
        label="Search Property Address"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button fullWidth variant="contained" onClick={handleSearch} disabled={loading}>
        {loading ? <CircularProgress size={24} /> : 'Search'}
      </Button>
      <Snackbar
        open={!!error}
        message={error}
        autoHideDuration={4000}
        onClose={() => setError('')}
      />
    </>
  );
}

SearchBox.propTypes = {
  onParcelFound: PropTypes.func.isRequired,
};
