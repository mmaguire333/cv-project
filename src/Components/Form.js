import React, { Component } from 'react';
import PersonalInfoForm from './Form-Components/PersonalInfoForm';
import EducationForm from './Form-Components/EducationForm';
import ExpirienceForm from './Form-Components/ExpirienceFrom';

import '../styles/Form.css';
import SummaryForm from './Form-Components/SummaryForm';


class Form extends Component {



    render() {
        return (
            <div className="Form">
                <h1>Start Building Your CV</h1>
                <PersonalInfoForm className="form-element" setPersonalInfo={this.props.setPersonalInfo}></PersonalInfoForm>
                <SummaryForm className="form-element" setSummaryText={this.props.setSummaryText}></SummaryForm>
                <EducationForm className="form-element" handleEducationChange={this.props.handleEducationChange} handleEducationSubmit={this.props.handleEducationSubmit}></EducationForm>
                <ExpirienceForm className="form-element" handleExpirienceChange={this.props.handleExpirienceChange} handleExpirienceSubmit={this.props.handleExpirienceSubmit}></ExpirienceForm>
                {/* <div className="save-container">
                    <button id="save-button" type="button" onClick={this.props.printPreview}>Save/Print Preview</button>
                </div> */}
            </div>
        );
    }
}


export default Form;