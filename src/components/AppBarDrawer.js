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
  Link,
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

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

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

const Drawer = styled(
  MuiDrawer,
  {}
)(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',

  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

function AppBarDrawer() {
  const itemList = [
    {
      text: 'Task',
      icon: <FaTasks />,
      link: '/',
    },
    {
      text: 'Post',
      icon: <FaNewspaper />,
      link: '/post',
    },
    {
      text: 'User',
      icon: <FaUser />,
      link: '/user',
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
  // const container =
  //   window !== undefined ? () => window().document.body : undefined;
  return (
    <div>
      <AppBar
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
      <Drawer
        open={open}
        variant="permanent"
        PaperProps={{
          sx: {
            backgroundColor: '#000751',
            color: '#fff',
          },
        }}
      >
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
            <input type="image" img src={'/img/logo.svg'} alt="logo" />
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
              <Link href={link} color="inherit" underline="none">
                <ListItemButton>
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
              </Link>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
}
export default AppBarDrawer;
