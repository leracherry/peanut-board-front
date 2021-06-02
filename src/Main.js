import React from "react";
import './App.css';
import hero from './hero.png';
import powerUp from './power-ups.png'
import cardBack from "./card-back.png"
import {Link, useHistory} from "react-router-dom";
import { MainContainer } from "./components/MainContainer";
import logo from "./logo.png";
import {Navbar} from "react-bootstrap";
import Button from "@material-ui/core/Button";
import Nav from "react-bootstrap/Nav";

export const Main = () => {
    return (
        <div className="content">
            <img src ={hero} class="hero" align="middle" />{' '}
            <p class="mainContent">Peanut board helps teams move work forward.</p>
            <p>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office,
                the way your team works is unique — accomplish it all with Peanut board.</p>
            <Button  variant="contained" size="large" color="primary" onClick={() => {
                window.location.assign('/Step1');
            }} >Sign up - it's free</Button>
            <p className="mainContent2" align="middle">It’s more than work. It’s a way of working together.</p>
            <p className="content2" align="middle">Start with a Peanut board, lists, and cards. Customize and expand with more features as your teamwork grows.
                Manage projects, organize tasks, and build team spirit—all in one place.
            </p>
            <p className="mainContent3" align="left"> Features to help your team succeed</p>
            <p className="content3" align="left">Powering a productive team means using a powerful tool (and plenty of snacks).
                From meetings and projects to events and goal setting, Peanut’s intuitive features give any team the ability to quickly
                set up and customize workflows for just about anything.
            </p>
            <img src={cardBack} className="cardBack"/>{' '}
            <p className="mainContent4" align="right">The board is just the beginning</p>
            <p className="content4" align="right">Lists and cards are the building blocks of organizing work on a Peanut board. Grow from there with task assignments,
                timelines, productivity metrics, calendars, and more.
            </p>
            <img src={powerUp} className="powerUps"/>{' '}
            <p className="mainContent3">Integrate top work tools</p>
            <p className="content3">Easily connect the apps your team already uses into your Peanut workflow, or add a Power-Up that helps fine-tune one specific need.
                With hundreds of Power-Ups available, your team’s workflow wishes are covered.</p>
        </div>
    );
};

