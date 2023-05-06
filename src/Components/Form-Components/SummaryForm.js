import React, { Component } from 'react';

import '../../styles/Summary.css'

class SummaryForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        let valid = e.target.checkValidity();

        if(!valid) {
            return;
        }

        let newText = e.target.querySelector('#summary-input').value;

        this.setState({
            text: newText
        });

        e.target.querySelector('#summary-input').value = '';

        this.props.setSummaryText(newText);
    }

    render() {
        return (
            <div className="form-element">
                <form onSubmit={this.onFormSubmit}>
                    <fieldset>
                        <legend>Summary</legend>
                        <textarea id="summary-input" rows={5} placeholder="A summary can include an overview of your career expiriences, skills and accomplishments, goals, etc." required></textarea>
                        <button type="submit">Submit</button>
                    </fieldset>          
                </form>
            </div>
        );
    }
}

export default SummaryForm;