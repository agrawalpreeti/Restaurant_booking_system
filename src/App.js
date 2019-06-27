import React from 'react';
import ControlledCarousel from './components/MainPage.js';
import {Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/MyHome';
import CardContent from './components/CardContent';
import axios from 'axios';
import {Dropdown} from 'react-bootstrap';
import Cardmy from './components/Cardmy';
import * as firebase from "firebase/app";
import "firebase/auth";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from 'react-bootstrap/Button.js';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { thisExpression } from '@babel/types';
// import GoogleMapReact from 'google-map-react';
import FavoriteIcon from '@material-ui/icons/Favorite';






var firebaseConfig = {
  apiKey: "AIzaSyB9iAGwo97YScsQmj-qLQ739K7W4xHljWM",
  authDomain: "restaurant-tablebooking-b6924.firebaseapp.com",
  databaseURL: "https://restaurant-tablebooking-b6924.firebaseio.com",
  projectId: "restaurant-tablebooking-b6924",
  storageBucket: "",
  messagingSenderId: "419755409320",
  appId: "1:419755409320:web:03b93a202df7710f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// var email="vibha.ajm13@gmail.com";
// var password="password";

//Create User with Email and Password



class Main extends React.Component{
  constructor(props){
    super(props);
  
    this.state = {};
    this.state.user={
      users: [],
      i:
        {
      temp_firstname: "",
      temp_lastname: "",
      temp_email: "",
      temp_passward: "",
      temp_date: "",
      initial_date: ""
        }
    };
    this.state.db = {
      cities: [ "AGARTALA","AGRA","AHMEDABAD","AIZWAL","AJMER","ALLAHABAD","ALLEPPEY","ALIBAUG","ALMORA","ALSISAR","ALWAR",
        "AMBALA","AMLA","AMRITSAR","ANAND",
           "ANKLESHWAR","ASHTAMUDI","AULI","AURANGABAD","BADDI","BADRINATH","BALASINOR","BALRAMPUR", "BAMBORA","BANDHAVGARH",	
                "BANDIPUR","BANGALORE", "BARBIL"	,  "BAREILLY", "BEHROR"	,
                "BELGAUM"	,   "BERHAMPUR",   "BETALGHAT", "BHARATPUR,BHANDARDARA","BHARUCH", "BHAVANGADH", "BHAVNAGAR"	,
                "BHILAI"	,    "BHIMTAL"	,    "BHOPAL"	, "BHUBANESHWAR", "BHUJ",   "BIKANER"	, "BINSAR"	,"BODHGAYA",
                	"BUNDI"	 ,     "CALICUT"	,  "CANANNORE", "CHAIL"	,
                "CHAMBA"	,  "CHANDIGARH"	, "CHENNAI"	,"CHIKMAGALUR"	,"CHIPLUN"	,  "CHITRAKOOT","CHITTORGARH",
                "COIMBATORE"	, "COONOOR"	,"COORG"	,
                "CORBETT" ,  "CUTTACK", "DABHOSA"	, "DALHOUSIE", "DAMAN"	,"DANDELI"	,"DAPOLI"	,"DARJEELING", "DAUSA"	,
                "DEHRADUN", "DHARAMSHALA","DIBRUGARH",	"DIGHA"	, "DIU","DIVE" , "DOOARS"	,"DURGAPUR", "DURSHET"	, "DWARKA",
                "FARIDABAD", "FIROZABAD",	  "GANGOTRI", "GANGTOK","GANAPATIPULE"	,"GANDHIDHAM"	,"GANDHINAGAR"	,"GARHMUKTESHWAR",
                	"GARHWAL",  "GAYA"	,
                "GHAZIABAD",  "GOA"	,"GOKHARNA",  "GONDAL","GORAKHPUR","GREATER", "GULMARG"	,"GURGAON"	,"GURUVAYOOR",	 "GUWAHATI",	
                "GWALIOR"	,"HALEBID", "HAMPI", "HANSI", "HARIDWAR","HASSAN"	,"HOSPET"	,  "HOSUR"	,"HUBLI","HYDERABAD",
                 "IDUKKI"	, "IGATPURI",  "IMPHAL"	,   "INDORE"	,"JABALPUR",	
                "JAIPUR"	,"JAISALMER",	"JALANDHAR","JALGAON"	,"JAMBUGODHA",  "JAMMU"	,"JAMNAGAR","JAMSHEDPUR","JAWHAR"	,
                "JHANSI"	,"JODHPUR"	,   "JOJAWAR"	,   "JORHAT"	,  "JUNAGADH","KABINI", "KALIMPONG","KANATAL","KANCHIPURAM"	, "KANHA",	
                "KANPUR",	"KANYAKUMARI","KARGIL",	"KARJAT",	"KARNAL",	"KARUR"	,"KARWAR","KASARGOD",	"KASAULI","KASHIPUR", "KASHID"	,
                "KATRA"	,"KAUSANI"	,   "KAZA"	,"KAZIRANGA","KEDARNATH","KHAJJIAR","KHAJURAHO","KHANDALA","KHIMSAR"	,
                "KOCHIN"	,"KODAIKANAL",	"KOLHA"	,
                "KOLKATA"	,"KOLLAM"	,  "KOTA"	, "KOTAGIRI",	"KOTTAYAM","KOVALAM",  "KUFRI"	,"KUMBALGARH","KULLU","KUMARAKOM",
                	"KUMBAKONAM","KUMILY",  
                 "KURSEONG"	,"KUSHINAGAR"	, "LACHUNG", "LEH"	,"LAKSHADWEEP"	,"LONAVALA", "LOTHAL","LUCKNOW"	,"LUDHIANA", "MADURAI"	,
                "MAHABALESHWAR","MAHABALIPURAM","MALAPPURAM"	,"MALPE"	,"MALSHEJ GHAT", "MALVAN"	, "MANALI"	, "MANDAVI"
                	,"MANDAWA"	,"MANESAR",
                "MARARRI"	, "MANDORMONI",	"MANGALORE","MANMAD",	"MARCHULA",  "MATHERAN","MATHURA"	,"MCLEODGANJ", "MOHALI"	,
                "MOUNT ABU","MORADABA",  "MORBI"	,"MUKTESHWAR",	"MUMBAI"	,"MUNDRA"	,"MUNNAR","MURUD JANJIRA",
                "MUSSOORIE","MYSORE","NADUKANI","NAGAPATTINAM","NAGARHOLE","NAGAUR FORT","NAGOTHANE", "NAGPUR",	"NAHAN","NAINITAL", "NALDHERA",	
                "NANDED",	"NAPNE","NASIK","NAVI" ,  "NERAL","NEW DELHI","NILGIRI"	, "NOIDA","OOTY","ORCHHA","OSIAN","PACHMARHI",	
                "PALAMPUR","PALANPUR","PALI", "PAHALGAM", "PALITANA","PALLAKAD","PANCHGANI","PANCHKULA","PANNA","PANHALA","PANVEL",	
                "PANTNAGAR", "PARWANOO", "PATIALA"	,"PATHANKOT",	"PATNA"	,"PATNITOP","PELLING", "PENCH"	, "PHAGWARA",	
                "PHALODI"	,"PINJORE"	,"PONDICHERRY"	,"POOVAR"	,"PORBANDAR"	,"PORT BLAIR"	,"POSHINA"	,"PRAGPUR"	,"PUNE,PURI",
                "PUSKHAR","PUTTAPARTHI","RAI BAREILLY","RAICHAK"	,"RAIPUR"	,"RAJASTHAN","RAJGIR","RAJKOT","RAJPIPLA", "RAJSAMAND",
                "RAJAHMUNDRY"	,"RAMESHWARAM"	, "RAM NAGAR","RAMGARH","RANAKPUR","RANCHI"	, "RANIKHET",	
                "RANNY","RANTHAMBORE","RATNAGIRI","RAVANGLA","RISHIKESH","RISHYAP"	,"ROHETGARH","ROURKELA","SAJAN","SALEM",	 
                "SAPUTARA","SASAN GIR","SATTAL","SAWAI MADHOPUR","SAWANTWADI","SECUNDERABAD", "SHILLONG","SHIMLA","SHIMLIPAL","SHIRDI", "SHARAVANBELGOLA"	,
                "SHIVANASAMUDRA","SIANA" ,"SILIGURI","SILVASSA","SIVAGANGA","SOLAN","SONAULI","SRINAGA","SUNDERBAN","SURAT",
                "TANJORE"	,"TAPOLA","TARAPITH","THANE","THEKKADY" ,"THIRVANNAMALAI","THIRUVANANTHAPURAM","TIRUCHIRAPALLI","TIRUPUR"	,"TIRUPATI",
                "THRISSUR","UDAIPUR","UDHAMPUR","UDUPI","UJJAIN","UTTARKASHI","VADODARA","VAGAMON"	,"VARKALA"	,"VAPI","VARANASI",
                "VELANKANNI","VELLORE"	,"VERAVAL","VIJAYAWADA","VIKRAMGADH","VISHAKAPATNAM","WAYANAD"	,"WANKANER",	"YAMUNOTR", "YERCAUD","YUKSOM"	
                 ],
      cityName: {
        name: "Delhi",
        id: ""
      },
      
      restaurantSearch: {
        restaurants: [{restaurant:
                           {
                             name: "",
                             location: {address: ""},
                             user_rating: {aggregate_rating: ""},
                             R: {res_id: ""},
                             featured_image: "",
                            }
                      }]
      },
      restaurantInfo: {
        flag: false,
      },
      fav: <FavoriteIcon onClick={()=>this.heartClick()} style={{color:'grey'}}/>,
      
      resid: "",
      cuisines: [],
      cuisine_selected: ""
    }
    // if (window.performance) {
    //   if (performance.navigation.type == 1) {
    //     this.cardClick();
    //     alert( "This page is reloaded" );
    //   } else {
    //     alert( "This page is not reloaded");
    //   }
    // }
  }

  userAddedTemporarily = () =>{
    console.log("temporarily");
    let k = this.state.user.i;
    // k.users.push(this.state.user.i);

    axios.post('http://localhost:8080/temporary',k)
      .then((res)=>{
        //do something with response
        console.log(res.data);
      });

    this.setState({
      user : k
    });
  }

  // componentDidMount() {
  //   this.timerID = setInterval(
  //     () => this.tick(),
  //     1000
  //   );
  // }

  // tick = () =>{
  //   let p = this.state.user;
  //   let k = new Date();
  //   p.i.temp_date = k.getTime();
  //   this.setState({
  //     user: p
  //   })
  // }
//8.64e+7
//   componentWillUnmount() {
//     if(this.state.user.temp_date >= (this.state.user.initial_date + 1)){
      
//       var user = firebase.auth().currentUser;

//       user.delete().then(function() {
//         // User deleted.
//       }).catch(function(error) {
//         // An error happened.
//         console.log(error)
//       });
// console.log("user deleted")

//       clearInterval(this.timerID);
//     }
//   }

  userConfirmed = (i)=>{
    console.log("permanent");
    // let k = this.state.user;
    // k.users.push(i);


    // i.last_name.push(this.state.user.temp_lastname);
    // i.email.push(this.state.user.temp_email);
    // i.passward.push(this.state.user.temp_passward);

    // this.state.user.users;
    // let k = this.state.user;
    // k.users.push(i);

    axios.get('http://localhost:8080/temporary')
    .then((resp)=>{
      //do something with response
      console.log(resp.data);
      if(resp.data.length !== 0)

      {//TODO:
      //for more than 1 user access at same time resp.data[0] fails
      axios.post('http://localhost:8080/permanent',resp.data[0])
      .then((res)=>{
        //do something with response
        console.log(res.data);
        
        axios.delete('http://localhost:8080/temporary/'+resp.data[0]._id)
        .then((res)=>{
          //do something with response
        })
      });}
    // }).catch((error)=>{
    //   console.log(error)
    });

    
    // this.setState({
    //   user : k
    // });
   // console.log(this.state.user);    
  }

  mySignUp = ()=>{
// console.log(this.state.user);

    if(this.state.user.i.temp_passward.length >= 6){
    var actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be whitelisted in the Firebase Console.
      url: 'http://localhost:3000/home',
      // This must be true.
      handleCodeInApp: true,
    }

    let email = this.state.user.i.temp_email;
    console.log(this.state.user.i);

   let p = this.state.user;
   let k = new Date();
   p.i.initial_date = k.getTime();
   this.setState({
     user: p
   })
  //  this.timerID = setInterval(
  //   () => this.tick(),
  //   1000
  // );

   this.userAddedTemporarily();
   firebase.auth().createUserWithEmailAndPassword(email, this.state.user.i.temp_passward).then(function(result) {
      console.log(result);
          // console.log(res.data.temp_email);
        firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
        .then(function(result) {
          // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          window.localStorage.setItem('emailForSignIn', email);
          window.alert("We have sent a confirmation mail. Click on the link given in the mail. The link will expire after 24 hours.");
          console.log("email sent");
          // console.log(result);
          
        })
        .catch(function(error) {
          // Some error occurred, you can inspect the code: error.code
          console.log(error);
          // if(error)
        });
      }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      window.alert(error);
    });
  }
  else{
    window.alert("Length of passward should be greater than 6");
  }
  }

  logIn = () =>{
    // firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
    //     console.log(email);
    // }).catch(function(error) {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     console.log(errorCode);
    //     console.log(errorMessage);
    //   });
  }

  getUserInfo = () =>{
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
      } else {
        // User is signed out.
      }
    });
  }

  logout = ()=>{
    firebase.auth().signOut().then(function() {
      console.log('User Logged Out!');
    }).catch(function(error) {
      console.log(error);
    });
  }

  // checkLogin = ()=>{
  //   firebase.auth().onAuthStateChanged(function(user) {
  //     if (user) {
  //       console.log("logged in");
  //       document.addEventListener('DOMContentLoaded', function() {
  //         // TODO: Implement getParameterByName()
        
  //         // Get the action to complete.
  //         var mode = getParameterByName('mode');
  //         // Get the one-time code from the query parameter.
  //         var actionCode = getParameterByName('oobCode');
  //         // (Optional) Get the continue URL from the query parameter if available.
  //         var continueUrl = getParameterByName('continueUrl');
  //         // (Optional) Get the language code if available.
  //         var lang = getParameterByName('lang') || 'en';
        
  //         // Configure the Firebase SDK.
  //         // This is the minimum configuration required for the API to be used.
  //         var config = {
  //           // 'apiKey': <API_KEY> // Copy this key from the web initialization
  //                               // snippet found in the Firebase console.
  //         };
  //         var app = firebase.initializeApp(config);
  //         var auth = app.auth();
        
  //         // Handle the user management action.
  //         switch (mode) {
  //           case 'resetPassword':
  //             // Display reset password handler and UI.
  //             handleResetPassword(auth, actionCode, continueUrl, lang);
  //             break;
  //           case 'recoverEmail':
  //             // Display email recovery handler and UI.
  //             handleRecoverEmail(auth, actionCode, lang);
  //             break;
  //           case 'verifyEmail':
  //             // Display email verification handler and UI.
  //             handleVerifyEmail(auth, actionCode, continueUrl, lang);
  //             break;
  //           case 'signIn':
  //               handleVerifyEmail(auth, actionCode, continueUrl, lang);
  //           default:
  //             // Error: invalid mode.
  //         }
  //       }, false);
        
  //     } else {
  //       console.log("NOT logged in")
  //     }
  //   });
  // }

  makeStyles = (theme) => ({

    root: {
      flexGrow: 1,
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      },
    button: {
        margin: theme.spacing(1),
      },
      input: {
        display: 'none',
      },

      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,

      },
      form: {
        width: '100%', 
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      }
  });

  signUpFirstName = (e) =>{
    let name = this.state.user;
    name.i.temp_firstname = e.target.value;
    this.setState({
      user: name,
    })
  }

  signUpLastName = (e) =>{
    let name = this.state.user;
    name.i.temp_lastname = e.target.value;
    this.setState({
      user: name,
    });
  }

  signUpEmail = (e) =>{
    let name = this.state.user;
    name.i.temp_email = e.target.value;
    this.setState({
      user: name,
    });
  }

  signUpPassward = (e) =>{
    let name = this.state.user;
    name.i.temp_passward = e.target.value;
    this.setState({
      user: name,
    });
  }

  thisSignUp = () =>{
    const classes = makeStyles();
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={this.signUpFirstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={this.signUpLastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={this.signUpEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password (minimum 6 characters)"
                  type="Passward"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.signUpPassward}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            {/* {console.log('yes')} */}
            {/* {props.signUpButton()} */}
            <Button
            // type="submit"
            fullWidth
            // variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>{this.mySignUp()}}
          >
            Sign Up
          </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link  href="#"  variant="body2">
                {/* onClick={()=>props.alreadyAnAccount()} */}
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }



  componentWillMount() {
    let url = "https://developers.zomato.com/api/v2.1/";
    //id calculater
    axios.get(url + "cities?q=" + this.state.db.cityName.name,
    {
      headers:{
        "Accept": "application/json",
        "user-key": "0c87f14b32add1de8469c4d4cdb376a0 ",
      }
    })
    .then((res)=>{
      let db = this.state.db;
      db.cityName.id = res.data.location_suggestions[0].id;
      // db.cityValueShow = this.props.restId
      this.setState({
        db : db,
      });
    })
    .then((res)=>{

    axios.get(url + "search?entity_id=" + this.state.db.cityName.id + "&entity_type=city&q=" + this.state.db.cityName.name + "&count=20",
     {
       headers:{
         "Accept": "application/json",
         "user-key": "0c87f14b32add1de8469c4d4cdb376a0 ",
       }
     })
     .then((res)=>{
       let db = this.state.db;
       db.restaurantSearch.restaurants = res.data.restaurants.map((value,index)=>
         value
       );
       this.setState({
         db : db,
       });
     })
    })
     .then((res)=>{
      axios.get(url + "cuisines?city_id=" + this.state.db.cityName.id,
       {
         headers:{
           "Accept": "application/json",
           "user-key": "0c87f14b32add1de8469c4d4cdb376a0 ",
         }
       })
       .then((res)=>{
         let db = this.state.db;
         db.cuisines = res.data.cuisines.map((value,index)=>
           value
         );
         this.setState({
           db : db,
         });
       });
  console.log(this.state.db);
  });
  // this.cardClick(this.state.db.resid);
  if (window.performance) {
    if (performance.navigation.type == 1) {
      this.cardClick(window.location.href.split(":")[3]);
      // alert( window.location.href.split(":")[3]);
    } else {
      // alert( "This page is not reloaded");
    }
  }

}

  citySelectedColorChange = () =>{
    let dropdownList = [];
    dropdownList = this.state.db.cities.map((value)=>{
      return <Dropdown.Item href={"#/" + value} value={value} onSelect={()=>this.cityNameSelected(value)}>
      {value}
    </Dropdown.Item>});
    // {console.log(dropdownList)}
    return dropdownList;
  }
  
  cityNameSelected = (value) =>{
    // let ind = this.state.db.cities.indexOf(value);
    // console.log(value, ind);
    let db = this.state.db;
    db.cityName.name = value;
    this.setState({
      db : db
    });
    this.componentWillMount();
     console.log(this.state.db)
  }

  cardPrint = () => {
    let cards = [];
    cards = this.state.db.restaurantSearch.restaurants.map((value, index) =>
        <Link to={"/home/res_id:" + value.restaurant.R.res_id} onClick={()=>this.cardClick(value.restaurant.R.res_id)} style={{ textDecoration: 'none', marginBottom: '2%'}}>
            <Cardmy index={index} restaurants={this.state.db.restaurantSearch.restaurants} ></Cardmy>
        </Link>
    );
    return cards;
  }

  cardClick = (value) =>{
    let url = "https://developers.zomato.com/api/v2.1/";
    //id calculater
    axios.get(url + "restaurant?res_id=" + value,
    {
      headers:{
        "Accept": "application/json",
        "user-key": "0c87f14b32add1de8469c4d4cdb376a0 ",
      }
    })
    .then((res)=>{
      let db = this.state.db;
      db.restaurantInfo = res.data;
      db.resid = value;
      db.center = {center: {
        lat: res.data.location.latitude,
        lng: res.data.location.longitude,
      }};

          this.setState({
              db: db }) 

          let obj = {
            resid: value,
            id: this.state.db.cityName.id,
            tables_available: 10, //TODO: will be set by the admin
          }
      axios.get('http://localhost:8080/available/' + value)
      .then((resp)=>{
        //do something with response
        console.log(resp.data);
        if(resp.data.length === 0)
          axios.post('http://localhost:8080/available',obj)
          .then((res)=>{
            //do something with response
            console.log(res.data);
          });
    });
           
    });
}

heartClick = () =>{
  let db = this.state.db;
    db.restaurantInfo.flag = !(this.state.db.restaurantInfo.flag);
    db.fav = <FavoriteIcon onClick={()=>this.heartClick()} style={this.state.db.restaurantInfo.flag ? { color:'red'} : { color:'grey'}}/>
    this.setState({
      db : db
    });
    console.log(this.state.db)
    
}

cuisinPrint = () =>{
  // this.componentWillMount();
  let cuisin = [];
  cuisin = this.state.db.cuisines.map((value)=>
    <li><a href="#" onClick={()=>this.cuisinClick(value.cuisine.cuisine_name)}>{value.cuisine.cuisine_name}</a></li>
  );
  return cuisin;
}

cuisinClick = (value) =>{
  this.setState({
    cuisine_selected: value
  });
}
   

 




  render(){
    return(

      
      <Router>
       
        
            <Route exact path="/" render={()=><ControlledCarousel thisSignUp={()=>this.thisSignUp()}/>}/>
            <Route path="/signup" render={()=><SignUp mySignUp={()=>this.mySignUp()}/>} /> */}
            <Route exact path="/home" render={()=><Home i={this.state.user.i} userConfirmed={()=>this.userConfirmed(this.state.user.i)} citySelectedColorChange={()=>this.citySelectedColorChange()} cardPrint={()=>this.cardPrint()} restaurants={this.state.db.restaurantSearch.restaurants} cuisinPrint={()=>this.cuisinPrint()} cuisines={this.state.db.cuisines}/>} cuisine_selected={this.state.db.cuisine_selected} />
<<<<<<< HEAD
            <Route exact path={"/home/res_id:" + this.state.db.resid } render={()=> <CardContent cardClick={()=>this.cardClick()} fav={this.state.db.fav} citySelectedColorChange={() => this.citySelectedColorChange()} restaurantInfo={this.state.db.restaurantInfo}/>} /> 
            {/* <Route exact path="/home/user" render{()=>}*/}
          
=======

            {/* <Route exact path="/home" render={()=>
            this.state.db.cities.map((value)=>{
              return <CityDropdown city={value} cityNameSelected={this.cityNameSelected(value)}/>
            })}>
            </Route> */}
            <Route exact path={"/home/res_id:" + this.state.db.resid } render={()=> <CardContent fav={this.state.db.fav} citySelectedColorChange={() => this.citySelectedColorChange()} restaurantInfo={this.state.db.restaurantInfo}/>} />        
            {/* <Route exact path="/home" render={()=><Home citySelectedColorChange={()=>this.citySelectedColorChange()} restaurants={this.state.db.restaurantSearch.restaurants} restId={()=>this.restId()}/>} /> */}
{/* 
             <Route exact path="/home" render={()=>
            this.state.db.cities.map((value)=>{
              return <CityDropdown city={value} cityNameSelected={this.cityNameSelected(value)}/>
            })}>
            </Route>  */}
>>>>>>> c43a6642ce5ef5b5ae4590f5775ac4c4f4758bf6
      </Router>                 
      );
  }
}

export default Main;






//807b1a5bea43c47e9977489a0c4c84b4
