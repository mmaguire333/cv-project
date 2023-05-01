import React, { Component } from "react";
import '../../styles/ExpirienceForm.css';

class ExpirienceForm extends Component {

    render() {
        return (
            <div className="form-element">
                <form>
                    <fieldset>
                        <legend>Expirience</legend>
                        <label htmlFor="company-input">Company Name: </label>
                        <input type="text" id="company-input"></input>
                        <label htmlFor="job-title-input">Job Title: </label>
                        <input type="text" id="job-title-input"></input>
                        <label htmlFor="start-date-input">Start Date: </label>
                        <input type="date" id="start-date-input"></input>
                        <label htmlFor="end-date-input">End Date: </label>
                        <input type="date" id="end-date-input"></input>
                        <label htmlFor="description-input">Duties/Responsibilities: </label>
                        <input type="text" id="description-input"></input>
                        <button type="submit">Add</button>
                    </fieldset>
                    
                </form>
            </div>
        )
    }
}

export default ExpirienceForm;