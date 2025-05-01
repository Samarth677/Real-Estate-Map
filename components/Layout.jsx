import React from 'react';
import PropTypes from 'prop-types';
import { Box, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, CssBaseline } from '@mui/material';
import Link from 'next/link';
//how are you 
const drawerWidth = 240;

export default function Layout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <AppBar
        position="fixed"
        sx={{ 
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            🏡 Real Estate Prospecting
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <List>
          {['Search', 'Map', 'Street View'].map((text) => (
            <ListItem button component={Link} href={`/${text.toLowerCase().replace(' ', '-')}`} key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
