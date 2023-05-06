import React, { Component } from "react";
import '../../styles/EducationForm.css';

class EducationForm extends Component {

    render() {
      return (
        <div className="form-element">
            <form onChange={this.props.handleEducationChange} onSubmit={this.props.handleEducationSubmit}>
              <fieldset>
                <legend>Education</legend>
                <label htmlFor="school-input">Name of School: </label>
                <input type="text" id="school-input" required></input>
                <label htmlFor="location-input">School Location (city, state): </label>
                <input type="text" id="location-input" required></input>
                <label htmlFor="study-input">Title of Study: </label>
                <input type="text" id="study-input" required></input>
                <label htmlFor="start-date-input">Start Date: </label>
                <input type="date" id="start-date-input" required></input>
                <label htmlFor="end-date-input">End Date (or expected graduation date): </label>
                <input type="date" id="end-date-input" required></input>
                <label htmlFor="honors-input">GPA/Honors (optional): </label>
                <input type="text" id="honors-input"></input>
                <button type="submit">Add</button>
              </fieldset>
            </form>
        </div>
      ); 
    }
}

export default EducationForm;