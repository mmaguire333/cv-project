import React, { Component } from "react";
import '../../styles/PersonalInfoForm.css'

class PersonalInfoForm extends Component {


    render() {
        return (
            <div className="form-element">
                <form>
                    <fieldset>
                        <legend>Personal Information</legend>
                        <label htmlFor="first-name-input">First Name: </label>
                        <input type="text" id="first-name-input"></input>
                        <label htmlFor="last-name-input">Last Name: </label>
                        <input type="text" id="last-name-input"></input>
                        <label htmlFor="position-input">Current or Desired Position: </label>
                        <input type="text" id="position-input"></input>
                        <label htmlFor="email-input">Email: </label>
                        <input type="email" id="email-input"></input>
                        <label htmlFor="phone-input">Phone Number: </label>
                        <input type="tel" id="phone-input"></input>
                        <label htmlFor="city-input">City: </label>
                        <input type="text" id="city-input"></input>
                        <label htmlFor="state-input">State: </label>
                        <input type="text" id="state-input"></input>
                        <label htmlFor="country-input">Country: </label>
                        <input type="text" id="country-input"></input>
                        <button type="submit" id="name-submit">Submit</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default PersonalInfoForm;