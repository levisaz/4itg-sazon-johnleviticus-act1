import React from "react";
import '../App.css';
class Seminars extends React.Component{
    render(){
        return(
            <div class="head">

            <div class="header d-flex">
            <h6><b>Seminars Attended</b></h6>
            </div>
            
            
            <table class="table">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Seminar Title</th>
                    <th scope="col">Date</th>
                    <th scope="col">Speaker</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>ICT Career Development: Knowing the Sector you belong!</td>
                    <td>January 28, 2022</td>
                    <td>Ravenal A. De Jesus, ASEAN Eng., PECE, LPT</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>GDSC X Tech-Knowledge-G: Let’s Git Together</td>
                    <td>January 31, 2022</td>
                    <td>Maya Louise Asuero</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Information Technology Breakthrough to Excellence</td>
                    <td>February 5, 2022</td>
                    <td>Mr. Emmanuel Karganilla; Mr. Marcus Morante; Mr. Lord Edgardian Tavu </td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Get Tech With Us: Research Talks</td>
                    <td>February 11, 2022</td>
                    <td>Alexis Collad; Patrick Narvasa; Diannah Santos </td>
                    </tr>
                </tbody>
            </table>
            

            
            </div>

        );
    }
}
export default Seminars;