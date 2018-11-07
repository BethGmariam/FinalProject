import React from "react";
import { Button, Icon } from 'semantic-ui-react';
import "./Footer.css";

const Footer = props => (
    <div id = "footer"> 

    <p> Made with <span role="img" aria-label="Heart"> ❤️ </span> by Bethlehem, Chriscelle, Melvyn and Zachary &copy; 2018 </p>

        <div>
            <Button color='facebook'>
            <Icon name='facebook' /> Facebook
            </Button>
            <Button color='twitter'>
            <Icon name='twitter' /> Twitter
            </Button>
            <Button color='linkedin'>
            <Icon name='linkedin' /> LinkedIn
            </Button>
            <Button color='instagram'>
            <Icon name='instagram' /> Instagram
            </Button>
            <Button color='youtube'>
            <Icon name='youtube' /> YouTube
            </Button>
        </div>
    </div>
)

export default Footer