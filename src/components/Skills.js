import React from "react";
import '../App.css';

class Skills extends React.Component{
    render(){
        return(
            <div class ="head">
                
                <div class="header d-flex">
                <h6><b>Skills & Abilities</b></h6>
                </div>

                <div>
                    <h6 class="h6-educ">Programming Languages &<br/> Frameworks:</h6>
                    <ul>
                        <li>Java, Python, Javascript, Typescript, HTML, CSS</li>
                        <li>Angular, Bootstrap</li>
                    </ul>
                    <h6 class="h6-educ">Technology:</h6>
                    <ul>
                        <li>GitHub, Postman, Visual Studio Code, Android Studio</li>
                    </ul>
                </div>
                
            </div>

        );
    }
}
export default Skills;