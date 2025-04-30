// import React from 'react';
// import Layout from '../components/Layout';
// import StreetViewModal from '../components/StreetViewModal';

// export default function StreetViewPage() {
//   return (
//     <Layout>
//       <h1>Street View</h1>
//       <StreetViewModal
//         open={true}
//         onClose={() => {}}
//         latitude={40.73061}
//         longitude={-73.935242}
//       />
//     </Layout>
//   );
// }
import React, { useState } from 'react';
import Layout from '../components/Layout';
import StreetViewModal from '../components/StreetViewModal';
import { Button, Typography, Box } from '@mui/material';

export default function StreetViewPage() {
  // Default to a NYC location (optional)
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    // Simulate setting a default address or test coordinates
    setLat(40.73061);
    setLng(-73.935242);
    setOpen(true);
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>Street View</Typography>

      {lat && lng ? (
        <StreetViewModal open={open} onClose={() => setOpen(false)} lat={lat} lng={lng} />
      ) : (
        <Box mt={4}>
          <Typography variant="body1" gutterBottom>
            No location selected. Click the button below to test street view.
          </Typography>
          <Button variant="contained" onClick={handleOpen}>
            Open Sample Street View
          </Button>
        </Box>
      )}
    </Layout>
  );
}
