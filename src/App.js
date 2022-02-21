import React from "react";
import About from "./components/About";
import PersonalInfo from "./components/PersonalInfo";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Summary from "./components/Summary";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Seminars from "./components/Seminars";
import Ojt from "./components/Ojt";
import Skills from "./components/Skills";
import CharRef from "./components/CharRef";
import './App.css';


class App extends React.Component{
    render(){
    return(
        <div class="row">
            <div class="col-4">
                <About/>
                <PersonalInfo/>
                <Contact/>
            </div>
            <div class="col-8">
                <Summary/>
                <Ojt/>
                <Education/>
                <Skills/>
                <Projects/>
                <Certificates/>
                <Seminars/>
                <CharRef/>
                
            </div>
        </div>
       );
    }
}
export default App;