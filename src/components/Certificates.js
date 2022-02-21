import React from "react";
import '../App.css';
import udemyLogo from './images/Udemy-Logo.png';
import comptiaLogo from './images/comptia-logo.png';
class Certificates extends React.Component {
    render(){
        return(
            <div class="head">

            <div class="header d-flex">
            <h6><b>Certificates</b></h6>
            </div>
            
            <ul>
                <li>
                    <img src= {comptiaLogo} alt="pic" align="CENTER" width="50" height="50"/>
                    <b>CompTIA IT Fundamentals+</b> - CompTIA
                    <br />
                    Issued May 2019 · No Expiration Date <br/>
                    Credential ID 50bc865f-fa25-4b39-9f35-e8b24d539419 <br />
                    <a href="https://www.credly.com/badges/50bc865f-fa25-4b39-9f35-e8b24d539419" target="_blank">
                        See Credential</a>
                    
                </li>

                <li>
                    <img src= {udemyLogo} alt="pic" align="CENTER" width="50" height="25"/>
                    <b>DevOps, CI/CD (Continuous Integration/Delivery) for Beginners</b> - Udemy
                    <br />
                    Issued Feb 2022 · No Expiration Date <br/>
                    Credential ID UC-53d833e6-58a3-47ef-b882-7d1b507bba7f <br />
                    <a href="https://www.udemy.com/certificate/UC-53d833e6-58a3-47ef-b882-7d1b507bba7f/" target="_blank">
                        See Credential</a>
                    
                </li>

                <li>
                    <img src= {udemyLogo} alt="pic" align="CENTER" width="50" height="25"/>
                    <b>Project Management Fundamentals</b> - Udemy
                    Issued Feb 2022 · No Expiration Date <br/>
                    Credential ID UC-e272f2ef-d37b-4221-80eb-49bd6ddab127<br />
                    <a href="https://www.udemy.com/certificate/UC-e272f2ef-d37b-4221-80eb-49bd6ddab127/" target="_blank">
                        See Credential</a>
                </li>
            </ul>

            
            </div>

        );
    }
}
export default Certificates;