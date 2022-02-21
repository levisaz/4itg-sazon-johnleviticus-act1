import React from "react";
import '../App.css';
class Education extends React.Component{
    render(){
        return(
            <div class="head">

            <div class="header d-flex">
            <h6><b>Education</b></h6>
            </div>
            
            <h6 class="h6-educ">High School Diploma</h6>
            <h6 font-weight="normal">Jesus Saves Integrated School Foundation - Mabuco, Hermosa, Bataan</h6>
            <ul>
                <li>Consistent Honor Student</li>
            </ul>

            <h6 class="h6-educ">Bachelor of Science: Information Technology (2018 - Current)</h6>
            <h6 font-weight="normal">University of Santo Tomas - España Blvd,
Sampaloc, Manila</h6>
            <ul>
                <li>Member of <b>Society of Information Technology Enthusiasts - CICS ('19-'20)</b></li>
                <li>Dean's lister <b>1st and 2nd term ('19-'20)</b></li>
                <li>Dean's lister <b>1st and 2nd term ('20-'21)</b></li>
            </ul>

            
            </div>

        );
    }
}
export default Education;