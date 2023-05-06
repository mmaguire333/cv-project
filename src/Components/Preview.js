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
                <PersonalInfo data={this.props.personalInfo} populatePersonalForm={this.props.populatePersonalForm}></PersonalInfo>
                <Summary data={this.props.summary} populateSummaryForm={this.props.populateSummaryForm}></Summary>
                <Education data={this.props.educationInfo} handleEducationEdit={this.props.handleEducationEdit} handleEducationDelete={this.props.handleEducationDelete}></Education>
                <Expirience data={this.props.expirienceInfo} handleExpirienceEdit={this.props.handleExpirienceEdit} handleExpirienceDelete={this.props.handleExpirienceDelete}></Expirience>
            </div>
        );
    }
}

export default Preview;