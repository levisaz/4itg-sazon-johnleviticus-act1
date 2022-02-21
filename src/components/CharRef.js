import React from "react";
import '../App.css';
class CharRef extends React.Component{
    render(){
        return(
            <div class="head">

            <div class="header d-flex">
            <h6><b>Character Reference</b></h6>
            </div>

                <ul>
                    <li>Mr. Dickenson Culala</li>
                    <ul>
                        <li>OJT Supervisor at TELUS Intl. Phils.</li>
                        <li>dickensonculala@exampleemail.com</li>
                    </ul>

                    <li>Mrs. Lorena Oguilla</li>
                    <ul>
                        <li>Secondary School Teacher at JSISF</li>
                        <li>lorenaoguilla@exampleemail.com</li>
                    </ul>
                </ul>

            </div>

        );
    }
}
export default CharRef;