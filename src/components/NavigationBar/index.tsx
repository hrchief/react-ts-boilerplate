import React, { useState } from 'react';

import { NavLink, withRouter } from 'react-router-dom';
import Routes from '../../Routes';

import { createStyles, makeStyles, Theme, fade } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Drawer,
  MenuItem,
  ListItemText,
  InputBase,
  IconButton,
  Badge,
  Button
 } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import logo from '../../assets/logo.jpg';

import { Modal } from '../Modal'
import { useModal } from '../Modal/useModal';
import { ConfirmationModal } from '../Modal/modal-confirm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appbar: {      
      boxShadow: "none",
      backgroundColor: "#fff",
      color: "#000",
      borderBottom: '1px solid #ccc'
    },
    drawer: {
      width: 300,
    },
    fullList: {
      width: 'auto',
    },
    navlinkcontainer: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      textAlign: 'center'
    },
    navlink: {
      padding: theme.spacing(2),
      display: 'inline-block'
    },
    avatar: {
      position: 'absolute',
      right: '10px'
    },
    search: {
      display: 'inline-block',
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
      border: '1px solid gray'
    },
    searchIcon: {
      padding: theme.spacing(0, 1),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'gray'
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    createModalButton: {
      borderRadius: '20px',
      backgroundImage: 'linear-gradient(120deg, DodgerBlue, DeepSkyBlue)',
      color: 'white'
    },
    notifyIconButton: {
      margin: '0px 10px'
    }
  }),
);

const NavigationBar: React.FC = (props: any) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsOpen(open);
  };

  const activeRoute = (routeName: any) => {
    return props.location.pathname === routeName ? true : false;
  }

  const { isShown, toggleModal } = useModal();  
  const onConfirm = () => toggleModal();
  const onCancel = () => toggleModal();

  return (
    <div>
      <div className={classes.root}>
        <AppBar className={classes.appbar} position="static">
          <Toolbar>
            <img src={logo} alt="logo" />
            <div className={classes.navlinkcontainer}>
              {Routes.map((prop, key) => {
                return (
                  <NavLink className={classes.navlink} to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                    <MenuItem selected={activeRoute(prop.path)}>
                      <ListItemText primary={prop.sidebarName} />
                    </MenuItem>
                  </NavLink>
                );
              })}
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{ root: classes.inputRoot, input: classes.inputInput }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <IconButton className={classes.notifyIconButton} color="primary">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Button variant="contained" className={classes.createModalButton} onClick={toggleModal}>
                Create Modal
              </Button>
              <Modal
                isShown={isShown}
                hide={toggleModal}
                headerText="Modal"
                modalContent={
                  <ConfirmationModal
                    onConfirm={onConfirm}
                    onCancel={onCancel}
                    message="This is hand-made modal myself"
                  />
                }
              />
            </div>
            <Avatar alt="Remy Sharp" src="avatar.png" className={classes.avatar} onClick={toggleDrawer(true)} />
          </Toolbar>
        </AppBar>
      </div>
      <Drawer classes={{ paper: classes.drawer }} open={isOpen} onClose={toggleDrawer(false)}>
        <div
          className={classes.fullList}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <h1>Welocome.</h1>
          <h2>I am Bomji.</h2>
        </div>
      </Drawer>
    </div>
  );
};

export default withRouter(NavigationBar);