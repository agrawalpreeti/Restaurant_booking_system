import React from 'react';
import ControlledCarousel from './components/MainPage.js';
import {Link, Route, BrowserRouter as Router } from 'react-router-dom';
import {LogIn, SignUp} from './components/Loginmy.js';
import Home from './components/MyHome';
import CardContent from './components/CardContent';
import axios from 'axios';
import {Dropdown} from 'react-bootstrap';
import Cardmy from './components/Cardmy';




class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
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
                             featured_image: ""
                            }
                      }]
      },
      restaurantInfo: {},
      resid: ""
    }
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
     });
  console.log(this.state.db);
  });
  // this.cardClick();
  
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
            <Cardmy index={index} restaurants={this.state.db.restaurantSearch.restaurants} onLoad={()=>this.cardClick(value.restaurant.R.res_id)}></Cardmy>
        </Link>
    );
    return cards;
  }

  cardClick = (value) =>{
    let url = "https://developers.zomato.com/api/v2.1/";
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
        // <CardContent resData = {res.data}/>
          this.setState({
              db: db
          })        
    });
}



  // componentDidMount(){
  //   let url = "https://developers.zomato.com/api/v2.1/";

  //   axios.get(url + this.state.db.restaurantSearch.url1 + this.state.db.cityName.id +
  //      this.state.db.restaurantSearch.url2 + this.state.db.cityName.name + this.state.db.restaurantSearch.url3,
  //     {
  //       headers:{
  //         "Accept": "application/json",
  //         "user-key": "0c87f14b32add1de8469c4d4cdb376a0 ",
  //       }
  //     })
  //     .then((res)=>{
  //       let db = this.state.db;
  //       db.restaurantSearch.restaurants = res.data.restaurants.map((value,index)=>
  //         value
  //       );
  //       this.setState({
  //         db : db,
  //       });
  //     });
  //   console.log(this.state.db);
  // }

  // cityIdCalculate = (name) =>{
  //   console.log(name);
  //   this.setState({
  //     cityNameSelected: name
  //   })
  // }

  // restId = (value)=>{
  //   console.log(value);
  // }

  render(){
    // console.log(this.props.restId);
    return(
      <Router>
           {/* <Link to="/"></Link>
           <Link to="/login"></Link>
           <Link to="/signup"></Link>
           <Link to="/home"></Link>
           <Link to="/home/card"></Link> */}

            <Route exact path="/" render={()=><ControlledCarousel/>}/>
            <Route path="/login" render={()=><LogIn/>} />
            <Route path="/signup" render={()=><SignUp/>} />
            <Route exact path="/home" render={()=><Home citySelectedColorChange={()=>this.citySelectedColorChange()} cardPrint={()=>this.cardPrint()} restaurants={this.state.db.restaurantSearch.restaurants} restId={()=>this.restId()}/>} />

            {/* <Route exact path="/home" render={()=>
            this.state.db.cities.map((value)=>{
              return <CityDropdown city={value} cityNameSelected={this.cityNameSelected(value)}/>
            })}>
            </Route> */}
            <Route exact path={"/home/res_id:" + this.state.db.resid } render={()=> <CardContent citySelectedColorChange={() => this.citySelectedColorChange()} restaurantInfo={this.state.db.restaurantInfo}/>} />        
            <Route exact path="/home" render={()=><Home citySelectedColorChange={()=>this.citySelectedColorChange()} restaurants={this.state.db.restaurantSearch.restaurants} restId={()=>this.restId()}/>} />
{/* 
             <Route exact path="/home" render={()=>
            this.state.db.cities.map((value)=>{
              return <CityDropdown city={value} cityNameSelected={this.cityNameSelected(value)}/>
            })}>
            </Route>  */}
            <Route exact path={"/home/card/res_id:" + this.state.db.cityName.id} render={()=> <CardContent cityId={this.state.db.cityName.id} restId={this.props.restId} />} />        
      </Router>     
      );
  }
}

export default Main;






//807b1a5bea43c47e9977489a0c4c84b4

// url + this.state.db.restaurantSearch.url1 + this.state.db.cityName.id +
// this.state.db.restaurantSearch.url2 + this.state.db.cityName.name + this.state.db.restaurantSearch.url3