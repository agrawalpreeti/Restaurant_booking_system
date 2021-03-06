import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from 'react-bootstrap/Button.js';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({

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
  }));

  // function LogIn(props) {
  //   const classes = useStyles();
  
  //   return (
  //     <Container component="main" maxWidth="xs">
  //       <CssBaseline />
  //       <div className={classes.paper}>
  //         <Avatar className={classes.avatar}>
  //           <LockOutlinedIcon />
  //         </Avatar>

  //         <Typography component="h1" variant="h5">
  //           Log in
  //         </Typography>
  //         <form className={classes.form} noValidate>
  //           <TextField
  //             variant="outlined"
  //             margin="normal"
  //             required
  //             fullWidth
  //             id="email"
  //             label="Email Address"
  //             name="email"
  //             autoComplete="email"
  //             autoFocus
  //           />
  //           <TextField
  //             variant="outlined"
  //             margin="normal"
  //             required
  //             fullWidth
  //             name="password"
  //             label="Password"
  //             type="password"
  //             id="password"
  //             autoComplete="current-password"
  //           />
  //           <FormControlLabel
  //             control={<Checkbox value="remember" color="primary"/>}
  //             label="Remember me"
  //           />
  //           <Button
  //             type="submit"
  //             fullwidth="true"
  //             color="primary"
  //             className={classes.submit}
              
  //           >
  //             Log in
  //           </Button>
  //           <Grid container>
  //             <Grid item xs>
  //               <Link href="/" variant="body2">
  //                 Forgot password?
  //               </Link>
  //             </Grid>
  //             <Grid item>
  //               {/* <Link href="/signup" variant="body2"> */}
  //               <Link href="#" onClick={()=>props.dontHaveAnAccount()}>
  //                 {"Don't have an account? Sign Up"}
  //                 </Link>
  //               {/* </Link> */}
  //             </Grid>
  //           </Grid>
  //         </form>
  //       </div>
      
  //     </Container>
  //   );
  // }





//  function SignUp(props) {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign Up
//         </Typography>
//         <form className={classes.form} noValidate>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="fname"
//                 name="firstName"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="firstName"
//                 label="First Name"
//                 autoFocus
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="lastName"
//                 label="Last Name"
//                 name="lastName"
//                 autoComplete="lname"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControlLabel
//                 control={<Checkbox value="allowExtraEmails" color="primary" />}
//                 label="I want to receive inspiration, marketing promotions and updates via email."
//               />
//             </Grid>
//           </Grid>
//           {/* {console.log('yes')} */}
//           {/* {props.signUpButton()} */}
//           <Grid container justify="flex-end">
//             <Grid item>
//               <Link  href="#" onClick={()=>props.alreadyAnAccount()} variant="body2">
//                 Already have an account? Log in
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//     </Container>
//   );
// }









//  export  { LogIn};