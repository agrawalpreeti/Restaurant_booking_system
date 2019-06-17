import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { yellow } from '@material-ui/core/colors';
import LocatioOn from '@material-ui/icons/LocationOn';
import Restaurant from '@material-ui/icons/Restaurant';
import {Dropdown} from 'react-bootstrap';
import Button from 'react-bootstrap/Button.js';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar.js';
import Avatar from '@material-ui/core/Avatar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Mycss.css';
import { Link} from 'react-router-dom';





const useStyles = makeStyles(theme => ({
  AppBar:{
    color: yellow,
  },
  grow: {
    flexGrow: 1,
    width: '100%'
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(0),
    marginLeft: 5,
    // width: '130%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    marginRight : '0%'

  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  bigAvatar: {
    backgroundColor : 'black'
    
  },
  dropdown: {
    marginRight : '0%',
    backgroundColor: 'white',
    borderRadius: '8px',
    height: '40px !important'
    // color: 'white'
  },
  cityColor: {
    backgroundColor: 'white',
    // marginBottom: '60px',
    height: '35px !important',
  }
}));

function MyNavBars(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="Show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon/>
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="Show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="Account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

    let cityValueShow = "";



  return (
    <div className={classes.grow}>
      <AppBar position="static">
      <Toolbar>
      <Container>
    <Row>
      {/* <Col md={{span:0.5}}> */}
      <Link to="/"><Avatar className={classes.bigAvatar}><Restaurant></Restaurant></Avatar></Link>
      {/* </Col> */}
        <Col md={{span:10}}>
        <Link to="/"><Typography className={classes.title} variant="h6" noWrap>
            Restaurant Booking
        </Typography></Link>
        </Col>
        </Row>
        </Container>
    {/* <Col md={{span:0, offset:0}}> */}
      <Dropdown className={classes.dropdown}>
            <Dropdown.Toggle variant={classes.cityColor} id="dropdown-basic">
              <LocatioOn></LocatioOn>
              <input
              style = {{border: "none", width: "140px"}}
              autoComplete="off"
              autoCorrect="off"
              placeholder="Search City"
              type="text"
              value={cityValueShow}
              />
              {/* <AutoComplete></AutoComplete> */}
            <Dropdown.Menu className="scroll">
              <DropdownCity city={props.city}/>
            </Dropdown.Menu>
            </Dropdown.Toggle>
        </Dropdown>

    {/* </Col> */}
    {/* <Col md={{offset:0, span:5, offset:0}}> */}
    <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
    {/* </Col> */}
    
    {/* <Col md={{span:0}}> */}
    <ButtonToolbar>
            <Button variant="primary">Search</Button>
          </ButtonToolbar>
    {/* </Col>
  </Row>
  </Container> */}
        
         
          
          
         
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="Show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="Show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="Account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="Show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}



function DropdownCity (props){
  let city = [];
  city = props.city.map((value, index) => 
    <Dropdown.Item href={"#/" + value} onSelect={()=>
      // props.cityNameSelected = value;
      // props.cityNameSelected = value;
      // props.cityIdCalculate(props.cityNameSelected)}}>
    value}>
      {value}
      </Dropdown.Item>
   );
   return city;
}

export default MyNavBars;