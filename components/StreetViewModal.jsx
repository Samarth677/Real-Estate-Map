import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const GOOGLE_API_KEY = 'AIzaSyDF7mJAvS372T0kIjZNw5dhRbzmO76XPCw'; // Replace this with your real key!

export default function StreetViewModal({ open, onClose, lat, lng }) {
  if (!lat || !lng) return null;

  const streetViewUrl = `https://www.google.com/maps/embed/v1/streetview?key=${GOOGLE_API_KEY}&location=${lat},${lng}&heading=210&pitch=10&fov=80`;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        Street View
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <iframe
          title="Street View"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={streetViewUrl}
        ></iframe>
      </DialogContent>
    </Dialog>
  );
}

StreetViewModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
};
