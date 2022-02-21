import React from "react";
import Avatar from './images/profile-pic.png';
import '../App.css';

class About extends React.Component{
    render(){
        return(
            <div class ="about">
                
                <img src= {Avatar} alt="pic" align="CENTER" width="250" height="250" class="pfp"/>
                <h2>John Leviticus Sazon</h2>
                <p>BSIT</p>
                <hr />

                <h6>Bio</h6>
                <p class="summary">I am a 4th year student working
                    towards the Bachelor of
                    Science degree in Information
                    Technology focusing in Mobile
                    and Web Development from
                    the University of Santo Tomas.
                </p>

                
        
            </div>

        );
    }
}
export default About;