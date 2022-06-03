import * as React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { styles } from './styles';
import {
  MenuItem,
  IconButton,
  Divider,
  Typography,
  Toolbar,
  List,
  Box,
  Avatar,
  Menu,
  Tooltip,
  TextField,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from '@mui/material';
import {
  FaBars,
  FaChevronLeft,
  FaSearch,
  FaPowerOff,
  FaTasks,
  FaNewspaper,
  FaUser,
} from 'react-icons/fa';
import MuiAppBar from '@mui/material/AppBar';

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    overflow: 'auto',
    width: drawerWidth,
    height: '100vh',
    backgroundColor: '#000751',
    color: '#fff',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const AppBarDrawer = (props) => {
  const { history } = props;
  const itemList = [
    {
      text: 'Task',
      icon: <FaTasks />,
      link: () => history.push('/'),
    },
    {
      text: 'Post',
      icon: <FaNewspaper />,
      link: () => history.push('/post'),
    },
    {
      text: 'User',
      icon: <FaUser />,
      link: () => history.push('/user'),
    },
  ];
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [anchorElUser, setAnchorElUser] = React.useState(false);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div>
      <AppBar
        position="fixed"
        color="black"
        open={open}
        style={styles.shadowBasic}
        sx={{
          backgroundColor: '#fff',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            size="small"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <FaBars />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box mr={1} sx={{ color: 'action.active' }}>
              <FaSearch />
            </Box>

            <TextField
              id="standard-search"
              placeholder="Search Post"
              type="search"
              variant="standard"
              color="primary"
              InputProps={{ disableUnderline: true }}
            />
          </Box>

          <Box
            sx={{ flexGrow: 1, justifyContent: 'flex-end', display: 'flex' }}
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/img/avatar-male.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                mt: '56px',
                boxShadow:
                  '0px 0px 14px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.06)',
              }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <ListItemText aria-disabled>
                  <Typography>jennifer@gmail.com</Typography>
                </ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleCloseUserMenu}>
                <ListItemIcon color="error">
                  <FaPowerOff color="error" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <Typography color="error">Log Out</Typography>
                </ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={open} variant="permanent" container={container}>
        <Toolbar
          color="black"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: [1],
          }}
        >
          <Box display="flex" sx={{ ml: 2 }}>
            <img src="/img/logo.svg" />
            <Typography display="flex" fontWeight="700" sx={{ ml: 2 }}>
              Todost
            </Typography>
          </Box>
          <IconButton onClick={toggleDrawer} size="small">
            <FaChevronLeft color="#fff" />
          </IconButton>
        </Toolbar>
        <Divider color="grey" />
        <List component="nav" sx={{ mt: 3 }}>
          {itemList.map((item, index) => {
            const { text, icon, link } = item;
            return (
              <ListItemButton onClick={link}>
                <ListItemIcon>
                  <Box
                    sx={{
                      '@media (min-width:640px)': {
                        ml: '12px',
                      },
                      color: '#fff',
                    }}
                  >
                    {icon}
                  </Box>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};
