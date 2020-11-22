import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import HomeIcon from "@material-ui/icons/Home";
import TodayIcon from "@material-ui/icons/Today";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import InfoIcon from "@material-ui/icons/Info";
import FlipCameraAndroidIcon from "@material-ui/icons/FlipCameraAndroid";

import "./Home.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export class Home extends Component {
  render() {
    return (
      // Navigation Bar - Start
      <div class="outerdiv">
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm p-0 mb-3 bg-white rounded">
          <a className="navbar-brand" href="#">
            <FlipCameraAndroidIcon></FlipCameraAndroidIcon>&nbsp;Snappix
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <HomeIcon></HomeIcon>&nbsp;Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <TodayIcon></TodayIcon>&nbsp;Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <ContactSupportIcon></ContactSupportIcon>&nbsp;ContactUs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <InfoIcon></InfoIcon>&nbsp;About
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* // Navigation Bar - End */}
        {/* // Body - Start */}
        <div className="BodyDiv container">
          <div className="container head-element">
            <Typography variant="h3" component="h2">
              Welcome to <br />
              <span className="badge badge-info snappix">Snappix</span>
            </Typography>
          </div>
          <div className="container signUp">
            <Typography variant="h5" component="h2">
              Give us your details
            </Typography>
            <br />
            <FormControl>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text2" />
              <FormHelperText id="my-helper-text">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
            <br />
            <FormControl>
              <InputLabel htmlFor="my-input">PhoneNumber</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text2" />
              <FormHelperText id="my-helper-text2">
                Enter your phone number
              </FormHelperText>
            </FormControl>
            <br />
            <FormControl>
              <br />
              <TextField
                id="outlined-multiline-static"
                label="Event Description"
                placeholder="Describe the event you are having"
                multiline
                rows={4}
                variant="outlined"
              />
            </FormControl>
            <br />
            <br />
            <FormControl>
              <button type="button" className="btn btn-info">
                Submit
              </button>
            </FormControl>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <hr />
        </div>
        <br />
        <br />
        {/* Cards code here */}
        <div className="row container">
          <div className="  col-md-4">
            <div className="card shadow-sm text-center">
              <img src="../aboutUs.png" />
              <div className="card-body">
                <h5 className="card-title">About Us</h5>
                <p className="card-text">
                  Get a photographer at your doorstep just by filling a form
                </p>
                <a href="#">Know More!</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow-sm card text-center">
              <img src="../contactus.png" />
              <div className="card-body">
                <h5 className="card-title">Contact Us</h5>
                <p className="card-text">
                  We will look into your issue with utmost priority.
                  <br />
                </p>
                <a href="#">Contact Now!</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow-sm card text-center">
              <img src="../support.png" />
              <div className="card-body">
                <h5 className="card-title">Support Us</h5>
                <p className="card-text">
                  We are a startup. We appreciate your support.
                </p>
                <a href="">Share</a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div class="container">
          <hr />
        </div>
        <div className="container footer">
          <li>
            <ul>Home</ul>
            <ul>Book Now!</ul>
            <ul>Like</ul>
          </li>
          <li>
            <ul>Email: pixnap.photography@gmail.com</ul>
            <ul>Phone: +91 9550387115</ul>
          </li>
        </div>
      </div>
      // Body - End
    );
  }
}
