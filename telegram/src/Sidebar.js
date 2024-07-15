import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth0 } from "@auth0/auth0-react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Sidebar.scss';
import DarkModeSwitch from './DarkModeSwitch';

function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const { user } = useAuth0();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }}>
    <Box>
    <DarkModeSwitch/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {user.name}
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Divider />
    </Box>
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              < AccountCircleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              < GroupSharpIcon />
            </ListItemIcon>
            <ListItemText primary="New Group" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              < PermIdentityOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Contacts" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              < PhoneOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Calls" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              < GroupsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="People Nearby" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              < TurnedInOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Saved Messages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              < GroupSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              < PersonAddOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Invite Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              < HelpOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Telegram Features" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
    </Box>
  );

  return (
    <div className='sidebar'>
      <Button onClick={toggleDrawer(true)}><MenuIcon /></Button>
      <Drawer  className='sidebar_drawer' open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
export default Sidebar




















// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Fade from '@mui/material/Fade';
// import MenuIcon from '@mui/icons-material/Menu';
// import './Sidebar.scss';

// function Sidebar() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div className='sidebar'>
//       <Button
//         id="fade-button"
//         aria-controls={open ? 'fade-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//       >
//         <MenuIcon />
//       </Button>
//       <Menu
//         id="fade-menu"
//         MenuListProps={{
//           'aria-labelledby': 'fade-button',
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Fade}
//       >
//         <MenuItem onClick={handleClose}>Profile</MenuItem>
//         <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//       </Menu>
//     </div>
//   );
// }
// export default Sidebar;