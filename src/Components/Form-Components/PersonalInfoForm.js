import React, { Component } from "react";

class PersonalInfoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            position: '',
            email: '',
            phone: '',
            city: '',
            state: '',
            country: ''
        };
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        let valid = e.target.checkValidity();
        if(!valid) {
            return;
        }

        let newInfo = {
            firstName: e.target.querySelector('#first-name-input').value,
            lastName: e.target.querySelector('#last-name-input').value,
            position: e.target.querySelector('#position-input').value,
            email: e.target.querySelector('#email-input').value,
            phone: e.target.querySelector('#phone-input').value,
            city: e.target.querySelector('#city-input').value,
            state: e.target.querySelector('#state-input').value,
            country: e.target.querySelector('#country-input').value,
        };

        this.setState({
            firstName: newInfo.firstName,
            lastName: newInfo.lastName,
            position: newInfo.position,
            email: newInfo.email,
            phone: newInfo.phone,
            city: newInfo.city,
            state: newInfo.state,
            country: newInfo.country
        });

        e.target.querySelector('#first-name-input').value = '';
        e.target.querySelector('#last-name-input').value = '';
        e.target.querySelector('#position-input').value = '';
        e.target.querySelector('#email-input').value = '';
        e.target.querySelector('#phone-input').value = '';
        e.target.querySelector('#city-input').value = '';
        e.target.querySelector('#state-input').value= '';
        e.target.querySelector('#country-input').value = '';

        this.props.setPersonalInfo(newInfo);
    }
    

    render() {
        return (
            <div className="form-element">
                <form onSubmit={this.onFormSubmit}>
                    <fieldset>
                        <legend>Personal Information</legend>
                        <label htmlFor="first-name-input">First Name: </label>
                        <input type="text" id="first-name-input" required></input>
                        <label htmlFor="last-name-input">Last Name: </label>
                        <input type="text" id="last-name-input" required></input>
                        <label htmlFor="position-input">Current or Desired Position: </label>
                        <input type="text" id="position-input" required></input>
                        <label htmlFor="email-input">Email: </label>
                        <input type="email" id="email-input" required></input>
                        <label htmlFor="phone-input">Phone Number: </label>
                        <input type="tel" pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$" id="phone-input" required></input>
                        <label htmlFor="city-input">City: </label>
                        <input type="text" id="city-input" required></input>
                        <label htmlFor="state-input">State: </label>
                        <input type="text" id="state-input" required></input>
                        <label htmlFor="country-input">Country: </label>
                        <input type="text" id="country-input" required></input>
                        <button type="submit" id="name-submit">Submit</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default PersonalInfoForm;