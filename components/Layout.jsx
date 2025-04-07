import { Box, AppBar, Toolbar, Typography, Drawer, List, ListItem } from '@mui/material';

export default function Layout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>Real Estate Map</Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" sx={{ width: 240 }}>
        <Toolbar />
        <List>
          <ListItem button>Map</ListItem>
          <ListItem button>Properties</ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: 30 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
