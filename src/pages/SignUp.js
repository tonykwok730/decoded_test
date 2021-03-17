import React from "react";
import { AppBar, Button, Grid, Link, Paper, TextField, Toolbar, Typography, Avatar } from '@material-ui/core';
import {Redirect} from 'react-router-dom';

const GridStyle = {
    width: "100%",
    matgin: "0px",
}

const leftPaperStyle = {
    width: "100%",
    backgroundCOlor: "#4051B5"
}

const h3Style = {
    color: "#FFFFFFF",
    padding: "20px"
}

const rightPaperStyle = {
    padding: "20px",
    height: "60vh",
    width: "280px",
    margin: "20px auto"
}

const buttonStyle = {
    margin: "10px 0px"
}

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstname: "",
            lastname: "",
            success: false,
            login: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.redirectToLogIn = this.redirectToLogIn.bind(this);
    } 

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    redirectToLogIn() {
        this.setState({login: true});
    }


    render() {
        if (this.state.login) {
            return <Redirect to='./login'/>
        }
        return (
            <div> 
                <AppBar position="static">
                    <Toolbar>
                        <h1>Find-A-Friend</h1>
                    </Toolbar>
                </AppBar>
                <Grid container style={GridStyle} spacing={2}>
                    <Grid item xs={9}>
                        <Paper style={leftPaperStyle}>
                            <div>
                                <h3 style={h3Style}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                                <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="yellow flowers" width="60%"/>

                            </div>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper style={rightPaperStyle} elevation={10}>
                            <Grid align="center">
                                <Avatar></Avatar>
                                <h2>Sign Up</h2>
                            </Grid>
                            <form>
                                <TextField label="First Name" placeholder="John" name="firstname" id="firstname" 
                                fullwidth required autofocus onChange={this.handleChange} value={this.state.firstname}/>
                                <TextField label="Last Name" placeholder="Appleseed" name="lastname" id="lastname" 
                                fullwidth required onChange={this.handleChange} value={this.state.lastname}/>
                                <TextField label="Email" placeholder="Enter Email" name="email" id="email" 
                                fullwidth required onChange={this.handleChange} value={this.state.email}/>
                                <TextField label="Password" placeholder="Enter Password" name="password" id="password" 
                                fullwidth required type onChange={this.handleChange} value={this.state.password}/>
                                <Button type="submit" color="primary" variant="contained" fullwidth style={buttonStyle}>SignUp</Button>
                            </form>
                            <Typography>
                                Already have an account?{" "}<Link href='' onClick={this.redirectToLogIn}>Log In</Link>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default SignUp;