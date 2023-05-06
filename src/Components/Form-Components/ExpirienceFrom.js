import React, { Component } from "react";
import '../../styles/ExpirienceForm.css';

class ExpirienceForm extends Component {

    render() {
        return (
            <div className="form-element">
                <form onChange={this.props.handleExpirienceChange} onSubmit={this.props.handleExpirienceSubmit}>
                    <fieldset>
                        <legend>Expirience</legend>
                        <label htmlFor="company-input">Company Name: </label>
                        <input type="text" id="company-input" required></input>
                        <label htmlFor="job-title-input">Job Title: </label>
                        <input type="text" id="job-title-input" required></input>
                        <label htmlFor="expirience-city-input">City: </label>
                        <input type="text" id="expirience-city-input" required></input>
                        <label htmlFor="expirience-state-input">State: </label>
                        <input type="text" id="expirience-state-input" required></input>
                        <label htmlFor="start-input">Start Date: </label>
                        <input type="date" id="start-input" required></input>
                        <label htmlFor="end-input">End Date (skip if not applicable): </label>
                        <input type="date" id="end-input"></input>
                        <label htmlFor="first-duty-input">Duty/Responsibility #1: </label>
                        <textarea type="text" id="first-duty-input" rows={3} required></textarea>
                        <label htmlFor="second-duty-input">Duty/Responsibility #2 (optional): </label>
                        <textarea type="text" id="second-duty-input" rows={3}></textarea>
                        <label htmlFor="third-duty-input">Duty/Responsibility #3 (optional): </label>
                        <textarea type="text" id="third-duty-input" rows={3}></textarea>
                        <button type="submit">Add</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default ExpirienceForm;