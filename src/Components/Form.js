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
                <PersonalInfoForm className="form-element"></PersonalInfoForm>
                <SummaryForm className="form-element"></SummaryForm>
                <EducationForm className="form-element"></EducationForm>
                <ExpirienceForm className="form-element"></ExpirienceForm>
            </div>
        );
    }
}


export default Form;