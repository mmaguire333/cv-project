import React, { Component } from "react";
import PersonalInfo from './Preview-Components/PersonalInfo';

import '../styles/Preview.css';
import Summary from "./Preview-Components/Summary";
import Education from "./Preview-Components/Education";
import Expirience from "./Preview-Components/Expirience";

class Preview extends Component {



    render() {
        return (
            <div className="Preview">
                <PersonalInfo></PersonalInfo>
                <Summary></Summary>
                <Education></Education>
                <Expirience></Expirience>
            </div>
        );
    }
}


export default Preview;