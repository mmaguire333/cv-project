import React, { Component } from "react";
import '../../styles/EducationForm.css';

class EducationForm extends Component {


    render() {
      return (
        <div className="form-element">
            <form>
              <fieldset>
                <legend>Education</legend>
                <label htmlFor="school-input">Name of School: </label>
                <input type="text" id="school-input"></input>
                <label htmlFor="location-input">School Location: </label>
                <input type="text" id="location-input"></input>
                <label htmlFor="study-input">Title of Study: </label>
                <input type="text" id="study-input"></input>
                <label htmlFor="start-date-input">Start Date: </label>
                <input type="date" id="start-date-input"></input>
                <label htmlFor="end-date-input">End Date: </label>
                <input type="date" id="end-date-input"></input>
                <label htmlFor="honors-input">Honors: </label>
                <input type="text" id="honors-input"></input>
                <button type="submit">Add</button>
              </fieldset>
            </form>
        </div>
      ); 
    }
}

export default EducationForm;